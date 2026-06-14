import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

export default function Contact() {
  const formRef = useRef()
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    try {
      await emailjs.sendForm(
        'service_o0u8qlr',
        'template_zdo7r19',
        formRef.current,
        'u-z19HNYUGrEJRUEg'
      )
      setStatus('success')
      formRef.current.reset()
    } catch (error) {
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">Contac<span>tame</span></h2>
        <div className="section-line"></div>
        <div className="contact-inner">
          <div className="contact-info">
            <h3>¿Tienes algún proyecto en mente?</h3>
            <p>
              Estoy disponible para proyectos freelance, colaboraciones 
              o simplemente para conversar sobre tecnología. 
              ¡No dudes en escribirme!
            </p>
            <div className="contact-details">
              <div className="contact-detail">
                <span>✉️</span>
                <span>aaronsebastianmartinez1@gmail.com</span>
              </div>
              <div className="contact-detail">
                <span>📍</span>
                <span>Perú</span>
              </div>
              <div className="contact-detail">
                <span>🎓</span>
                <span>Universidad UAI</span>
              </div>
            </div>
          </div>

          <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Nombre</label>
              <input type="text" name="from_name" placeholder="Tu nombre" required />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" name="from_email" placeholder="tu@email.com" required />
            </div>
            <div className="form-group">
              <label>Mensaje</label>
              <textarea name="message" placeholder="Escribe tu mensaje aquí..." required />
            </div>
            {status === 'success' && (
              <div className="form-status success">✅ ¡Mensaje enviado correctamente!</div>
            )}
            {status === 'error' && (
              <div className="form-status error">❌ Error al enviar. Intenta de nuevo.</div>
            )}
            <button type="submit" className="btn-submit" disabled={loading}>
              {loading ? 'Enviando...' : '📨 Enviar mensaje'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}