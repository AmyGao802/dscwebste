
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

    // 🎨 Dark Mode Toggle
    let darkModeToggle = document.querySelector("#戳我变色");

    if (darkModeToggle) {
        darkModeToggle.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");

            // Store user preference in localStorage
            if (document.body.classList.contains("dark-mode")) {
                localStorage.setItem("theme", "dark");
                console.log("🌙 Dark mode enabled");
            } else {
                localStorage.setItem("theme", "light");
                console.log("☀️ Light mode enabled");
            }
        });
    }

    // ✅ Check for saved theme preference
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }
});