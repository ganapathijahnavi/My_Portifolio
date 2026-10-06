const internships = [
  {
    company: 'SmartBridge',
    mode: 'Virtual mode',
    track: 'Machine Learning',
    period: '2024 · 4 months',
    summary: 'Explored core machine learning concepts and applied them through guided hands-on exercises and practical model-building work.',
    accent: 'internship-card-blue',
  },
  {
    company: 'SmartBridge',
    mode: 'Virtual mode',
    track: 'MERN Stack',
    period: '2025 · 4 months',
    summary: 'Built and deployed a grocery web application end to end, working across the frontend, backend, database, and deployment workflow.',
    accent: 'internship-card-green',
    link: 'https://nextstopgroceries.netlify.app/',
  },
  {
    company: '3Skill',
    mode: 'Virtual mode',
    track: 'AI / ML',
    period: '2026 · Jan – March · 3 months',
    summary: 'Learned artificial intelligence and machine learning foundations with practical hands-on work to connect concepts with real applications.',
    accent: 'internship-card-pink',
  },
]

const Internships = () => {
  return (
    <section id="internships" className="section internships">
      <div className="section-heading">
        <p className="eyebrow">Experience</p>
        <h2>Internship experience.</h2>
      </div>

      <div className="internship-grid">
        {internships.map((internship) => (
          <article className={`internship-card ${internship.accent}`} key={`${internship.company}-${internship.track}`}>
            <div className="internship-card-top">
              <span className="internship-number" aria-hidden="true">♥</span>
              <span className="internship-mode">{internship.mode}</span>
            </div>
            <p className="internship-company">{internship.company}</p>
            <h3>{internship.track}</h3>
            <p className="internship-period">{internship.period}</p>
            <p className="internship-summary">{internship.summary}</p>
            {internship.link && (
              <a className="internship-link" href={internship.link} target="_blank" rel="noreferrer">
                View deployed grocery app <span aria-hidden="true">↗</span>
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}

export default Internships
