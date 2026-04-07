import './App.css'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import LeetCode from './sections/LeetCode'
import Contact from './sections/Contact'

function App() {
  return (
    <div className="app">
      <div className="theme-switch-wrap">
        <input
          className="theme-toggle-input"
          type="checkbox"
          id="theme-toggle"
          aria-label="Toggle dark mode"
        />
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
      <Hero />
      <About />
      <Skills />
      <Projects />
      <LeetCode />
      <Contact />
      <footer className="footer">© 2026 Jahnavi Durga Ganapathi</footer>
    </div>
  )
}

export default App
