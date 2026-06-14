import { useState } from 'react'
import './Weeks.css'

const weeks = [
  { number: 'Semana 01', title: 'Introducción a HTML', desc: 'Estructura web, etiquetas básicas y semántica HTML5.', link: 'https://aaronsebastianmartinez1-cloud.github.io/HTML/index.html' },
  { number: 'Semana 02', title: 'CSS Básico', desc: 'Selectores, propiedades, colores y tipografía.', link: '#' },
  { number: 'Semana 03', title: 'Flexbox y Responsive', desc: 'Diseño flexible y adaptable a distintos dispositivos.', link: '#' },
  { number: 'Semana 04', title: 'Maquetación Web', desc: 'Construcción de layouts completos con HTML y CSS.', link: '#' },
  { number: 'Semana 05', title: 'Introducción a JavaScript', desc: 'Variables, funciones, eventos y manipulación del DOM.', link: '#' },
  { number: 'Semana 06', title: 'JavaScript Avanzado', desc: 'Arrays, objetos, promesas y fetch API.', link: '#' },
  { number: 'Semana 07', title: 'Bases de Datos', desc: 'Introducción a MySQL, tablas y consultas básicas.', link: '#' },
  { number: 'Semana 08', title: 'Backend Básico', desc: 'Servidor con Node.js y conexión a base de datos.', link: '#' },
  { number: 'Semana 09', title: 'React Fundamentos', desc: 'Componentes, props, estado y hooks en React.', link: '#' },
  { number: 'Semana 10', title: 'Proyecto Final', desc: 'Integración de todo lo aprendido en un proyecto completo.', link: '#' },
]

export default function Weeks() {
  const [modal, setModal] = useState(null)

  const openModal = (week) => {
    if (week.link !== '#') setModal(week)
  }

  const closeModal = () => setModal(null)

  return (
    <section className="weeks" id="weeks">
      <div className="container">
        <h2 className="section-title">Trabajos de <span>las Semanas</span></h2>
        <div className="section-line"></div>
        <div className="weeks-grid">
          {weeks.map((week) => (
            <div className="week-card" key={week.number}>
              <p className="week-number">{week.number}</p>
              <h3 className="week-title">{week.title}</h3>
              <p className="week-desc">{week.desc}</p>
              <button
                className={`week-link ${week.link === '#' ? 'disabled' : ''}`}
                onClick={() => openModal(week)}
                disabled={week.link === '#'}
              >
                👁 Ver trabajo →
              </button>
            </div>
          ))}
        </div>
      </div>

      {modal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <p className="modal-number">{modal.number}</p>
                <h3 className="modal-title">{modal.title}</h3>
              </div>
              <button className="modal-close" onClick={closeModal}>✕</button>
            </div>
            <iframe
              src={modal.link}
              title={modal.title}
              className="modal-iframe"
            />
          </div>
        </div>
      )}
    </section>
  )
}