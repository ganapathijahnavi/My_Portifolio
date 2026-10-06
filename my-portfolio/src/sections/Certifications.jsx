import { useEffect, useRef, useState } from 'react'

const certifications = [
  {
    title: 'PCAP: Programming Essentials in Python',
    issuer: 'Cisco Networking Academy',
    category: 'Programming',
    accent: 'certification-card-cyan',
  },
  {
    title: 'CS50’s Introduction to Artificial Intelligence with Python',
    issuer: 'edX',
    category: 'Artificial Intelligence',
    accent: 'certification-card-purple',
  },
  {
    title: 'Artificial Intelligence Fundamentals',
    issuer: 'IBM SkillsBuild',
    category: 'Artificial Intelligence',
    accent: 'certification-card-blue',
  },
  {
    title: 'Human-Computer Interaction (HCI)',
    issuer: 'NPTEL',
    category: 'Design & Usability',
    score: '93%',
    accent: 'certification-card-pink',
  },
  {
    title: 'Social Network Analysis (SNA)',
    issuer: 'NPTEL',
    category: 'Data & Networks',
    accent: 'certification-card-teal',
  },
  {
    title: 'Scrum Fundamental Certified',
    issuer: 'SCRUMstudy™',
    category: 'Professional Practice',
    accent: 'certification-card-orange',
  },
  
  {
    title: 'Introduction to Large Language Models (LLMs)',
    issuer: 'NPTEL',
    category: 'Generative AI',
    accent: 'certification-card-violet',
  },
  {
    title: 'Oracle Certified Foundations Associate',
    issuer: 'Oracle',
    category: 'Cloud & Technology',
    accent: 'certification-card-red',
  },
  {
    title: 'Full Stack Development (MERN)',
    issuer: 'SmartBridge',
    category: 'Full-Stack Development',
    accent: 'certification-card-green',
  },
  {
    title: 'Machine Learning',
    issuer: 'SmartBridge',
    category: 'Machine Learning',
    accent: 'certification-card-indigo',
  },
  {
    title: 'AI/ML Internship Certificate',
    issuer: '3Skill',
    category: 'Artificial Intelligence',
    accent: 'certification-card-rose',
  },
]

const Certifications = () => {
  const certificationGridRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const updateScrollState = () => {
    const grid = certificationGridRef.current
    if (!grid) return

    setCanScrollLeft(grid.scrollLeft > 4)
    setCanScrollRight(grid.scrollLeft + grid.clientWidth < grid.scrollWidth - 4)
  }

  const scrollCards = (direction) => {
    certificationGridRef.current?.scrollBy({
      left: direction * certificationGridRef.current.clientWidth * 0.82,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    updateScrollState()
    window.addEventListener('resize', updateScrollState)

    return () => window.removeEventListener('resize', updateScrollState)
  }, [])

  return (
    <section id="certifications" className="section certifications">
      <div className="certifications-heading-row">
        <div className="section-heading">
          <p className="eyebrow">Learning &amp; growth</p>
          <h2>Certifications that keep me curious.</h2>
        </div>
        <div className="certification-scroll-controls" aria-label="Certification navigation">
          <span className="certification-scroll-hint">Scroll to explore</span>
          <button
            className="certification-scroll-button"
            type="button"
            aria-label="Show previous certifications"
            disabled={!canScrollLeft}
            onClick={() => scrollCards(-1)}
          >
            <span aria-hidden="true">←</span>
          </button>
          <button
            className="certification-scroll-button"
            type="button"
            aria-label="Show more certifications"
            disabled={!canScrollRight}
            onClick={() => scrollCards(1)}
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
      <div
        className="certification-grid"
        ref={certificationGridRef}
        onScroll={updateScrollState}
        tabIndex="0"
        aria-label="Horizontal list of certifications"
      >
        {certifications.map((certification, index) => (
          <article
            className={`certification-card ${certification.accent}`}
            key={certification.title}
          >
            <div className="certification-card-top">
              <span className="certification-seal" aria-hidden="true">
                <span>✦</span>
              </span>
              <span className="certification-index" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              {certification.score && (
                <span className="certification-score">{certification.score}</span>
              )}
            </div>
            <p className="certification-label">Certificate of learning</p>
            <h3>{certification.title}</h3>
            <div className="certification-divider" aria-hidden="true" />
            <div className="certification-footer">
              <p className="certification-category">{certification.category}</p>
              <p className="certification-issuer">
                <span>Issued by</span>
                <strong>{certification.issuer}</strong>
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Certifications
