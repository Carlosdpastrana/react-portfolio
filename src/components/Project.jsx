function Project({ title, image, deployedLink, repoLink }) {
    return (
      <div>
        <h3>Taskflow</h3>
        <img src="/project1.jpg" alt="Project 1" />
        <div>
          <a href={deployedLink} target="_blank" rel="noopener noreferrer">Live App</a>
          <a href="https://github.com/anton10mata/TaskFlow.git" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
        </div>
      </div>
    );
  }
  
  export default Project;