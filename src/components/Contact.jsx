import { useState } from 'react'
import { FiSend, FiMail, FiMapPin, FiGithub } from 'react-icons/fi'
import './Contact.css'

const contactInfo = [
  { icon: <FiMail />, label: 'Email', value: 'joseph.hayes003@gmail.com', href: 'mailto:joseph.hayes003@gmail.com' },
  { icon: <FiMapPin />, label: 'Location', value: 'Manchester, UK', href: null },
  { icon: <FiGithub />, label: 'GitHub', value: 'github.com/joseseyah', href: 'https://github.com/joseseyah' },
]

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const mailtoLink = `mailto:joseph.hayes003@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`
    window.location.href = mailtoLink
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <span className="section-label">Contact</span>
        <h2 className="section-title">Let's work together</h2>
        <p className="section-subtitle">
          Have a project in mind or just want to chat? I'd love to hear from you.
        </p>

        <div className="contact__grid">
          <div className="contact__info">
            {contactInfo.map((item) => (
              <div key={item.label} className="contact__info-card">
                <div className="contact__info-icon">{item.icon}</div>
                <div>
                  <span className="contact__info-label">{item.label}</span>
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="contact__info-value">
                      {item.value}
                    </a>
                  ) : (
                    <span className="contact__info-value">{item.value}</span>
                  )}
                </div>
              </div>
            ))}

            <div className="contact__cta">
              <p>Prefer a direct approach?</p>
              <a href="mailto:joseph.hayes003@gmail.com" className="btn btn-outline">
                <FiMail /> Send an Email
              </a>
            </div>
          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__form-row">
              <div className="contact__field">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>
              <div className="contact__field">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="contact__field">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                required
                placeholder="What's this about?"
              />
            </div>

            <div className="contact__field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Tell me about your project..."
              />
            </div>

            <button type="submit" className="btn btn-primary contact__submit">
              {submitted ? 'Opening Email Client...' : (
                <>
                  Send Message <FiSend />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
