import './Projects.css'

const projects = [
  {
    tag: 'Sistema Web',
    title: 'Sistema de Gestión de Estudiantes',
    desc: 'Aplicación para el control y seguimiento de estudiantes. Permite registrar, editar y consultar información académica.',
    techs: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
    link: '#',
  },
]

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title">Mis <span>Proyectos</span></h2>
        <div className="section-line"></div>
        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.title}>
              <span className="project-tag">{project.tag}</span>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>
              <div className="project-techs">
                {project.techs.map((tech) => (
                  <span className="project-tech" key={tech}>{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.link} className="project-link">🔗 Ver proyecto →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}