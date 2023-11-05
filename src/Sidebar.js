import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="profile">
        <img src="https://via.placeholder.com/50" alt="Foto de Perfil" />
        <p className ="usuario">Nome do Usuário</p>
      </div>
      <div className="info">
        <p className="info-item">Login do Usuário</p>
        <p className="info-item">Email</p>
        <p className="info-item">Endereço</p>
      </div>
      <ul>
        <li className="alterar-dados">Alterar Dados</li>
      </ul>
    </div>
  );
}

export default Sidebar;




