import './Sections.css';
import peso from '../../assets/gatilhos/peso.png';
import movimento from '../../assets/gatilhos/movimento.png';
import ausencia from '../../assets/gatilhos/ausencia.png';

export default function Gatilhos() {
    return (
        <section className="gatilhosSection">

            <div className="gatilhosText">
                <h2 className="gatilhosTitle">Como funcionam os nossos gatilhos?</h2>
                <div className="gatilhosLine"></div>

                <p className="gatilhosDescription">
                    Nosso conjunto de produtos opera com base em três gatilhos principais que
                    garantem a segurança durante o uso do sistema. Cada gatilho identifica uma
                    situação diferente e aciona respostas importantes para evitar riscos.
                </p>
            </div>

            <div className="gatilhosCards">

                <div className="gatilhoItem">
                    <h3>1º Gatilho Peso</h3>
                    <img src={peso} alt="Peso" />
                    <p>Monitorar se há peso</p>
                </div>

                <div className="gatilhoItem">
                    <h3>2º Gatilho Movimento</h3>
                    <img src={movimento} alt="Movimento" />
                    <p>Verificar se há movimento</p>
                </div>

                <div className="gatilhoItem">
                    <h3>3º Gatilho Ausência</h3>
                    <img src={ausencia} alt="Ausência" />
                    <p>Identificar se há ausência do responsável</p>
                </div>

            </div>

        </section>
    );
}
