import profileImg from '../assets/GanapathiJahnaviDurga.jpeg';
const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <div className="contact-card">
        <div className="contact-main">
          <div className="contact-title-row">
            <p className="eyebrow">Contact</p>
            <span className="contact-live-pill">Available for work</span>
          </div>
          <p className="contact-quote">
            "Dream big, build boldly, and let your work speak for itself."
          </p>
          <div className="contact-badge-row" aria-label="Collaboration options">
            <span className="contact-badge">Internships</span>
            <span className="contact-badge">Collaborations</span>
            <span className="contact-badge">Freelance Projects</span>
          </div>

          <div className="contact-profile-row">
            <img
              className="contact-avatar"
              src={profileImg}
              alt="Jahnavi Durga Ganapathi"
            />
            <div className="contact-profile-copy">
              <h2>Jahnavi Durga Ganapathi</h2>
              <p>Open to internships, collaborations, and creative problem solving.</p>
            </div>
          </div>
        </div>

        <div className="contact-bottom-links">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=g.jahnavidurga@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="contact-link-pill"
          >
            <img
              className="contact-link-avatar"
              src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png"
              alt=""
              aria-hidden="true"
            />
            <span>Email</span>
          </a>
          <a
            className="contact-link-pill"
            href="https://github.com/ganapathijahnavi"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="contact-link-avatar"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt=""
              aria-hidden="true"
            />
            <span>GitHub</span>
          </a>
          <a
            className="contact-link-pill"
            href="https://www.linkedin.com/in/jahnavi-durga-ganapathi-71bb09311/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="contact-link-avatar"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
              alt=""
              aria-hidden="true"
            />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
