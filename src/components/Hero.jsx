import { FiGithub, FiLinkedin, FiArrowDown } from 'react-icons/fi'
import './Hero.css'

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__bg">
        <div className="hero__grid" />
        <div className="hero__glow" />
      </div>

      <div className="container hero__content">
        <div className="hero__left">
          <div className="hero__badge fade-in-up">
            <span className="hero__badge-dot" />
            Available for opportunities
          </div>

          <h1 className="hero__title fade-in-up" style={{ animationDelay: '0.1s' }}>
            Hi, I'm <span className="hero__name">Joseph Hayes</span>
          </h1>

          <p className="hero__subtitle fade-in-up" style={{ animationDelay: '0.2s' }}>
            Software Engineer shaping the future of technology through
            full-stack development, cloud architecture, and innovative solutions.
          </p>

          <div className="hero__actions fade-in-up" style={{ animationDelay: '0.3s' }}>
            <a href="#projects" className="btn btn-primary" onClick={(e) => {
              e.preventDefault()
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
            }}>
              View My Work
            </a>
            <a href="#contact" className="btn btn-outline" onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}>
              Contact Me
            </a>
          </div>

          <div className="hero__socials fade-in-up" style={{ animationDelay: '0.4s' }}>
            <a href="https://github.com/joseseyah" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FiGithub size={20} />
            </a>
            <a href="https://linkedin.com/in/joseph-hayes" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FiLinkedin size={20} />
            </a>
          </div>
        </div>

        <div className="hero__right fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="hero__card">
            <div className="hero__card-header">
              <span className="hero__card-dot hero__card-dot--red" />
              <span className="hero__card-dot hero__card-dot--yellow" />
              <span className="hero__card-dot hero__card-dot--green" />
              <span className="hero__card-file">portfolio.js</span>
            </div>
            <pre className="hero__card-code">
              <code>
{`const developer = {
  name: "Joseph Hayes",
  role: "Software Engineer",
  education: "BSc Computer Science",
  university: "University of Manchester",
  skills: [
    "Full-Stack Development",
    "Cloud Architecture",
    "Data Science & ML",
    "DevOps & Automation"
  ],
  passion: "Building solutions that
    make a difference"
};`}
              </code>
            </pre>
          </div>
        </div>
      </div>

      <a href="#about" className="hero__scroll" onClick={(e) => {
        e.preventDefault()
        document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
      }}>
        <FiArrowDown className="hero__scroll-icon" />
      </a>
    </section>
  )
}

export default Hero
