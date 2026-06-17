import { useState, useRef, useEffect } from 'react'
import './Asistente.css'

const SYSTEM_PROMPT = `Eres un asistente virtual del portafolio de Aaron Sebastian Martinez.

INFORMACION SOBRE AARON:
- Nombre completo: Aaron Sebastian Martinez
- Carrera: Ingenieria de Sistemas
- Universidad: UAI - UNIVERSIDAD AUTONOMA DE ICA
- Habilidades: HTML (intermedio), CSS (intermedio), JavaScript (basico), MySQL (basico), React (aprendiendo)
- Proyectos: Sistema de Gestion de Estudiantes (HTML, CSS, JS, MySQL)
- GitHub: https://github.com/aaronsebastianmartinez1-cloud
- Correo: aaronsebastianmartinez1@gmail.com
- WhatsApp: +51 999581213
- Pareja: Gilary

Eres amable, profesional y conciso. Si te preguntan algo que no sabes sobre Aaron, dices que no tienes esa informacion pero ofreces ayuda con lo que si sabes.
Responde siempre en espanol.`

export default function Asistente() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: '¡Hola! 👋 Soy el asistente virtual de Aaron Sebastian. ¿En qué puedo ayudarte? Puedes preguntarme sobre sus habilidades, proyectos o experiencia.',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef(null)

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }
  }, [messages, loading])

  const sendMessage = async () => {
    if (!input.trim() || loading) return

    const userMessage = {
      role: 'user',
      content: input.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setLoading(true)

    try {
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer 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'
        },
        body: JSON.stringify({
          model: 'llama-3.1-8b-instant',
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            ...[...messages, userMessage]
              .filter(m => m.role === 'user' || m.role === 'assistant')
              .map(m => ({ role: m.role, content: m.content }))
          ]
        })
      })

      const data = await response.json()
      const assistantMessage = {
        role: 'assistant',
        content: data.choices[0].message.content,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }

      setMessages(prev => [...prev, assistantMessage])
    } catch (err) {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: '❌ Error al conectar. Intenta de nuevo.',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }])
    } finally {
      setLoading(false)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <>
      {/* Botón flotante */}
      <button className="asistente-fab" onClick={() => setOpen(true)}>
        🤖 <span>Asistente IA</span>
      </button>

      {/* Modal */}
      {open && (
        <div className="asistente-overlay" onClick={() => setOpen(false)}>
          <div className="asistente-modal" onClick={(e) => e.stopPropagation()}>
            <div className="chat-header">
              <div className="chat-header-left">
                <div className="chat-header-dot"></div>
                <div>
                  <div className="chat-header-title">Asistente de Aaron</div>
                  <div className="chat-header-sub">Siempre en línea</div>
                </div>
              </div>
              <button className="asistente-close" onClick={() => setOpen(false)}>✕</button>
            </div>

            <div className="chat-messages">
              {messages.map((msg, i) => (
                <div key={i} className={`message ${msg.role}`}>
                  <div className="message-bubble">{msg.content}</div>
                  <span className="message-time">{msg.time}</span>
                </div>
              ))}
              {loading && (
                <div className="message assistant">
                  <div className="chat-typing">
                    <span /><span /><span />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="chat-input-area">
              <input
                className="chat-input"
                type="text"
                placeholder="Escribe tu mensaje..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={loading}
                autoFocus
              />
              <button
                className="chat-send"
                onClick={sendMessage}
                disabled={loading || !input.trim()}
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}