import Carrossel from '../../components/carrossel/Carrossel.jsx';
import Gatilhos from '../../components/sections/Gatilhos.jsx';

import fotoPet from '../../assets/home/fotopet.jpg';
import fotoChaveiro from '../../assets/home/fotoChaveiro.png';
import fotoCuidadora from '../../assets/home/fotoCuidadora.png';

import styles from './Home.module.css';

export default function Home() {
  return (
    <div>
      <Carrossel />
      <Gatilhos />

      {/* IMAGENS SEPARADAS COM CLASSES INDIVIDUAIS */}
      <section className={styles.gallery}>

        <div className={`${styles.item} ${styles.itemChaveiro}`}>
          <img src={fotoChaveiro} alt="Chaveiro SaveTots" className={styles.imgChaveiro}/>
          <p>
            O SaveTots foi projetado para ser pratico e eficiente.
          </p>
        </div>

        <div className={`${styles.item} ${styles.itemPet}`}>
          <img src={fotoPet} alt="Pet seguro no transporte" className={styles.imgPet}/>
          <p>
          Além da segurança, o SaveTots traz conforto e proteção para os seus melhores amigos.
          </p>
        </div>

        <div className={`${styles.item} ${styles.itemCuidadora}`}>
          <img src={fotoCuidadora} alt="Cuidadora com SaveTots" className={styles.imgCuidadora}/>
          <p>
            Pensado também para cuidadores: o dispositivo facilita o dia a dia de quem é responsável.
          </p>
        </div>

      </section>
    </div>
  );
}
