import React from 'react';
import './Content.css';

function Content() {
  return (
    <div className="content-container">
      <div className="content-item">
        <h2>Título do Conteúdo 1</h2>
        <p>Descrição do conteúdo 1...</p>
        <button className="ver-mais">Ver Mais</button>
      </div>
      <div className="content-item">
        <h2>Título do Conteúdo 2</h2>
        <p>Descrição do conteúdo 2...</p>
        <button className="ver-mais">Ver Mais</button>
      </div>
      <div className="item">
        <h2>Título do Conteúdo 3</h2>
        <p>Descrição do conteúdo 3...</p>
        <button className="ver-mais">Ver Mais</button>
      </div>
      <div className="item">
        <h2>Título do Conteúdo 4</h2>
        <p>Descrição do conteúdo 4...</p>
        <button className="ver-mais">Ver Mais</button>
      </div>
      <div className="item01">
        <h2>Título do Conteúdo 5</h2>
        <p>Descrição do conteúdo 5...</p>
        <button className="ver-mais">Ver Mais</button>
      </div>
    </div>
  );
}

export default Content;
