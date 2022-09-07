import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../footer/Footer";
import Header from "../header/Header";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <main>
        <section>
          <h2>Mas vendidos</h2>
          <div>Productos</div>
        </section>
        <section>
          <h2>Ofertas especiales</h2>
          <div>Productos</div>
        </section>
        <section>
          <h2>Categorias populares</h2>
          <div>categorias</div>
        </section>
        <section>
          <h2>Contacto</h2>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Homepage;
