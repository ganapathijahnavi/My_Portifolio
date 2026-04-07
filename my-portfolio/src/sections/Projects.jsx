import projects from '../data/projects'
import cuteGirlImage from '../assets/cartoon-cute-little-girl-pose-welcome_6120789.png'

const Projects = () => {
  const deck = projects

  return (
    <section id="projects" className="section projects">
      <div className="section-heading">
        <h2>My Projects</h2>
      </div>

      <div className="project-stack-shell" style={{ '--cards': deck.length }}>
        {deck.map((project, idx) => (
          <input
            key={`stack-radio-${project.title}`}
            className="project-stack-radio"
            type="radio"
            name="project-stack"
            id={`stack-${idx + 1}`}
            defaultChecked={idx === 0}
            aria-label={`Show ${project.title}`}
          />
        ))}

        <div className="project-stack-layout">
          <aside className="project-overview" aria-label="Project list overview">
            {deck.map((project, idx) => (
              <label key={`overview-${project.title}`} className="project-overview-item" htmlFor={`stack-${idx + 1}`}>
                <span className="project-overview-index">{String(idx + 1).padStart(2, '0')}</span>
                <span className="project-overview-title">{project.title}</span>
              </label>
            ))}
          </aside>

          <div className="project-stack-stage">
            {deck.map((project, idx) => {
              const next = ((idx + 1) % deck.length) + 1

              return (
                <article
                  key={project.title}
                  className="project-stack-card"
                  style={{ '--index': idx + 1 }}
                >
                  <div className="project-stack-toolbar">
                    <span>{project.category}</span>
                    <label className="project-stack-close" htmlFor={`stack-${next}`} aria-label="Show next project">
                      ×
                    </label>
                  </div>

                  <div className="project-stack-body">
                    <div className="project-stack-media">
                      {project.image && <img src={project.image} alt={`${project.title} preview`} />}
                    </div>

                    <div className="project-stack-content">
                      <h3>{project.title}</h3>
                      <div className="project-stack-skills">
                        {project.stack.slice(0, 4).map((item) => (
                          <span key={item}>{item}</span>
                        ))}
                      </div>
                      <p>{project.description}</p>
                      <a href={project.link} target="_blank" rel="noreferrer">
                        Visit
                      </a>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>

        <div className="project-stack-mascot" aria-hidden="true">
          <div className="mascot-note">
            Click × to close and
            <br />
            open new project
          </div>
          <div className="mascot-board">
            Click × to close and
            <br />
            open new project
          </div>
          <img className="mascot-girl" src={cuteGirlImage} alt="Cute girl" />
        </div>
      </div>
    </section>
  )
}

export default Projects
