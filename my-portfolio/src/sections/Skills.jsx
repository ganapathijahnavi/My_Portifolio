import skills from '../data/skills'

const Skills = () => {
  return (
    <section id="skills" className="section skills">
      <div className="section-heading">
        <p className="eyebrow">Skills</p>
        <h2>Tools I like to build with.</h2>
      </div>
      <div className="skills-grid">
        {skills.map((skill) => (
          <span key={skill} className="skill-pill">
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}

export default Skills
