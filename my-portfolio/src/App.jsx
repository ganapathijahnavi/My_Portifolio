import './App.css'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Internships from './sections/Internships'
import Certifications from './sections/Certifications'
import LeetCode from './sections/LeetCode'
import Contact from './sections/Contact'
import Feedback from './sections/Feedback'

function App() {
  return (
    <div className="app">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Internships />
      <Certifications />
      <LeetCode />
      <Contact />
      <Feedback />
      <footer className="footer">© 2026 Jahnavi Durga Ganapathi</footer>
    </div>
  )
}

export default App
