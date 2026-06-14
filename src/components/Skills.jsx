import './Skills.css'

const skills = [
  { icon: '🌐', name: 'HTML', level: 'Intermedio' },
  { icon: '🎨', name: 'CSS', level: 'Intermedio' },
  { icon: '⚡', name: 'JavaScript', level: 'Básico' },
  { icon: '🗄️', name: 'MySQL', level: 'Básico' },
  { icon: '⚛️', name: 'React', level: 'Aprendiendo' },
]

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="section-title">Mis <span>Habilidades</span></h2>
        <div className="section-line"></div>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.name}>
              <div className="skill-icon">{skill.icon}</div>
              <div className="skill-name">{skill.name}</div>
              <div className="skill-level">{skill.level}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}