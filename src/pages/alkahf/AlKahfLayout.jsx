import { Link, useLocation } from 'react-router-dom'
import './alkahf.css'

function AlKahfLayout({ children }) {
  const location = useLocation()
  const isActive = (path) => location.pathname === path

  return (
    <div className="ak-page">
      <nav className="ak-nav">
        <Link to="/alkahf" className="ak-nav__brand">
          <span className="ak-nav__icon">⛰️</span>
          Al-Kahf
        </Link>

        <div className="ak-nav__links">
          <Link
            to="/alkahf"
            className={`ak-nav__link ${isActive('/alkahf') ? 'ak-nav__link--active' : ''}`}
          >
            Home
          </Link>
          <Link
            to="/alkahf/privacy"
            className={`ak-nav__link ${isActive('/alkahf/privacy') ? 'ak-nav__link--active' : ''}`}
          >
            Privacy
          </Link>
          <Link
            to="/alkahf/terms"
            className={`ak-nav__link ${isActive('/alkahf/terms') ? 'ak-nav__link--active' : ''}`}
          >
            Terms
          </Link>
          <Link to="/" className="ak-nav__back">
            ← Portfolio
          </Link>
        </div>
      </nav>

      {children}

      <footer className="ak-footer">
        <div className="ak-container ak-footer__inner">
          <span className="ak-footer__brand">⛰️ Al-Kahf</span>
          <div className="ak-footer__links">
            <Link to="/alkahf/privacy">Privacy Policy</Link>
            <Link to="/alkahf/terms">Terms of Service</Link>
            <a href="mailto:joseph.hayes003@gmail.com">Contact</a>
          </div>
          <span className="ak-footer__copy">&copy; {new Date().getFullYear()} Al-Kahf App</span>
        </div>
      </footer>
    </div>
  )
}

export default AlKahfLayout
