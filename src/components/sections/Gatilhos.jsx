import './Sections.css';
import peso from '../../assets/gatilhos/peso.png';
import movimento  from '../../assets/gatilhos/movimento.png';
import ausencia from '../../assets/gatilhos/ausencia.png';

export default function Gatilhos() {
    return ( 
        <div className="cardsSection">

            <h1 className="mainTitle">
                Nosso conjunto de produtos funcionam com base em três gatilhos:
            </h1>

            <div className="card">
                <h3 className="stepTitle">1° GATILHO</h3>
                <img src={peso} className="cardImg" />
                <p className="description">Monitorar se há peso..</p>
            </div>

            <div className="card">
                <h3 className="stepTitle">2° GATILHO</h3>
                <img src={movimento} className="cardImg" />
                <p className="description">Verificar se há movimento.</p>
            </div>

            <div className="card">
                <h3 className="stepTitle">3° GATILHO</h3>
                <img src={ausencia} className="cardImg" />
                <p className="description">Identificar se há ausencia do responsável.</p>
            </div>

        </div>
    );
}