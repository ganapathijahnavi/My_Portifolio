import { useEffect, useState } from 'react'
import heroPicture from '../assets/Picture-1.png'

const notes = [
  'Be creative. Be curious. Be kind.',
  'Be Memorable. Be remarkable.',
  'Embrace the journey.',
  'Be grateful for the little things.',
  'Build with curiosity.',
  'Small steps create big ideas.',
  'Make it useful. Make it yours.',
  'Turn problems into possibilities.',
]

const Hero = () => {
  const [noteIndex, setNoteIndex] = useState(0)

  useEffect(() => {
    const noteTimer = window.setInterval(() => {
      setNoteIndex((currentIndex) => (currentIndex + 1) % notes.length)
    }, 2000)

    return () => window.clearInterval(noteTimer)
  }, [])

  return (
    <section id="home" className="hero">

      <nav className="nav">
        <div className="brand">JDG</div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#internships">Internships</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="nav-actions">
          <a className="nav-cta" href="#contact">
            Let&apos;s Talk
          </a>
          <div className="theme-switch-wrap">
            <input className="theme-toggle-input" type="checkbox" id="theme-toggle" aria-label="Toggle dark mode" />
            <label className="theme-toggle" htmlFor="theme-toggle">
              <span className="theme-toggle-track" aria-hidden="true">
                <span className="theme-toggle-thumb">
                  <svg className="theme-icon theme-icon-sun" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle cx="12" cy="12" r="4.25" stroke="currentColor" strokeWidth="2" />
                    <path d="M12 2.5V5.3M12 18.7V21.5M21.5 12H18.7M5.3 12H2.5M18.72 5.28L16.74 7.26M7.26 16.74L5.28 18.72M18.72 18.72L16.74 16.74M7.26 7.26L5.28 5.28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <svg className="theme-icon theme-icon-moon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M20 14.3A8.3 8.3 0 1 1 9.7 4 6.9 6.9 0 1 0 20 14.3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </span>
            </label>
          </div>
        </div>
      </nav>

      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Portfolio 2026</p>
          <h1 className="hero-name-heading">
            Jahnavi Durga Ganapathi
            <span>Computer Science Engineer &amp; Builder</span>
          </h1>
          <p className="hero-subtitle">
            AI/ML enthusiast and full-stack developer focused on intelligent
            systems, scalable web apps, and clean code for real-world impact.
          </p>
          <div className="hero-actions">
            <a className="btn primary" href="#projects">
              View Projects
            </a>
            <a
              className="btn ghost"
              href="https://drive.google.com/file/d/1kSVKBk9PLutgozQJb1ovZLxivJrt0R-F/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Download Resume
            </a>
            
          </div>
          <div className="hero-meta">
            <div>
              <span className="meta-label">Location</span>
              <span>Andhra Pradesh, India</span>
            </div>
            <div>
              <span className="meta-label">Focus</span>
              <span>AI/ML, Full-Stack, Product</span>
            </div>
          </div>
        </div>

        <div className="hero-art">
          <img
            src={heroPicture}
            alt="Illustrative portrait"
          />
          <div className="creative-card">
            <p>Creative problem solver</p>
            <span>Building with data + design</span>
          </div>
          <div className="floating-card">
            <div className={`note-board note-board-${noteIndex}`} aria-live="polite">
              <div className="note-page">
                <span className="note-board-label">Quote of the day</span>
                <span className="note-quote-mark">“</span>
                <p>{notes[noteIndex]}</p>
              </div>
            </div>
            <div className="magic-animation">
              <dotlottie-wc
                src="https://assets-v2.lottiefiles.com/a/6194d8e2-1184-11ee-94d8-13dc723d0f96/dbdUtbWINe.lottie"
                loop
                autoplay
                aria-label="Animated magician casting a spell"
              />
              <span>Making ideas happen</span>
            </div>
          </div>
          <div className="spark" />
        </div>
      </div>

    </section>
  )
}

export default Hero
