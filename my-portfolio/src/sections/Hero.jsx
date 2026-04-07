import heroPicture from '../assets/Picture-1.png'

const Hero = () => {
  return (
    <section id="home" className="hero">

      <nav className="nav">
        <div className="brand">JDG</div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="nav-cta" href="#contact">
          Let&apos;s Talk
        </a>
      </nav>

      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Portfolio 2026</p>
          <h1>
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
          <div className="floating-card">
            <p>Creative problem solver</p>
            <span>Building with data + design</span>
          </div>
          <div className="spark" />
        </div>
      </div>

    </section>
  )
}

export default Hero
