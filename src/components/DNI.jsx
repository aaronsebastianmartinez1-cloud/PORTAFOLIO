import { useState } from 'react'
import './DNI.css'

export default function DNI() {
  const [dni, setDni] = useState('')
  const [resultado, setResultado] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

 const buscarDNI = async () => {
    if (dni.length !== 8) {
      setError('El DNI debe tener 8 dígitos.')
      return
    }

    setLoading(true)
    setError(null)
    setResultado(null)

    try {
      const response = await fetch(
        'https://apiperu.dev/api/dni',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 726c58453bdff2c1a4eca28444c778c54272bb27c800d7c6e7854ec203b08cf2'
          },
          body: JSON.stringify({ dni: dni })
        }
      )
      const data = await response.json()

      if (data.success) {
        setResultado(data.data)
      } else {
        setError('No se encontró información para ese DNI.')
      }
    } catch (err) {
      setError('Error al consultar. Intenta de nuevo.')
    } finally {
      setLoading(false)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') buscarDNI()
  }

  return (
    <section className="dni" id="dni">
      <div className="container">
        <h2 className="section-title">Consulta de <span>DNI</span></h2>
        <div className="section-line"></div>
        <p className="dni-subtitle">
          Consulta información de cualquier DNI peruano en tiempo real.
        </p>

        <div className="dni-card">
          <div className="dni-input-group">
            <input
              type="number"
              placeholder="Ingresa el DNI (8 dígitos)"
              value={dni}
              onChange={(e) => setDni(e.target.value.slice(0, 8))}
              onKeyDown={handleKeyDown}
              className="dni-input"
            />
            <button
              className="dni-btn"
              onClick={buscarDNI}
              disabled={loading}
            >
              {loading ? 'Buscando...' : '🔍 Buscar'}
            </button>
          </div>

          {error && (
            <div className="dni-error">❌ {error}</div>
          )}

          {resultado && (
  <div className="dni-resultado">
    <div className="dni-resultado-header">
      <span className="dni-badge">✅ Encontrado</span>
    </div>
    <div className="dni-grid">
      <div className="dni-field">
        <span className="dni-label">Nombres</span>
        <span className="dni-value">{resultado.nombres}</span>
      </div>
      <div className="dni-field">
        <span className="dni-label">Apellido Paterno</span>
        <span className="dni-value">{resultado.apellido_paterno}</span>
      </div>
      <div className="dni-field">
        <span className="dni-label">Apellido Materno</span>
        <span className="dni-value">{resultado.apellido_materno}</span>
      </div>
      <div className="dni-field">
        <span className="dni-label">Número de DNI</span>
        <span className="dni-value">{resultado.numero}</span>
      </div>
      <div className="dni-field">
        <span className="dni-label">Código de verificación</span>
        <span className="dni-value">{resultado.codigo_verificacion}</span>
      </div>
      <div className="dni-field">
  <span className="dni-label">Nombre completo</span>
  <span className="dni-value">
    {resultado.nombres} {resultado.apellido_paterno} {resultado.apellido_materno}
  </span>
</div>
    </div>
  </div>
)}
        </div>
      </div>
    </section>
  )
}