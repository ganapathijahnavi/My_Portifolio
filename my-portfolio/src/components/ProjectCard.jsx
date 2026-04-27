const ProjectCard = ({ project, index }) => {
  return (
    <div className="project-vertical-card">
      <div className="project-vertical-thumb">
        {project.image && (
          <squircle-image
            src={project.image}
            alt={project.title + ' thumbnail'}
            smoothing="4.8"
            loading="lazy"
          />
        )}
      </div>
      <div className="project-vertical-content">
        <div className="project-vertical-index">{String(index).padStart(2, '0')}</div>
        <div className="project-vertical-title">{project.title}</div>
        <div className="project-vertical-stack">
          {project.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        {project.link && (
          <a
            className="project-vertical-link"
            href={project.link}
            target="_blank"
            rel="noreferrer"
          >
            Visit
          </a>
        )}
      </div>
    </div>
  )
}

export default ProjectCard