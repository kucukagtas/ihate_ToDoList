// DOM Elements
const shoppingList = document.querySelector(".shopping-list");
const shoppingForm = document.querySelector(".shopping-form");
const filterButtons = document.querySelectorAll(".filter-buttons button");
const clearAllBtn = document.querySelector(".clear-all");
const clearCompletedBtn = document.querySelector(".clear-completed");
const searchInput = document.getElementById("search_input");
const themeToggleBtn = document.getElementById("theme_toggle");

const emptyAlert = document.getElementById("empty_alert");
const searchAlert = document.getElementById("search_alert");
const controlsContainer = document.getElementById("controls_container");
const actionButtons = document.querySelector(".action-buttons");

const counterTotal = document.getElementById("counter_total");
const counterPending = document.getElementById("counter_pending");
const counterCompleted = document.getElementById("counter_completed");

// State
let currentFilter = "all";
let searchQuery = "";

document.addEventListener("DOMContentLoaded", initApp);

function initApp() {
  initTheme();
  loadItems();

  // Event Listeners
  shoppingForm.addEventListener("submit", handleFormSubmit);

  for (let button of filterButtons) {
    button.addEventListener("click", handleFilterSelection);
  }

  if (searchInput) {
    searchInput.addEventListener("input", handleSearchInput);
  }

  if (clearAllBtn) {
    clearAllBtn.addEventListener("click", clearAll);
  }

  if (clearCompletedBtn) {
    clearCompletedBtn.addEventListener("click", clearCompleted);
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", toggleTheme);
  }
}

/* ==========================================================
   Theme (Dark / Light Mode)
   ========================================================== */
