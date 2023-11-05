import React from 'react';
import Sidebar from './Sidebar';
import Content from './Content';
import './App.css';

function App() {
  return (
    <div className="container">
      <Sidebar>
        <h1>Título 1 - Sidebar</h1>
      </Sidebar>
      <div className="conteudo" style={{ marginLeft: '250px' }}>
        <h1>Título 1 - Conteúdo</h1>
        <h2>Título do Conteúdo 1</h2>
        <Content descricao="Descrição do conteúdo 1..." />
        <h2>Título do Conteúdo 2</h2>
        <Content descricao="Descrição do conteúdo 2..." />
        <h2>Título do Conteúdo 3</h2>
        <Content descricao="Descrição do conteúdo 3..." />
        <h2>Título do Conteúdo 4</h2>
        <Content descricao="Descrição do conteúdo 4..." />
      </div>
    </div>
  );
}

export default App;


