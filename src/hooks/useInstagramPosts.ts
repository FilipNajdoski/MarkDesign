import { useEffect, useState } from 'react';

const BEHOLD_FEED_URL = 'https://feeds.behold.so/GM02wuGltYrZB1qOMtDw';

type BeholdSize = { mediaUrl?: string };

type BeholdPost = {
  id?: string;
  mediaType?: string;
  mediaUrl?: string;
  thumbnailUrl?: string;
  permalink?: string;
  caption?: string;
  prunedCaption?: string;
  hashtags?: string[];
  sizes?: { small?: BeholdSize; medium?: BeholdSize; large?: BeholdSize; full?: BeholdSize };
};

export type InstagramPost = {
  id: string;
  imageUrl: string;
  caption: string;
  hashtags: string[];
  permalink?: string;
};

const HASHTAG_REGEX = /#([\p{L}\p{N}_]+)/gu;

const getImageUrl = (post: BeholdPost): string | undefined =>
  post.sizes?.large?.mediaUrl ??
  post.sizes?.full?.mediaUrl ??
  post.sizes?.medium?.mediaUrl ??
  (post.mediaType === 'VIDEO' ? post.thumbnailUrl : post.mediaUrl);

const getHashtags = (post: BeholdPost): string[] => {
  const tags = post.hashtags?.length
    ? post.hashtags
    : Array.from((post.caption ?? '').matchAll(HASHTAG_REGEX), m => m[1]);
  return Array.from(new Set(tags.map(t => t.replace(/^#/, '').toLowerCase())));
};

const getCaption = (post: BeholdPost): string =>
  (post.prunedCaption ?? (post.caption ?? '').replace(HASHTAG_REGEX, ''))
    .replace(/\s+/g, ' ')
    .trim();

const toInstagramPost = (post: BeholdPost, index: number): InstagramPost | null => {
  const imageUrl = getImageUrl(post);
  if (!imageUrl) return null;
  return {
    id: post.id ?? String(index),
    imageUrl,
    caption: getCaption(post),
    hashtags: getHashtags(post),
    permalink: post.permalink,
  };
};

const useInstagramPosts = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    fetch(BEHOLD_FEED_URL, { signal: controller.signal })
      .then(res => (res.ok ? res.json() : Promise.reject(res.status)))
      .then(data => {
        const raw: BeholdPost[] = Array.isArray(data) ? data : data?.posts ?? [];
        setPosts(raw.map(toInstagramPost).filter((p): p is InstagramPost => p !== null));
        setLoading(false);
      })
      .catch(() => {
        if (controller.signal.aborted) return;
        setError(true);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { posts, loading, error };
};

export default useInstagramPosts;
