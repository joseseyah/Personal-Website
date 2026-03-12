import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'
import './Navbar.css'

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Al-Kahf', href: '/alkahf', highlight: true, isRoute: true },
  { name: 'Contact', href: '#contact' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navigate = useNavigate()

  const handleClick = (e, link) => {
    e.preventDefault()
    setMobileOpen(false)
    if (link.isRoute) {
      navigate(link.href)
      return
    }
    const el = document.querySelector(link.href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <Link to="/" className="navbar__logo">
          <span className="navbar__logo-accent">J</span>H
        </Link>

        <ul className={`navbar__links ${mobileOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={(e) => handleClick(e, link)}
                className={link.highlight ? 'navbar__link--highlight' : ''}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="navbar__cta btn btn-primary"
          onClick={(e) => handleClick(e, { href: '#contact' })}
        >
          Get in Touch
        </a>

        <button
          className="navbar__toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
