# 🛒 Shopping List (ihate_ToDoList)

A modern, responsive, and lightweight shopping & to-do list web application built with Vanilla JavaScript, Bootstrap 5.3, and custom CSS. Features a clean emerald green theme (`#329966`), dark mode support, live search, real-time counters, and local storage persistence.

[![License: MIT](https://img.shields.io/badge/License-MIT-329966.svg)](LICENSE)
[![Bootstrap 5.3](https://img.shields.io/badge/Bootstrap-5.3-7952b3.svg)](https://getbootstrap.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E.svg?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub_Pages-329966.svg?logo=github)](https://kucukagtas.github.io/ihate_ToDoList/)

---

## ✨ Features

- 🌓 **Dark / Light Mode:** Instant theme switching with seamless transitions, automatic system preference detection, and `localStorage` persistence.
- 🔍 **Live Search:** Instant, real-time item filtering as you type, combined seamlessly with status tabs.
- 📊 **Dynamic Status Badges:** Live count badges showing **Total**, **Remaining**, and **Completed** items.
- 🧹 **Smart Clearing:**
  - **Clear Completed:** Remove only purchased/done items with a single click.
  - **Clear All:** Reset your entire list with confirmation.
- ✏️ **Inline Editing:** Click any uncompleted item name to edit it in-place. Press <kbd>Enter</kbd> or click outside to save.
- 💾 **Offline-Ready & Persistent:** All list items and preferences automatically save to your browser's `localStorage`.
- 📱 **100% Responsive & Touch-Optimized:** Designed with mobile-first principles; easy-to-tap targets and smooth hover transitions on desktop.
- 🎨 **Tailored Palette:** Customized Bootstrap theme centered around a refined `#329966` emerald green color scheme.

---

## 🚀 Deployment to GitHub Pages

This project is pre-configured for automated deployment to GitHub Pages via GitHub Actions ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)).

### How to Enable:
1. Push your changes to your repository:
   ```bash
   git add .
   git commit -m "Deploy shopping list app"
   git push origin main
   ```
2. On GitHub, go to your repository: **Settings** > **Pages**.
3. Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. That's it! GitHub will automatically deploy your website upon every push to the `main` branch.
5. Your live app will be accessible at:
   ```text
   https://kucukagtas.github.io/ihate_ToDoList/
   ```

---

## 🛠️ Local Development

No package manager or build tool is needed. Simply clone the repository and open `index.html` in your web browser:

```bash
# Clone the repository
git clone https://github.com/kucukagtas/ihate_ToDoList.git

# Navigate into the project directory
cd ihate_ToDoList

# Open directly in browser (macOS)
open index.html

# Or run a local HTTP server with Python
python3 -m http.server 8000
```

---

## 📂 Project Structure

```text
ihate_ToDoList/
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions automated deployment to GitHub Pages
├── index.html              # Main HTML markup & semantic structure
├── style.css               # Responsive styling & #329966 color theme variables
├── script.js               # Application logic, state & event handling
├── LICENSE                 # MIT License
└── README.md               # Project documentation
```

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) - see the LICENSE file for details.
