import './Hero.css'
import perfilImg from '../assets/perfil.jpg'
export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container hero-inner">
        <div className="hero-text">
          <p className="hero-greeting">👋 Hola, soy</p>
          <h1 className="hero-name">Aaron <span>Sebastian</span></h1>
          <p className="hero-role">Estudiante de Ingeniería de Sistemas</p>
          <p className="hero-desc">
            Estudiante UAI enfocado en desarrollo web y bases de datos. 
            Apasionado por construir soluciones limpias y funcionales. Y eternamente Enamorado de Gila❤
          </p>
          <div className="hero-buttons">
            <a href="https://aaronsebastianmartinez1-cloud.github.io/HTML/ejemplo-cv.pdf" 
               target="_blank" className="btn-primary">
              📄 Descargar CV
            </a>
            <a href="#projects" className="btn-secondary">
              Ver Proyectos
            </a>
          </div>
        </div>
        <div className="hero-image">
  <img src={perfilImg} className="hero-avatar" alt="Aaron Sebastian" />
</div>
      </div>
    </section>
  )
}