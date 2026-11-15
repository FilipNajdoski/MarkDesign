// Removes images that were deleted from public/instagram from src/data/instagramPosts.json.
// Posts left without images are removed. Deleted file names are saved to
// scripts/instagram-exclude.json so `npm run import:instagram` won't bring them back.
// Usage: npm run prune:instagram
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const publicDir = path.join(root, 'public');
const dataFile = path.join(root, 'src', 'data', 'instagramPosts.json');
const excludeFile = path.join(root, 'scripts', 'instagram-exclude.json');

const posts = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
const excluded = new Set(fs.existsSync(excludeFile) ? JSON.parse(fs.readFileSync(excludeFile, 'utf8')) : []);

let removedImages = 0;

const prunedPosts = posts
  .map(post => ({
    ...post,
    images: post.images.filter(image => {
      if (fs.existsSync(path.join(publicDir, image))) return true;
      excluded.add(path.basename(image));
      removedImages++;
      return false;
    }),
  }))
  .filter(post => post.images.length > 0);

fs.writeFileSync(dataFile, JSON.stringify(prunedPosts, null, 2) + '\n', 'utf8');
fs.writeFileSync(excludeFile, JSON.stringify([...excluded].sort(), null, 2) + '\n', 'utf8');

console.log(
  `Removed ${removedImages} missing images and ${posts.length - prunedPosts.length} empty posts. ` +
    `${prunedPosts.length} posts remain.`
);
