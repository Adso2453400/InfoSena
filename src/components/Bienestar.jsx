import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Css/Bienestar.css";
import { Slider } from "../components/Slider";
import {Footer} from './SobreNosotros';
import {MenuHamburguesa} from './SobreNosotros';

//Traductor
import Traductor from './Translate'

export const Bienestar = () => {
  // Creamos dos variables booleanas para utilizar de auxiliares en los botones "ver más" o lightbox, los definimos en false para que no se activen por defecto, los creamos con el hook useState()
  const [lightboxVisible, setLightboxVisible] = useState(false);
  const [lightboxVisible2, setLightboxVisible2] = useState(false);

  // Creamos las funciones para mpodificar su estado por medio de los setters y que se rendericen los lightbox
  const abrirLightbox = () => {
    setLightboxVisible(true);
  };

  const cerrarLightbox = () => {
    setLightboxVisible(false);
  };
  const abrirLightbox2 = () => {
    setLightboxVisible2(true);
  };

  const cerrarLightbox2 = () => {
    setLightboxVisible2(false);
  };

  

  return (
    <>
      {/* BARRA DE NAVEGACIÓN */}
      <header className="container-menu">
        <nav className="container-menu-content">
          <div className="navegacion-areas margen-nav">
            <Link to="/">Inicio</Link>
            <Link to="/bienestar">Bienestar</Link>
            <Link to="/SobreNosotros">Sobre Nosotros</Link>
            <Link to="/areas">Áreas</Link>
            <Link to="/calendario">Calendario</Link>
          </div>
          <Traductor/>
        </nav>
      </header>

      {/* SECCION MAIN DE LA PÁGINA (CABECERO) */}
      <section>
        <div className="contenedor-padre-bienestar">
          <div className="contenedor-bienestar">
            <div className="imagen1-bienestar">
              <img src="/src/images/bienestar-header.png" alt="" />
            </div>
            <h1 className="titulo-bienestar">
              BIENVENID@S A <br /> BIENESTAR AL <br /> APRENDIZ
            </h1>
          </div>
        </div>
      </section>

      {/* SECCION DE ENFERMERIA */}
      <section>
        <div className="contenedor-bienestar-seccion-2">
          <div className="parte-izquierda-bienestar">
            <div className="titulo-seccion-2-container">
              <h1 className="titulo-seccion-2">
              Es una estrategia institucional para contribuir en la permanencia y el desempeño exitoso de los aprendices de la entidad en su proceso formativo con enfoque territorial y diferencial.
              </h1>
            </div>
            <a
              href="#"
              className="boton-lightbox-seccion-2"
              id="abrirLightbox"
              onClick={(e) => {
                // Aquí activamos la función para que se abra la franja de información adicional de enfermeria y usamos el e.preventDefault para impedir que se actualice la página de manera automática al darle click
                e.preventDefault();
                abrirLightbox();
              }}
            >
              Ver más
            </a>
          </div>
          <div className="imagen-2-bienestar">
            <img className="imagen-bienestar-enfermeria" src="/src/images/bienestar-enfermeria.png" alt="" />
          </div>
        </div>

{/* Esto es lo que se va a mostrar cuando la variable auxiliar cambie a true */}
        {lightboxVisible && (
          <div className="lightbox-mostrado">
            <div className="contenido-lightbox-mostrado">
              <div className="cabecero-lightbox">
                <h2 className="titulo-lightbox">MÁS INFORMACIÓN:</h2>
                <span
                  className="material-symbols-outlined cerrar-lightbox"
                  onClick={cerrarLightbox}
                >
                  close
                </span>
              </div>
              <div className="texto-imagen-lightbox">
                <p className="texto-lightbox-2">
                Contribuir al desarrollo humano integral de los aprendices, por medio de la definición de lineamientos que se implementen de manera articulada y gradual con el proceso de formación profesional integral, con el fin de fortalecer la cultura de bienestar entre los aprendices y la comunidad educativa.
                </p>
                <img
                  className="imagen-lightbox-directivas"
                  src="/src/images/lightbox-enfermeria.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        )}
      </section>

      <section>
        <div className="contenedor-padre-bienestar-seccion-3">
          <div className="circulo-container">
            <div className="circulo circulo-1">
              <img src="/src/images/img2.jpeg" alt="Image 1" />
            </div>
            <div className="circulo circulo-2">
              <img src="/src/images/img2.jpeg" alt="Image 2" />
            </div>
            <div className="circulo circulo-3">
              <img src="/src/images/img1.jpeg" alt="Image 3" />
            </div>
            <div className="circulo circulo-4">
              <img src="/src/images/img4.jpeg" alt="Image 4" />
            </div>
          </div>
          <div className="parte-izquierda-bienestar">
            <div className="titulo-seccion-2-container">
              <h1 className="titulo-seccion-2">
              De acuerdo con las normas y apartes vigentes de la Ley 119 de 1994 y el Decreto 249 de 2004 (Modificado parcialmente por el Decreto 2520 de 2013), la “Estructura Formal” que tiene actualmente el SENA para el desarrollo de sus funciones
              </h1>
            </div>
            <a
              href="#"
              className="boton-lightbox-seccion-2"
              id="abrirLightbox-2"
              onClick={(e) => {
                  // Aquí activamos la función para que se abra la franja de información adicional de directivas y usamos el e.preventDefault para impedir que se actualice la página de manera automática al darle click
                e.preventDefault();
                abrirLightbox2();
              }}
            >
              Ver más
            </a>
          </div>
        </div>

        {/* LIGHTBOX DE LA PARTE DE ABAJO DE LA PARTE DE DIRECTIVAS */}
        {lightboxVisible2 && (
          <div className="lightbox-mostrado">
            <div className="contenido-lightbox-mostrado">
              <div className="cabecero-lightbox">
                <h2 className="titulo-lightbox">MÁS INFORMACIÓN:</h2>
                <span
                  className="material-symbols-outlined cerrar-lightbox"
                  onClick={cerrarLightbox2}
                >
                  close
                </span>
              </div>
              <div className="texto-imagen-lightbox">
                <p className="texto-lightbox-2">
                Con respecto al círculo incorporado en la estructura organizativa, se requiere modificar en el sentido que, el Consejo Regional o Distrital, deberá quedar con la línea horizontal de
autoridad y desaparecer la línea de asesor como aparece en la gráfica anterior; teniendo en
cuenta lo establecido en la “Ley 119 de 1994 Artículo 16. Dirección y Administración
Regional. La Dirección y Administración de las regionales de la Entidad estará a cargo de un
consejo regional y un director regional”.
                </p>
                <img
                  className="imagen-lightbox-directivas"
                  src="/src/images/lightbox-directivas.jpeg"
                  alt=""
                />
              </div>
            </div>
          </div>
        )}
      </section>

   
      <Footer/>
      <MenuHamburguesa/>
    </>
  );
};
