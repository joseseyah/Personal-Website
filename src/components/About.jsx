import { FiMapPin, FiMail, FiGithub, FiCalendar } from 'react-icons/fi'
import './About.css'

const details = [
  { icon: <FiMapPin />, label: 'Location', value: 'Manchester, UK' },
  { icon: <FiCalendar />, label: 'Degree', value: 'BSc Computer Science' },
  { icon: <FiMail />, label: 'Email', value: 'joseph.hayes003@gmail.com' },
  { icon: <FiGithub />, label: 'GitHub', value: 'joseseyah' },
]

function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <span className="section-label">About Me</span>
        <h2 className="section-title">Passionate about building great software</h2>

        <div className="about__grid">
          <div className="about__text">
            <p>
              I'm a Computer Science graduate from the University of Manchester
              with a passion for building software that solves real problems. My
              journey in tech has taken me from crafting responsive web
              applications to exploring cloud architecture and machine learning.
            </p>
            <p>
              I'm a hardworking, motivated individual dedicated to continuous
              learning. Whether it's developing full-stack applications, automating
              workflows, or leading project teams, I bring enthusiasm and a
              problem-solving mindset to everything I build.
            </p>
            <p>
              When I'm not coding, you'll find me exploring photography with my
              Fujifilm camera, working on my halal travel magazine <strong>Rihlah</strong>,
              or contributing to open-source projects.
            </p>
          </div>

          <div className="about__details">
            {details.map((d) => (
              <div key={d.label} className="about__detail">
                <span className="about__detail-icon">{d.icon}</span>
                <div>
                  <span className="about__detail-label">{d.label}</span>
                  <span className="about__detail-value">{d.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="about__stats">
          {[
            { num: '9+', label: 'Projects Built' },
            { num: '3+', label: 'Years Coding' },
            { num: '20+', label: 'Qualifications' },
            { num: '3', label: 'Students Tutored' },
          ].map((s) => (
            <div key={s.label} className="about__stat">
              <span className="about__stat-num">{s.num}</span>
              <span className="about__stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
