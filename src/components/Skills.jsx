import './Skills.css'

const skills = [
  { name: 'Python', level: 90 },
  { name: 'Mathematics', level: 95 },
  { name: 'JavaScript', level: 80 },
  { name: 'HTML/CSS', level: 85 },
  { name: 'Java', level: 75 },
  { name: 'C++', level: 70 },
  { name: 'AI/ML Concepts', level: 80 },
  { name: 'Teaching', level: 95 },
]

const areas = [
  'Technical AI Safety',
  'Calculus',
  'Linear Algebra',
  'Machine Learning',
  'Community Building',
  'Tutoring & Education',
  'Code Debugging',
  'IT Support',
]

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="skills-container">
          <div className="skills-bars">
            <h3 className="skills-subtitle">Technical Skills</h3>
            {skills.map((skill) => (
              <div className="skill-item" key={skill.name}>
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div className="tools-grid">
            <h3 className="skills-subtitle">Areas of Focus</h3>
            <div className="tools-list">
              {areas.map((area) => (
                <div className="tool-item" key={area}>
                  {area}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
