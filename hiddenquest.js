async function loadHiddenQuestImage() {
    try {
        const response = await fetch("lib/projects.json");
        const projects = await response.json();

        // Find the HiddenQuest project from the JSON
        const hiddenQuestProject = projects.find(p => p.title === "HiddenQuest App");

        if (hiddenQuestProject) {
            const imageContainer = document.getElementById("hiddenquest-image-container");

            // Create an <img> element and set attributes
            const img = document.createElement("img");
            img.src = hiddenQuestProject.image;
            img.alt = "HiddenQuest App";
            img.classList.add("hiddenquest-image"); // Apply CSS for styling

            // Add image to the page
            imageContainer.appendChild(img);
        } else {
            console.error("❌ HiddenQuest project not found in projects.json");
        }
    } catch (error) {
        console.error("❌ Error fetching projects.json:", error);
    }
}

// Load the image when the page is loaded
document.addEventListener("DOMContentLoaded", loadHiddenQuestImage);
