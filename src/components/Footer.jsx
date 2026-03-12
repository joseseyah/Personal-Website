import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiArrowUp } from 'react-icons/fi'
import './Footer.css'

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__left">
          <span className="footer__logo">
            <span className="footer__logo-accent">J</span>H
          </span>
          <p className="footer__text">
            Designed & built by Joseph Hayes
          </p>
        </div>

        <div className="footer__socials">
          <a href="https://github.com/joseseyah" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FiGithub />
          </a>
          <a href="https://linkedin.com/in/joseph-hayes" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
          <a href="https://twitter.com/Joseralliv" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FiTwitter />
          </a>
          <a href="mailto:joseph.hayes003@gmail.com" aria-label="Email">
            <FiMail />
          </a>
        </div>

        <button className="footer__top" onClick={scrollToTop} aria-label="Back to top">
          <FiArrowUp />
        </button>
      </div>

      <div className="footer__bottom container">
        <p>&copy; {new Date().getFullYear()} Joseph Hayes. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
