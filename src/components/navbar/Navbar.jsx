import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <main className="navbar" id="navbar">
      <section className="navbar-banner">
        <span>ENVIO GRATIS A TODO EL PAIS EN COMPRAS SUPERIORES A $10.000</span>
      </section>
      <section className="navbar-main">
        <input type="search" placeholder="Buscar..." />
        <div className="navbar-logo">
          <img src={logo} />
        </div>
        <div className="navbar-tools">
          <div>Cart icon</div>
        </div>
      </section>
      <section className="navbar-menu">
        <ul>
          <li>Todas las categorias</li>
          <li>Perifericos</li>
          <li>Componentes</li>
          <li>Como comprar</li>
          <li>Envios</li>
        </ul>
      </section>
    </main>
  );
};

export default Navbar;
