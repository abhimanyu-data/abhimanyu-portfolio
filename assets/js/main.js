fetch('data/projects.json')
  .then(response => response.json())
  .then(projects => {
    const container = document.getElementById('project-container');
    container.innerHTML = '';

    projects.forEach(project => {
      const card = `
        <div class="col-md-4 mb-4">
          <div class="card h-100">
            ${project.image}
            <div class="card-body">
              <h5 class="card-title">${project.title}</h5>
              <p class="card-text">${project.description}</p>
              ${project.link}View Details</a>
            </div>
          </div>
        </div>
      `;
      container.innerHTML += card;
    });
  })
  .catch(error => console.error('Error loading projects:', error));
