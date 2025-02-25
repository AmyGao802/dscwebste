
// 🚀 Confirm JavaScript is running
console.log('IT’S ALIVE!');

// ✅ Highlight the current page in navigation
document.addEventListener("DOMContentLoaded", () => {
    let navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        if (link.href.includes(window.location.pathname)) {
            link.classList.add("current");
        }
    });

    // 🎨 Dark Mode Toggle (Automatic, Light, Dark)
    let themeToggle = document.querySelector("#themeToggle");

    function applyTheme(mode) {
        document.body.classList.remove("light-mode", "dark-mode");

        if (mode === "dark") {
            document.body.classList.add("dark-mode");
            localStorage.setItem("theme", "dark");
            console.log("🌙 Dark mode enabled");
        } else if (mode === "light") {
            document.body.classList.add("light-mode");
            localStorage.setItem("theme", "light");
            console.log("☀️ Light mode enabled");
        } else {
            localStorage.setItem("theme", "auto");
            if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                document.body.classList.add("dark-mode");
                console.log("🌙 Auto mode: OS is in Dark Mode");
            } else {
                console.log("☀️ Auto mode: OS is in Light Mode");
            }
        }
    }

    // Apply saved theme or default to auto
    let savedTheme = localStorage.getItem("theme") || "auto";
    themeToggle.value = savedTheme;
    applyTheme(savedTheme);

    // Change theme when user selects a new option
    themeToggle.addEventListener("change", function () {
        applyTheme(this.value);
    });
});