function initTheme() {
  const savedTheme = localStorage.getItem("shoppingTheme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialTheme = savedTheme || (prefersDark ? "dark" : "light");

  setTheme(initialTheme);
}

function setTheme(theme) {
  document.documentElement.setAttribute("data-bs-theme", theme);
  localStorage.setItem("shoppingTheme", theme);

  if (themeToggleBtn) {
    themeToggleBtn.innerHTML =
      theme === "dark"
        ? '<i class="fa-solid fa-sun text-warning"></i>'
        : '<i class="fa-solid fa-moon"></i>';
    themeToggleBtn.setAttribute(
      "aria-label",
      theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
    );
    themeToggleBtn.setAttribute(
      "title",
      theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
    );
  }
}

function toggleTheme() {
  const currentTheme =
    document.documentElement.getAttribute("data-bs-theme") || "light";
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  setTheme(newTheme);
}

/* ==========================================================
   LocalStorage and Data Loading
   ========================================================== */
function saveToLS() {
  const listItems = shoppingList.querySelectorAll("li");
  const items = [];

  for (let li of listItems) {
    const id = li.getAttribute("item-id");
    const name = li.querySelector(".item-name").textContent.trim();
    const completed = li.hasAttribute("item-completed");

    items.push({ id, name, completed });
  }

  localStorage.setItem("shoppingItems", JSON.stringify(items));
}

function loadItems() {
  const items = JSON.parse(localStorage.getItem("shoppingItems")) || [];

  shoppingList.innerHTML = "";

  for (let item of items) {
    const li = creatListItem(item);
    shoppingList.appendChild(li);
  }

  updateUI();
}

/* ==========================================================
   Item Management (Add / Remove / Clear)
   ========================================================== */
function generateId() {
  return Date.now().toString();
}

function handleFormSubmit(e) {
  e.preventDefault();

  const input = document.getElementById("item_name");
  const value = input.value.trim();

  if (value.length === 0) {
    input.classList.add("is-invalid");
    input.focus();
    setTimeout(() => input.classList.remove("is-invalid"), 1500);
    return;
  }

  addItem(value);
  input.value = "";
}

function addItem(name) {
  const newItem = creatListItem({
    id: generateId(),
    name: name,
    completed: false,
  });

  shoppingList.appendChild(newItem);

  saveToLS();
  updateUI();
}

function creatListItem(item) {
  // Checkbox
  const input = document.createElement("input");
  input.type = "checkbox";
  input.classList.add("form-check-input");
  input.checked = Boolean(item.completed);
  input.addEventListener("change", toggleCompleted);

  // Item Name
  const div = document.createElement("div");
  div.textContent = item.name;
  div.classList.add("item-name");
  div.setAttribute("title", "Click to edit");
  div.addEventListener("click", openEditMode);
  div.addEventListener("blur", closeEditMode);
  div.addEventListener("keydown", cancelEnter);

  // Delete Icon
  const deleteIcon = document.createElement("i");
  deleteIcon.className = "fa-solid fa-xmark text-danger delete-icon";
  deleteIcon.setAttribute("title", "Delete");
  deleteIcon.addEventListener("click", removeItem);

  // List Item (li)
  const li = document.createElement("li");
  li.className = "border rounded p-3 mb-2";
  li.setAttribute("item-id", item.id);
  li.toggleAttribute("item-completed", Boolean(item.completed));
  li.appendChild(input);
  li.appendChild(div);
  li.appendChild(deleteIcon);

  return li;
}

function toggleCompleted(e) {
  const li = e.target.closest("li");
  li.toggleAttribute("item-completed", e.target.checked);

  saveToLS();
  updateUI();
}

function removeItem(e) {
  const li = e.target.closest("li");
  shoppingList.removeChild(li);

  saveToLS();
  updateUI();
}

function clearAll() {
  if (shoppingList.querySelectorAll("li").length === 0) return;

  if (confirm("Are you sure you want to clear all items?")) {
    shoppingList.innerHTML = "";
    localStorage.removeItem("shoppingItems");

    if (searchInput) {
      searchInput.value = "";
    }
    searchQuery = "";

    updateUI();
  }
}

function clearCompleted() {
  const completedItems = shoppingList.querySelectorAll("li[item-completed]");

  if (completedItems.length === 0) return;

  for (let li of completedItems) {
    shoppingList.removeChild(li);
  }

  saveToLS();
  updateUI();
}

/* ==========================================================
   Inline Editing
   ========================================================== */
function openEditMode(e) {
  const li = e.target.closest("li");

  if (!li.hasAttribute("item-completed")) {
    e.target.contentEditable = "true";
    e.target.focus();
  }
}

function closeEditMode(e) {
  e.target.contentEditable = "false";
  const text = e.target.textContent.trim();

  // If left empty, revert to previous or keep intact
  if (text.length === 0) {
    loadItems();
    return;
  }

  e.target.textContent = text;
  saveToLS();
  updateUI();
}

function cancelEnter(e) {
  if (e.key === "Enter") {
    e.preventDefault();
    e.target.blur();
  }
}

/* ==========================================================
   Filtering and Live Search
   ========================================================== */
function handleFilterSelection(e) {
  const filterBtn = e.currentTarget;
  currentFilter = filterBtn.getAttribute("item-filter");

  for (let button of filterButtons) {
    button.classList.add("btn-secondary");
    button.classList.remove("btn-primary");
  }

  filterBtn.classList.add("btn-primary");
  filterBtn.classList.remove("btn-secondary");

  applyFilterAndSearch();
}

function handleSearchInput(e) {
  searchQuery = e.target.value.trim().toLowerCase();
  applyFilterAndSearch();
}

function applyFilterAndSearch() {
  const liItems = shoppingList.querySelectorAll("li");
  let visibleCount = 0;

  for (let li of liItems) {
    const name = (li.querySelector(".item-name").textContent || "").toLowerCase();
    const completed = li.hasAttribute("item-completed");

    // Filter match
    let matchesFilter = true;
    if (currentFilter === "completed") {
      matchesFilter = completed;
    } else if (currentFilter === "incompleted") {
      matchesFilter = !completed;
    }

    // Search query match
    const matchesSearch = searchQuery === "" || name.includes(searchQuery);

    const isVisible = matchesFilter && matchesSearch;

    if (isVisible) {
      li.classList.remove("d-none");
      li.classList.add("d-flex");
      visibleCount++;
    } else {
      li.classList.add("d-none");
      li.classList.remove("d-flex");
    }
  }

  // Show alert when search yields 0 matches
  const totalItems = liItems.length;
  if (searchAlert) {
    const showSearchAlert = totalItems > 0 && searchQuery !== "" && visibleCount === 0;
    searchAlert.classList.toggle("d-none", !showSearchAlert);
  }
}

/* ==========================================================
   Counters and UI Update
   ========================================================== */
function updateCounters() {
  const allItems = shoppingList.querySelectorAll("li");
  const completedItems = shoppingList.querySelectorAll("li[item-completed]");

  const total = allItems.length;
  const completed = completedItems.length;
  const pending = total - completed;

  if (counterTotal) counterTotal.textContent = `Total: ${total}`;
  if (counterPending) counterPending.textContent = `Remaining: ${pending}`;
  if (counterCompleted) counterCompleted.textContent = `Completed: ${completed}`;

  // Disable "Clear Completed" button if there are no completed items
  if (clearCompletedBtn) {
    clearCompletedBtn.disabled = completed === 0;
    clearCompletedBtn.classList.toggle("opacity-50", completed === 0);
  }
}

function displayAlert() {
  const isEmpty = shoppingList.querySelectorAll("li").length === 0;

  if (emptyAlert) emptyAlert.classList.toggle("d-none", !isEmpty);
  if (controlsContainer) controlsContainer.classList.toggle("d-none", isEmpty);
  if (actionButtons) actionButtons.classList.toggle("d-none", isEmpty);

  if (isEmpty && searchAlert) {
    searchAlert.classList.add("d-none");
  }
}

function updateUI() {
  updateCounters();
  applyFilterAndSearch();
  displayAlert();
}
