import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <a href="https://github.com/carlosdpastrana" target="_blank" rel="noopener noreferrer" className="footer-icon">
        <FaGithub size={30} />
      </a>
      <a href="https://linkedin.com/in/carlos-pastrana" target="_blank" rel="noopener noreferrer" className="footer-icon">
        <FaLinkedin size={30} />
      </a>
    </footer>
  );
}

export default Footer;