import React from 'react'
import leetcodeProfile from '../assets/LeetProfile.png'

const LeetCode = () => {
  return (
    <section id="leetcode" className="section leetcode">
      <div className="section-heading">
        <p className="eyebrow">My Profile</p>
        <h2>Problem Solving &amp; Project Showcase</h2>
      </div>
      <div className="leetcode-card">
        <div className="leetcode-copy">
          <span className="leetcode-pill">Profile Snapshot</span>
          <p className="leetcode-summary">
            A focused space where I practice problem-solving, build consistency,
            and sharpen data structures and algorithms thinking.
          </p>

          <div className="leetcode-chips" aria-label="LeetCode focus areas">
            <span>Problem Solving</span>
            <span>Consistency</span>
            <span>Patterns</span>
          </div>

          <a
            href="https://leetcode.com/u/Ganapathi_jahnavi/"
            target="_blank"
            rel="noopener noreferrer"
            className="leetcode-link-button"
          >
            View my LeetCode profile
          </a>

          <div className="leetcode-read-panel">
            <h3 className="leetcode-read-heading">Read</h3>
            <p className="leetcode-inline-note">
              Want to see my implementation work? Visit
              <a href="#projects" className="leetcode-inline-link">
                Projects
              </a>
              and
              <a
                href="https://github.com/ganapathijahnavi"
                target="_blank"
                rel="noopener noreferrer"
                className="leetcode-inline-link"
              >
                GitHub
              </a>
              for full-stack and AI/ML builds.
            </p>
          </div>
        </div>

        <div className="leetcode-display">
          <div className="leetcode-frame">
            <img
              src={leetcodeProfile}
              alt="LeetCode Profile Screenshot"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default LeetCode
