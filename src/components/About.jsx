import './About.css'

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <div className="about-image-placeholder">
              <span>About Image</span>
            </div>
          </div>
          <div className="about-text">
            <p>
              My goal is to contribute to technical AI Safety research and build
              community around AI Safety. I bring a unique combination of
              engineering background, programming expertise, and over a decade
              of teaching experience to this mission.
            </p>

            <h3>Background</h3>
            <ul className="about-list">
              <li>Completed senior high school in Australia, studying Mathematics, Physics, Chemistry, and English</li>
              <li>Self-taught programming: Java, C++, JavaScript, HTML, CSS, and Python</li>
              <li>Undergraduate Mining Engineering (3 years)</li>
              <li>10+ years as a high school mathematics tutor</li>
            </ul>

            <h3>Recent Education</h3>
            <ul className="about-list">
              <li><strong>2022:</strong> Diploma of Information Technology (Advanced Programming)</li>
              <li><strong>2025:</strong> Specialised in Python and AI at TAFE</li>
              <li><strong>2026:</strong> Bachelor of Mathematics, focusing on Calculus and Linear Algebra for AI applications</li>
            </ul>

            <h3>Current Roles</h3>
            <ul className="about-list">
              <li>Studying Mathematics and AI Safety</li>
              <li>Volunteer host for AI Safety Meetup Perth</li>
            </ul>

            <h3>Conferences & Events (2025)</h3>
            <p>
              KiwiPyCon (New Zealand), Effective Altruism Conference, and AJCAI
              (Australian Joint Conference on AI) for networking and professional
              development.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
