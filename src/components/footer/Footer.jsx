import './Footer.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo-footer.png';

export default function Footer() {

    function handleEmailClick(e) {
        e.preventDefault();
        window.location.href = "mailto:savetotsinfo@gmail.com";
    }

    return (
        <footer className="footer">
            <div className="container">

                {/* COLUNA LOGO */}
                <div className="coluna logoColuna">
                    <img src={logo} className="logo" alt="Logo SaveTots" />
                </div>

                {/* COLUNA LINKS */}
                <div className="coluna linksColuna">
                    <h4>Navegação</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/sobre">Sobre o SaveTots</Link></li>
                    </ul>
                </div>

                {/* COLUNA CONTATO */}
                <div className="coluna contatoColuna">
                    <h4>Contate-nos</h4>
                    <p>
                        <a 
                            href="#"
                            onClick={handleEmailClick}
                            className="emailLink"
                        >
                            savetotsinfo@gmail.com
                        </a>
                    </p>
                </div>

            </div>

            <p className="direitos">© 2025 SaveTots. Todos os direitos reservados. </p>

              

        </footer>
    );
}
