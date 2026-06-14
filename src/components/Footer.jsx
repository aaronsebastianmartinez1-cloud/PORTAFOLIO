import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a href="#hero" className="footer-logo">Aaron<span>.</span></a>
        <div className="footer-links">
          <a href="linkporagregar" target="_blank" className="footer-link">
            🐙 GitHub
          </a>
          <a href="https://es.linkedin.com/" target="_blank" className="footer-link">
            💼 LinkedIn
          </a>
          <a href="mailto:tucorreo@uai.edu" className="footer-link">
            ✉️ Correo
          </a>
          <a href="https://www.facebook.com/" target="_blank" className="footer-link">
            📘 Facebook
          </a>
        </div>
        <p className="footer-copy">
          © 2026 <span>Aaron Sebastian</span> — Ingeniería de Sistemas UAI
        </p>
      </div>
    </footer>
  )
}