function Project({ title, image, deployedLink, repoLink }) {
    return (
      <div>
        <h3>{title}</h3>
        <img src="/project1.png" alt="Project 1" />
        <div>
          <a href={deployedLink} target="_blank" rel="noopener noreferrer">Live App</a>
          <a href={repoLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
        </div>
      </div>
    );
  }
  
  export default Project;