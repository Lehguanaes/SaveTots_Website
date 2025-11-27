import React from 'react';
import { FaGithub } from "react-icons/fa"; 
import styles from "./SobreNos.module.css";

import jovanaImg from '../../assets/sobrenos/dev_jovana.jpg';
import karinneImg from '../../assets/sobrenos/dev_karinne.jpg';
import leticiaImg from '../../assets/sobrenos/dev_leticia.jpg';
import mariaImg from '../../assets/sobrenos/dev_maria.jpg';
import fotoGrupoJuntas from '../../assets/sobrenos/desenvolvedoras.jpg';

export default function SobreNos() {
  const desenvolvedoras = [
    { img: jovanaImg, nome: 'Jovana Oliveira', github: 'J0vana23' },
    { img: karinneImg, nome: 'Karinne Angelo', github: 'Kakventura' },
    { img: leticiaImg, nome: 'Letícia Guanaes', github: 'Lehguanaes' },
    { img: mariaImg, nome: 'Maria Monteiro', github: 'MaariaMonteiro' },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.fundadores}>
        
        <h3 className={styles.subtitulo}>Qual o propósito do projeto?</h3>

        {/* FOTO + TEXTO LADO A LADO */}
        <div className={styles.fotoGrupoWrapper}>
          <img
            src={fotoGrupoJuntas}
            alt="Foto das fundadoras juntas"
            className={styles.fotoGrupoImg}
          />

          <p className={styles.fotoGrupoTexto}>
            O SaveTots nasceu com o propósito de proteger vidas e trazer mais tranquilidade a pais e tutores.
            Nossa missão é desenvolver tecnologias acessíveis, eficientes e confiáveis.
          </p>
        </div>

        {/* CARDS DAS DESENVOLVEDORAS */}
        <div className={styles.cardContainer}>
          {desenvolvedoras.map((dev, index) => (
            <div key={index} className={styles.card}>
              <img src={dev.img} alt={dev.nome} className={styles.cardImg} />
              <h4 className={styles.cardTitle}>{dev.nome}</h4>

              <a
                href={`https://github.com/${dev.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.githubLink}
              >
                <FaGithub className={styles.githubIcon} />
                @{dev.github}
              </a>
            </div>
          ))}
        </div>

        {/* CONTATO FINAL */}
        <p className={styles.contato}>
          Quer saber mais informações sobre o projeto?
          <a 
            href="mailto:savetotsiot@gmail.com" 
            className={styles.emailLink}
          >
            savetotsiot@gmail.com
          </a>
        </p>

      </div>
    </div>
  );
}
