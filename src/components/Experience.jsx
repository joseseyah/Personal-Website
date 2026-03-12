import './Experience.css'

const education = [
  {
    period: '2021 — 2024',
    title: 'BSc Computer Science',
    org: 'University of Manchester',
    description: 'Studied algorithms, data structures, software engineering, machine learning, and cloud computing.',
  },
  {
    period: '2019 — 2021',
    title: 'A-Levels: Maths, Chemistry, Physics',
    org: 'Xaverian College',
    description: 'Foundation in analytical thinking and problem-solving across STEM disciplines.',
  },
]

const experience = [
  {
    period: '2022 — Present',
    title: 'Technology Expert',
    org: 'Dyson',
    description: 'Demonstrating cutting-edge technology products, developing strong communication skills, and providing expert technical consultations to customers.',
  },
  {
    period: '2021 — 2022',
    title: 'Customer Assistant',
    org: 'Tesco',
    description: 'Developed time management and customer service skills while working in a fast-paced retail environment.',
  },
  {
    period: '2018',
    title: 'General Administration',
    org: 'Peel Holdings',
    description: 'Gained corporate experience in file management and administrative processes at a leading investment company.',
  },
]

function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <span className="section-label">Experience & Education</span>
        <h2 className="section-title">My journey so far</h2>

        <div className="experience__grid">
          <div className="experience__col">
            <h3 className="experience__col-title">
              <span className="experience__col-dot" />
              Education
            </h3>
            <div className="experience__timeline">
              {education.map((item) => (
                <div key={item.title} className="experience__item">
                  <span className="experience__period">{item.period}</span>
                  <h4 className="experience__title">{item.title}</h4>
                  <span className="experience__org">{item.org}</span>
                  <p className="experience__desc">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="experience__col">
            <h3 className="experience__col-title">
              <span className="experience__col-dot" />
              Work Experience
            </h3>
            <div className="experience__timeline">
              {experience.map((item) => (
                <div key={item.title} className="experience__item">
                  <span className="experience__period">{item.period}</span>
                  <h4 className="experience__title">{item.title}</h4>
                  <span className="experience__org">{item.org}</span>
                  <p className="experience__desc">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
