async function loadProjects() {
    const response = await fetch('../lib/projects.json');
    const projects = await response.json();
    
    const container = document.querySelector('.projects');
    container.innerHTML = ''; // Clear existing content
  
    projects.forEach(project => {
      const article = document.createElement('article');
      article.innerHTML = `
        <h2>${project.title}</h2>
        <img src="${project.image}" alt="${project.title}">
        <p>${project.description}</p>
      `;
      container.appendChild(article);
    });
  }
  
  // Run the function when the page loads
  loadProjects();
  