import React, { useState, useEffect } from 'react';
import './Carrossel.css';

import img1 from '../../assets/carrossel/1.jpg';
import img2 from '../../assets/carrossel/2.jpg';
import img3 from '../../assets/carrossel/3.jpg';

import setaEsquerda from '../../assets/carrossel/seta e.png';
import setaDireita from '../../assets/carrossel/seta d.png';

const imagens = [img1, img2, img3];

export default function Carrossel() {
  const [indiceAtual, setIndiceAtual] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndiceAtual((prev) => (prev + 1) % imagens.length);
    }, 3000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="carrossel">
      <img
        src={imagens[indiceAtual]}
        alt={`Slide ${indiceAtual + 1}`}
        className="imagem"
      />

      <div
        className="setaDireita"
        onClick={() =>
          setIndiceAtual((prev) => (prev - 1 + imagens.length) % imagens.length)
        }
      >
        <img src={setaEsquerda} alt="Anterior" />
      </div>

      <div
        className="setaEsquerda"
        onClick={() => setIndiceAtual((prev) => (prev + 1) % imagens.length)}
      >
        <img src={setaDireita} alt="Próxima" />
      </div>

    </div>
  );
}