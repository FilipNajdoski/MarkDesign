# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

Steps to deploy new changes:
- open github repo locally
- apply the changes
- commit them and sync with the main branch
- npm run build
- npm run deploy
- after deploying go to github repo/settings/pages and update the custom domain to: markdesign.mk

To start the project in VS Code, open the terminal and run:
npm install
npm run dev


>> Steps for re-adding new content from the instagram page to the website:
1. Request a data export from Instagram:
   - Instagram > Settings > Accounts Center > Your information and permissions > Download your information
   - Select the markdesignmk account, choose "Some of your information" > Content (posts)
   - Format: JSON, Media quality: High
   - Wait for the email from Instagram and download the .zip file
2. Extract the .zip into the project root and rename the extracted folder to `instagram_content`
   - The posts file must be at: `instagram_content/your_instagram_activity/media/posts_1.json`
3. Import the posts (copies only post images and captions, no personal data):
   - npm run import:instagram
   - Images are copied to `public/instagram/`, captions and hashtags to `src/data/instagramPosts.json`
   - Images listed in `scripts/instagram-exclude.json` are skipped
4. (Optional) Remove unwanted images:
   - Delete them from `public/instagram/`
   - npm run prune:instagram (removes them from the data and adds them to `scripts/instagram-exclude.json` so they won't be re-imported)
   - To bring an image back, remove its name from `scripts/instagram-exclude.json` and run npm run import:instagram again
5. Check the result locally:
   - npm run dev
6. Move or delete the `instagram_content` folder (it contains personal data and is not needed by the website)
   - It is listed in .gitignore, never remove that line
7. Commit, sync with the main branch and deploy (see "Steps to deploy new changes" above)