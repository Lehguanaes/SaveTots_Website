import Carrossel from '../../components/carrossel/Carrossel.jsx';
import Gatilhos from '../../components/sections/Gatilhos.jsx';

// IMPORTANDO SUAS IMAGENS
import fotoPet from '../../assets/home/fotopet.png';
import fotoChaveiro from '../../assets/home/fotoChaveiro.png';
import fotoCuidadora from '../../assets/home/fotoCuidadora.png';

import styles from './Home.module.css';

export default function Home() {
  return (
    <div>
      <Carrossel />
      <Gatilhos />

      {/* SEÇÃO DAS FOTOS COM TEXTO */}
      <div className={styles.cardsWrapper}>

        {/* CARD GRANDE DO CHAVEIRO */}
        <div className={styles.cardGrande}>
          <img src={fotoChaveiro} alt="Chaveiro SaveTots" className={styles.imgGrande}/>
          <p>
            O SaveTots foi projetado para ser o seu maior aliado na segurança da sua criança,
            trazendo praticidade, leveza e um alerta rápido em situações de risco.
          </p>
        </div>

        {/* LINHA COM DOIS CARDS (PET E CUIDADORA) */}
        <div className={styles.cardLinhaBaixo}>

          {/* CARD DO PET */}
          <div className={styles.card}>
            <img src={fotoPet} alt="Pet seguro no transporte" />
            <p>
              Com o SaveTots, seu animalzinho fica seguro durante todo o transporte veicular, 
              garantindo conforto e proteção para os seus melhores amigos.
            </p>
          </div>

          {/* CARD DA CUIDADORA */}
          <div className={styles.card}>
            <img src={fotoCuidadora} alt="Cuidadora com SaveTots" />
            <p>
              Pensado também para cuidadores: o SaveTots facilita o dia a dia de quem é responsável
              pelo bem-estar das crianças, oferecendo mais segurança e tranquilidade.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
