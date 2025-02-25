import { fetchJSON, renderProjects } from "./global.js";

async function loadProjects() {
    const projectsContainer = document.querySelector(".projects");
    const projectDetails = document.getElementById("project-details");
    const backToProjects = document.getElementById("back-to-projects");

    if (!projectsContainer || !projectDetails || !backToProjects) return;

    try {
        const projects = await fetchJSON("lib/projects.json");

        // Display the project list
        renderProjects(projects, projectsContainer, "h2");

        // Add event listeners to project titles
        projectsContainer.addEventListener("click", (event) => {
            const projectTitle = event.target.closest(".project-title");
            if (!projectTitle) return;

            const project = projects.find(p => p.title === projectTitle.dataset.title);
            if (project) {
                showProjectDetails(project);
            }
        });

        // Handle back button
        backToProjects.addEventListener("click", () => {
            projectDetails.classList.add("hidden");
            projectsContainer.classList.remove("hidden");
        });

    } catch (error) {
        console.error("❌ Error loading projects:", error);
    }
}

function showProjectDetails(project) {
    document.getElementById("project-title").textContent = project.title;
    document.getElementById("project-image").src = project.image;
    document.getElementById("project-image").alt = project.title;
    document.getElementById("project-description").textContent = project.description;
    document.getElementById("project-link").href = project.link;

    // Hide the project list and show details
    document.querySelector(".projects").classList.add("hidden");
    document.getElementById("project-details").classList.remove("hidden");
}

// Load projects when the page loads
document.addEventListener("DOMContentLoaded", loadProjects);
