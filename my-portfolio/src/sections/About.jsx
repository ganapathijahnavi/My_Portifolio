import aboutPicture from '../assets/Picture.png'
import AboutGreetingCard from '../components/AboutGreetingCard'

const About = () => {
  return (
    <>
    <section id="about" className="section about">
      <div className="section-heading">
        <p className="eyebrow">About</p>
        <h2>Curious, creative, and hands-on.</h2>
      </div>
      <div className="about-flex">
        <div className="about-copy">
          <p>
            I am a developer with a strong foundation in Python and data structures, backed by hands on experience in full stack MERN development.
            I enjoy designing scalable backend systems and building products that solve real world problems.
          </p>
          <p>
            My core interests lie in AI, machine learning, and product focused engineering.
            I focus on writing clean, reliable code and turning ideas into working applications.
            I am driven by curiosity and consistently invest in learning new technologies.
            Beyond tech, I enjoy creative work, playing shuttle badminton, reading novels, and listening to music.
          </p>
          <p>
            I aim to grow as an engineer who builds meaningful technology that creates lasting impact.
          </p>
          <div className="about-interests">
            <h3>Interests</h3>
            <p>AI/ML, Software Developer, Scalable Systems</p>
          </div>
          <div className="about-education">
            <h4>Education</h4>
            <span role="img" aria-label="graduation">🎓</span> BTECH — SRGEC, Gudlavalleru <span style={{color: '#555', fontWeight: 500}}>(8.92 CGPA)</span>
          </div>
        </div>
        <div className="about-media-stack">
          <AboutGreetingCard />
          <div className="about-art">
            <img
              src={aboutPicture}
              alt="Creative portrait"
              className="about-portrait"
            />
          </div>
        </div>
      </div>
    </section>

    </>
  )
}

export default About
