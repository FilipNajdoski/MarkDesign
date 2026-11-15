// Copies post images and captions from the Instagram data export (instagram_content/)
// into the site. Only post media and captions are used; personal data is never copied.
// Usage: npm run import:instagram
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const exportDir = path.join(root, 'instagram_content');
const postsFile = path.join(exportDir, 'your_instagram_activity', 'media', 'posts_1.json');
const imagesOutDir = path.join(root, 'public', 'instagram');
const dataOutFile = path.join(root, 'src', 'data', 'instagramPosts.json');
const excludeFile = path.join(root, 'scripts', 'instagram-exclude.json');
const excluded = new Set(fs.existsSync(excludeFile) ? JSON.parse(fs.readFileSync(excludeFile, 'utf8')) : []);

const IMAGE_EXTENSIONS = new Set(['.webp', '.jpg', '.jpeg', '.png']);
const HASHTAG_REGEX = /#([\p{L}\p{N}_]+)/gu;

// Instagram exports UTF-8 text encoded as Latin-1 escapes; convert it back.
const fixEncoding = (text = '') => Buffer.from(text, 'latin1').toString('utf8');

const getHashtags = caption =>
  Array.from(new Set(Array.from(caption.matchAll(HASHTAG_REGEX), m => m[1].toLowerCase())));

const cleanCaption = caption => caption.replace(HASHTAG_REGEX, '').replace(/\s+/g, ' ').trim();

if (!fs.existsSync(postsFile)) {
  console.error(`Posts file not found: ${postsFile}`);
  process.exit(1);
}

const rawPosts = JSON.parse(fs.readFileSync(postsFile, 'utf8'));

fs.rmSync(imagesOutDir, { recursive: true, force: true });
fs.mkdirSync(imagesOutDir, { recursive: true });

const posts = rawPosts
  .map((post, index) => {
    const media = post.media ?? [];
    const caption = fixEncoding(post.title || media[0]?.title || '');
    const timestamp = post.creation_timestamp ?? media[0]?.creation_timestamp ?? 0;

    const images = media
      .map(m => m.uri)
      .filter(uri => uri && IMAGE_EXTENSIONS.has(path.extname(uri).toLowerCase()))
      .filter(uri => !excluded.has(path.basename(uri)))
      .map(uri => {
        const fileName = path.basename(uri);
        fs.copyFileSync(path.join(exportDir, uri), path.join(imagesOutDir, fileName));
        return `instagram/${fileName}`;
      });

    return {
      id: String(timestamp || index),
      timestamp,
      images,
      caption: cleanCaption(caption),
      hashtags: getHashtags(caption),
    };
  })
  .filter(post => post.images.length > 0)
  .sort((a, b) => b.timestamp - a.timestamp);

fs.writeFileSync(dataOutFile, JSON.stringify(posts, null, 2) + '\n', 'utf8');

const imageCount = posts.reduce((sum, p) => sum + p.images.length, 0);
console.log(`Imported ${posts.length} posts (${imageCount} images).`);
