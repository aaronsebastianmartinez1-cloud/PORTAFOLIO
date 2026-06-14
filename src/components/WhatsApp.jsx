import './WhatsApp.css'

export default function WhatsApp() {
  const phone = '51999581213'
  const message = 'Hola Aaron Sebastian, vi tu portafolio y me gustaría contactarte.'
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

  return (
    <a href={url} target="_blank" className="whatsapp-btn" rel="noreferrer">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        width="28"
        height="28"
      />
      <span>¿Hablamos?</span>
    </a>
  )
}