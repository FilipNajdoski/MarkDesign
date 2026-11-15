import { useMemo } from 'react';
import rawPosts from '../data/instagramPosts.json';

type ImportedPost = {
  id: string;
  images: string[];
  caption: string;
  hashtags: string[];
};

export type InstagramPost = {
  id: string;
  postId: string;
  imageUrl: string;
  caption: string;
  hashtags: string[];
};

// Each image of a multi-image post becomes its own carousel slide.
const useInstagramPosts = () => {
  const posts = useMemo<InstagramPost[]>(
    () =>
      (rawPosts as ImportedPost[]).flatMap(post =>
        post.images.map((image, index) => ({
          id: `${post.id}-${index}`,
          postId: post.id,
          imageUrl: `${import.meta.env.BASE_URL}${image}`,
          caption: post.caption,
          hashtags: post.hashtags,
        }))
      ),
    []
  );

  return { posts, loading: false, error: false };
};

export default useInstagramPosts;
