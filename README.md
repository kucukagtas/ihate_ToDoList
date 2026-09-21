# 🛒 Shopping List (ihate_ToDoList) — Interactive Task & Shopping Management App

<div align="center">

[![Live Demo](https://img.shields.io/badge/Live_Demo-kucukagtas.github.io%2Fihate_ToDoList-329966?style=for-the-badge&logo=githubpages&logoColor=white)](https://kucukagtas.github.io/ihate_ToDoList/)
[![Language: English](https://img.shields.io/badge/Language-English-blue?style=for-the-badge&logo=googletranslate&logoColor=white)](https://kucukagtas.github.io/ihate_ToDoList/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Bootstrap 5](https://img.shields.io/badge/Bootstrap_5.3.3-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Font Awesome](https://img.shields.io/badge/Font_Awesome_6.5.2-528DD7?style=for-the-badge&logo=font-awesome&logoColor=white)](https://fontawesome.com/)

<p align="center">
  <strong>A modern, responsive, and lightweight shopping & to-do list web application with dark mode, real-time live search, dynamic counters, and local storage persistence.</strong>
</p>

[🌐 Visit Live Website](https://kucukagtas.github.io/ihate_ToDoList/) • [✨ Key Features](#-key-features) • [🛠️ Tech Stack](#️-tech-stack) • [📁 Project Structure](#-project-structure) • [🚀 Getting Started](#-getting-started) • [🌐 Deployment](#-deployment) • [📄 License](#-license)

---

</div>

## 📖 Overview

**Shopping List (ihate_ToDoList)** is a sleek, single-page shopping and to-do list web application designed to streamline daily grocery runs, chore planning, and personal task management. Built with simplicity, speed, and usability in mind, the application features an emerald green visual identity (`#329966`), comprehensive keyboard shortcuts, fluid inline editing, and seamless offline data persistence.

The interface is engineered with a mobile-first philosophy using semantic **HTML5**, **Bootstrap 5.3.3**, custom **CSS3**, and **vanilla JavaScript (ES6+)**. It delivers a frictionless experience across smartphones, tablets, laptops, and ultra-wide desktop displays with zero build-tool dependencies.

🔗 **Live Deployment:** [https://kucukagtas.github.io/ihate_ToDoList/](https://kucukagtas.github.io/ihate_ToDoList/)

---

## ✨ Key Features

- **🌓 Seamless Dark & Light Mode:**
  - Instant toggle between light and dark themes with smooth rotate & scale micro-animations.
  - Native Bootstrap 5.3 `data-bs-theme` integration with automatic OS preference detection (`prefers-color-scheme`).
  - Persistent theme selection saved in browser `localStorage`.
- **🔍 Real-Time Live Search:**
  - Instant item filtering as the user types without requiring page reloads or form submissions.
  - Synchronized filtering that works in tandem with status tabs (`All`, `Incompleted`, `Completed`).
  - Contextual feedback alert (`"No matching items found."`) displayed when search queries yield zero results.
- **📊 Dynamic Metric Badges:**
  - Real-time count badges calculating **Total**, **Remaining**, and **Completed** items on every change.
  - Color-coded indicators providing immediate visual feedback on task progression.
- **🧹 Smart Item Clearing:**
  - **Clear Completed:** One-click removal of only purchased/checked items (automatically disabled when no completed items exist).
  - **Clear All:** Complete list wipe protected by an explicit confirmation dialog to avoid accidental data loss.
- **✏️ Fluid Inline Item Editing:**
  - Click any uncompleted item name to edit text directly in-place (`contentEditable`).
  - Press <kbd>Enter</kbd> or click outside (<kbd>blur</kbd>) to instantly save modifications to `localStorage`.
- **📱 Mobile-First Responsive Design:**
  - Centered modern app container (`max-width: 580px`) optimized for single-handed mobile usage.
  - Desktop hover transitions for deletion icons (`scale` and `opacity`), while touch devices feature always-visible, comfortably sized tap targets (`>= 40px`).
  - Flexible button wrapping preventing horizontal scrolling on compact screen resolutions.
- **🎨 Curated Visual Identity (`#329966`):**
  - Tailored emerald green color palette (`#329966`) replacing default Bootstrap blue across buttons, focus rings, checkboxes, and badge accents.
  - Harmonious contrast and WCAG-compliant readability in both light and dark display modes.
- **⚡ Offline Storage & Zero-Build Performance:**
  - Fully functional offline using the browser's native `localStorage` API.
  - Pure static frontend architecture with zero compilation dependencies and instant load times.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **HTML5** | Semantic structure, accessibility attributes, and responsive viewport configuration |
| **CSS3** | Custom brand tokens (`#329966`), smooth transitions, responsive breakpoints, and dark mode variables |
| **Bootstrap 5.3.3** | Responsive grid system, form controls, modern button components, and native `data-bs-theme` support |
| **JavaScript (ES6+)** | State management, DOM manipulation, live search filtering, inline editing, and LocalStorage persistence |
| **Font Awesome 6.5.2** | Vector icons for brand identity, theme toggle, item actions, search, and status alerts |
| **GitHub Actions** | Automated CI/CD workflow deploying static assets to GitHub Pages |
| **GitHub Pages** | Global high-availability static web hosting |

---

## 📁 Project Structure

```text
ihate_ToDoList/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow for automatic GitHub Pages deployment
├── index.html                  # Semantic single-page HTML layout & component templates
├── style.css                   # Custom theme tokens, responsive queries & dark mode styles
├── script.js                   # Application state, event handlers & LocalStorage logic
├── LICENSE                     # MIT License documentation
└── README.md                   # Comprehensive project documentation
```

---

## 🚀 Getting Started

To explore or run this project locally on your machine:

### 1. Clone the Repository

```bash
git clone https://github.com/kucukagtas/ihate_ToDoList.git
```

### 2. Navigate to the Project Directory

```bash
cd ihate_ToDoList
```

### 3. Run Locally

Since this is a pure static web application, you can run it directly without any build tools or runtime environments:

* **Directly in Browser:** Double-click `index.html` or open it with any modern web browser (Chrome, Safari, Firefox, Edge).
* **VS Code Live Server:** Right-click `index.html` and select **"Open with Live Server"**.
* **Via Node.js `serve`:**
  ```bash
  npx serve .
  ```
* **Via Python HTTP Server:**
  ```bash
  python3 -m http.server 8000
  ```

---

## 🌐 Deployment

The live version of **Shopping List (ihate_ToDoList)** is deployed on **GitHub Pages**:

👉 **[https://kucukagtas.github.io/ihate_ToDoList/](https://kucukagtas.github.io/ihate_ToDoList/)**

---

## 📄 License

This project is open-source and licensed under the [MIT License](LICENSE) — see the [LICENSE](LICENSE) file for details.

Copyright © 2026 [Muhammed Küçükağtaş](https://github.com/kucukagtas). All rights reserved.
