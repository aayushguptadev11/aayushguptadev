<div align="center">
  <img src="assets/ayush.webp" width="96" alt="Ayush Gupta logo">

  # Ayush Gupta — Portfolio Website

  A personal portfolio website built with **HTML, CSS & vanilla JavaScript** — featuring a tab-based single-page layout, animated typing effect, and a fully animated CV download button.

  [![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
  [![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
  [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  [![Responsive](https://img.shields.io/badge/Responsive-Yes-7cf03d?style=flat-square)]()
  [![Status](https://img.shields.io/badge/Status-Active-1689ff?style=flat-square)]()
  [![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](LICENSE)

  [Introduction](#introduction) • [Live Demo](#live-demo) • [About](#about) • [Features](#features) • [Tech Stack](#tech-stack) • [Getting Started](#getting-started) • [Future Plans](#future-plans) • [Author](#author) • [License](#license) • [Support](#support)

  ⭐ If you like this project, star it on GitHub!
</div>

## Introduction

A modern, responsive personal portfolio website that showcases **Ayush Gupta's** skills, projects, and experience as a Web Developer, UI/UX Designer, Content Creator, and AI Engineer. The site uses a single-page tab-based navigation with smooth transitions, an animated hero section with a typing effect, and a custom-styled CV download experience.

## Live Demo

🌐 **Check out the live site:** [Ayush Gupta](https://aayushguptadev11.github.io/aayushguptadev/)

## About

The portfolio presents Ayush Gupta's professional identity through:

- **Home** — Hero section with profile image, animated typing effect, intro text, social links, and a Download CV button.
- **Services / About / Projects / Contact** — Currently marked as "Coming Soon" and actively being built out.

The site is a single-page application that switches between sections using pure JavaScript tab logic — no frameworks required.

## Features

- 🗂️ **Tab-based navigation** — Switch between Home, Services, About, Projects & Contact sections with a fade-in transition.
- ⌨️ **Typing animation** — Cycles through roles like *Web Developer*, *UI UX Designer*, *Content Creator*, and *AI Engineer*.
- 🌀 **Animated profile ring** — Spinning conic-gradient glow around the profile photo.
- 📥 **Animated CV download** — Progress bar + percentage counter, success state ("Done"), and auto-reset animation after download.
- 📱 **Fully responsive** — Hamburger menu on mobile, inline navigation on desktop, fluid layouts across breakpoints.
- 🔗 **Social links** — GitHub, LinkedIn, YouTube, and personal website.
- 🚧 **Coming soon sections** — Reusable "under construction" page for work in progress.

## Tech Stack

| Technology | Purpose |
| --- | --- |
| [HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML) | Page structure & semantic markup |
| [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS) | Styling, custom properties, animations, responsive design |
| [JavaScript (ES6+)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) | Tab switching, typing effect, download logic |
| [Phosphor Icons](https://phosphoricons.com/) | Social media icons |
| [Font Awesome 6](https://fontawesome.com/) | UI icons |

## Project Structure

```
.
├── assets/
│   ├── images/                  # App icons (WebP format)
│   ├── pdf/                     # Resume PDF
│   ├── ayush.webp               # Profile picture / logo (WebP)
│   ├── ayush.jpeg               # Profile picture / logo (JPEG fallback)
│   ├── Error.svg                # "Coming Soon" illustration
│   └── favicon.ico              # Site favicon
├── css/
│   ├── style.css                # Global styles, CSS variables, header & navigation
│   ├── home.css                 # Home/hero section, animated profile ring, typing cursor
│   ├── about.css                # About section styles
│   ├── error.css                # "Coming Soon" section styles
│   └── download.css             # Animated CV download button (all states)
├── js/
│   ├── script.js                # Menu toggle, typing effect, tab switching
│   └── download.js              # CV download progress animation
├── 404.html                     # Custom 404 error page
├── robots.txt                   # SEO crawling rules
├── sitemap.xml                  # Search engine indexing
├── .nojekyll                    # GitHub Pages compatibility
├── .gitignore                   # Git ignore rules
├── index.html                   # Main single-page portfolio
├── LICENSE                      # MIT License
└── README.md                    # Project documentation
```

## Getting Started

No build tools or package managers required — it's a static site. You can run it in two ways:

**Option 1 — Just open the file**

```bash
# Clone the repository, then open the main file in your browser
open index.html   # macOS
start index.html  # Windows
```

**Option 2 — Run a local server (recommended for full asset loading)**

```bash
# Using Python
python -m http.server 8080
# Then open http://localhost:8080

# Or using VS Code: install the "Live Server" extension and click "Go Live"
```

## Future Plans

- Build out the **Services, About, Projects & Contact** sections (currently "Coming Soon").
- Add a **projects showcase** with live demos and source links.
- Add a working **contact form**.
- Add a **dark/light theme toggle**.
- Improve **accessibility** (ARIA labels, keyboard navigation, focus states).
- Remove the empty `pages/Test.html` placeholder file.

## Author

**Ayush Gupta** — Web Developer · UI/UX Designer · Content Creator · AI Engineer

- 🌐 Website: [aayush.rf.gd](https://aayush.rf.gd/)
- 🐙 GitHub: [@aayushguptadev11](https://github.com/aayushguptadev11)
- 💼 LinkedIn: [@aayushguptadev](https://www.linkedin.com/in/aayushguptadev/)
- ▶️ YouTube: [@aayushguptadev](https://youtube.com/@aayushguptadev)

## License

This project is licensed under the [MIT License](LICENSE) — you are free to use, modify, and distribute this code, provided the original copyright notice and permission notice are retained.

See the [LICENSE](LICENSE) file for the full license text.

## Support

If you find this project helpful, please consider:

- ⭐ **Starring** the repository on GitHub
- 🐛 **Reporting issues** or suggesting improvements
- 📣 **Sharing** it with others

Found a bug or have an idea? Open an issue on the [GitHub repository](https://github.com/aayushguptadev11).
