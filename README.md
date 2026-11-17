# Marieswaran M — Robotics Portfolio

React + Vite portfolio with Framer Motion animations, Lenis scrolling, and GitHub Pages hosting.

Live site: https://m-mari444.github.io/Portfolio/

## Run locally

```sh
npm ci
npm run dev
```

Open the `/Portfolio/` URL printed by Vite. The base path in `vite.config.js` matches the GitHub Pages repository name.

## Where to update content

| Content | File |
| --- | --- |
| Current GOAT Robotics role, company logo, education and experience | `src/components/About.jsx` |
| Hero headline, current employer badge and résumé download | `src/components/Hero.jsx` |
| Project cards, categories, images, descriptions and links | `projectsData` in `src/components/Projects.jsx` |
| Skills | `src/components/Skills.jsx` |
| Achievements | `src/components/Achievements.jsx` |
| Email, phone and social links | `src/components/Contact.jsx` and `src/components/Navbar.jsx` |
| Shared colors, spacing and accessibility styles | `src/index.css` |

The current résumé is `src/assets/Marieswaran_M_Resume.pdf`. Replace that file with the same name to update the download, then rebuild and deploy. Vite generates a new asset URL when the PDF changes, so the deployed site serves the new file.

The Physical AI project uses `src/assets/AI_arm.jpeg` and links to https://lnkd.in/p/ghHiMqzE. The GOAT Robotics logo is `src/assets/goat-robotics-logo-512.png`.

Achievement issuer logos are stored in `src/assets/achievements/`, with their original download URLs in `SOURCES.md`. The timeline includes the SIH 2024 winner, SIH 2025 finalist, SAE E-BAJA 2025, and ROS/SLAM workshop entries.

Desktop text scales gently with viewport width in `src/index.css`, while mobile keeps a 16px base. The hero canvas in `src/components/Hero.jsx` displays the top 92.5% of each animation frame to crop out the bottom Veo branding strip.

## Check and publish

From a Git checkout with authenticated write access to `m-MARI444/Portfolio`:

```sh
npm run lint
npm run build
git add src public index.html README.md
git commit -m "Update portfolio content"
git push origin main
npm run deploy
```

`npm run deploy` rebuilds the site and publishes `dist/` to the `gh-pages` branch. GitHub Pages must serve that branch from `/ (root)`. A push to `main` alone does not publish the site. GitHub Pages can take a few minutes to serve a new deployment.
