import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer>
      <a href="https://github.com/carlosdpastrana" target="_blank" rel="noopener noreferrer">
        <FaGithub size={30} color="#1a2b40" />
      </a>
      <a href="https://linkedin.com/in/YOUR-LINKEDIN-USERNAME" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '10px' }}>
        <FaLinkedin size={30} color="#1a2b40" />
      </a>
    </footer>
  );
}

export default Footer;