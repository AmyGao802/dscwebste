
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
// Fetch JSON data from a file
export async function fetchJSON(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Failed to fetch data: ${response.statusText}`);
        return await response.json();
    } catch (error) {
        console.error("❌ Error fetching JSON:", error);
    }
}

export function renderProjects(projects, containerElement, headingLevel = "h2") {
    containerElement.innerHTML = ""; // Clear previous content

    projects.forEach(project => {
        const article = document.createElement("article");
        article.innerHTML = `
            <${headingLevel} class="project-title" data-title="${project.title}">${project.title} (${project.year})</${headingLevel}>
            <img src="${project.image}" alt="${project.title}">
            <p>${project.description}</p>
        `;
        containerElement.appendChild(article);
    });
}
