import { FiCode, FiDatabase, FiCloud, FiSettings, FiLayout, FiUsers } from 'react-icons/fi'
import './Skills.css'

const skillCategories = [
  {
    icon: <FiCode />,
    title: 'Full-Stack Development',
    description: 'Building end-to-end web applications with modern frameworks and tools.',
    skills: ['React', 'JavaScript', 'HTML/CSS', 'Node.js', 'Python', 'Firebase'],
  },
  {
    icon: <FiDatabase />,
    title: 'Data Science & ML',
    description: 'Analyzing data and building intelligent systems with machine learning.',
    skills: ['Python', 'Pandas', 'TensorFlow', 'SQL', 'Data Visualization', 'Jupyter'],
  },
  {
    icon: <FiCloud />,
    title: 'Cloud Architecture',
    description: 'Designing and deploying scalable cloud-based solutions.',
    skills: ['Firebase', 'AWS', 'REST APIs', 'Serverless', 'Docker', 'CI/CD'],
  },
  {
    icon: <FiSettings />,
    title: 'DevOps & Automation',
    description: 'Streamlining development workflows and deployment pipelines.',
    skills: ['Git', 'GitHub Actions', 'Shell Scripting', 'Testing', 'Monitoring', 'Linux'],
  },
  {
    icon: <FiLayout />,
    title: 'UI/UX Design',
    description: 'Crafting intuitive and visually appealing user interfaces.',
    skills: ['Figma', 'Responsive Design', 'CSS Animations', 'Accessibility', 'Prototyping', 'Design Systems'],
  },
  {
    icon: <FiUsers />,
    title: 'Project Leadership',
    description: 'Leading teams and managing projects from conception to delivery.',
    skills: ['Agile', 'Scrum', 'Team Leadership', 'Documentation', 'Communication', 'Problem Solving'],
  },
]

function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <span className="section-label">Skills & Expertise</span>
        <h2 className="section-title">What I bring to the table</h2>
        <p className="section-subtitle">
          A diverse skill set spanning the full software development lifecycle.
        </p>

        <div className="skills__grid">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="skills__card">
              <div className="skills__card-icon">{cat.icon}</div>
              <h3 className="skills__card-title">{cat.title}</h3>
              <p className="skills__card-desc">{cat.description}</p>
              <div className="skills__tags">
                {cat.skills.map((skill) => (
                  <span key={skill} className="skills__tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
