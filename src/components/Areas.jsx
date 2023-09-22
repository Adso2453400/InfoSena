import {React, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import "../Css/Areas.css";
import { ErrorPage } from "../components/ErrorRuta";
import {MenuHamburguesa} from './SobreNosotros';
import Traductor from './Translate'

// Este es el arreglo de datos ficticio que contiene todas las áreas disponibles, su propiedad link es la que uso para redirigir a la ruta deseada, por medio de Link de react-router-dom
const areas = [];
export const Areas = () => {
  // creamos el arreglo de datos vacío y el modificador del arreglo haciendo uso del hook useState(), un hook es una función predeterminada de react
  const [dataAreas, setDataAreas] = useState([]);


  // En este bloque consumimos la api y hacemos que se renderice automáticamente cuando cambie la información dentro de dataAreas
   useEffect(() => {
     const getData = async () => {
       const url = `https://santiporres.softkra.com/areas/`;   //AQUÍ SE DEBE PONER LA URL DE LA API CON EL ENDPOINT DE AREAS ej: www.info-sena.com/areas/
       const resp = await fetch(url);
       const data = await resp.json();
       return setDataAreas(data);
     };
     getData();
   }, [dataAreas]);

  return (
    <>

    <div className="imagen-fondo-areas">


{/* Esta es la barra de navegación, que la reutilizamos en varios componentes */}
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

      <div className="contenido-areas">
        <div className="imagen-cabecero-areas">
          <img src="/src/images/logo-verde.png" alt="logo-verde-areas"/>
        </div>
        <div className="cabecero-derecha">
          <h1 className="titulo-cabecero-areas">Áreas de Formación</h1>
          <h4 className="subtitulo-cabecero-areas">
            Centro de diseño e innovación <br />
            tecnológico industrial
          </h4>
        </div>
      </div>

      <div id="contenedor-padre">
        {/* Recorremos el arreglo de areas sacado de la api y renderizamos sus propiedades */}
        {dataAreas.map(({ id, title, image, link }) => {
          return (
            <div key={id} className="area">
              <img src={image} alt="imagen-area" className="imagen-area" />
              <p className="titulo-area">{title}</p>
              <Link to={`${link}`} className="enlace-areas">
                Ver más
              </Link>
            </div>
          );
        })}
      </div>
      <MenuHamburguesa/>
    </div>

        
      
    </>
  );
};
