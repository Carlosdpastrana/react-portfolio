function Portfolio() {
    const projects = [
      {
        title: 'Taskflow',
        image: '/project1.jpg',
        deployedLink: 'https://taskflow-est2025.up.railway.app/login',
        githubLink: 'https://github.com/anton10mata/TaskFlow.git'
      },
      {
        title: 'Holiday Countdown',
        image: '/project2.jpg',
        deployedLink: 'https://example.com/project-two',
        githubLink: 'https://github.com/Carlosdpastrana/HolidayCountdown.git'
      },

      {
        title: 'Employee Tracker',
        image: '/project2.jpg',
        deployedLink: 'https://example.com/project-two',
        githubLink: 'https://github.com/Carlosdpastrana/HolidayCountdown.git'
      },
    ];
  
    return (
      <section className="portfolio-section">
        <h2>Portfolio</h2>
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-info">
                <h3>{project.title}</h3>
                <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">View Project</a>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Portfolio;