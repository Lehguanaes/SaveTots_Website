import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-container">
      <p>© {new Date().getFullYear()} SaveTots — Todos os direitos reservados.</p>
    </footer>
  );
}