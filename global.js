// 💡 Console check
console.log('IT’S ALIVE!');

// Helper function for selecting elements
function $$(selector, context = document) {
  return Array.from(context.querySelectorAll(selector));
}

// 🟡 Highlight Current Page
let navLinks = $$("nav a");
navLinks.forEach(link => {
  if (link.pathname === window.location.pathname || 
      (window.location.pathname === '/' && link.pathname === '/index.html')) {
    link.classList.add('current');
  }
});

// 🟠 Add Dark Mode Switch
document.body.insertAdjacentHTML('afterbegin', `
  <label class="color-scheme">
    Theme:
    <select id="theme-select">
      <option value="auto">Automatic</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  </label>
`);

// 🟢 Function to set color scheme
function setColorScheme(mode) {
  document.documentElement.setAttribute('data-theme', mode);
  localStorage.setItem('colorScheme', mode);
}

// Get theme selector and add event listener
const select = document.getElementById('theme-select');
select.value = localStorage.getItem('colorScheme') || 'auto';
select.addEventListener('input', (e) => {
  setColorScheme(e.target.value);
});

// 🟣 Apply saved theme on page load
window.addEventListener('load', () => {
  const saved = localStorage.getItem('colorScheme') || 'auto';
  setColorScheme(saved);
  select.value = saved;
});
