import Project from '../components/Project';

function Portfolio() {
  const projects = [
    {
      title: 'Project 1',
      image: '/path/to/image1.png',
      deployedLink: 'https://deployedlink1.com',
      repoLink: 'https://github.com/Carlosdpastrana/react-portfolio.git',
    },
    // Add 5 more projects like this
    {
      title: 'Vehicle Builder',
      link: 'https://github.com/Carlosdpastrana/vehicle-builder.git'
    },
    {
        title: 'Employee Tracker',
        link: 'https://github.com/Carlosdpastrana/employee-tracker.git'
    },        
    {
        title: 'ReadMe Generator',
        link: 'https://github.com/Carlosdpastrana/readme-generator.git'
    },
    {
        title: 'Holiday Countdown',
        link: 'https://github.com/Carlosdpastrana/HolidayCountdown.git'
    }
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </section>
  );
}

export default Portfolio;