import { Link } from "react-router-dom";
import "../Css/Inicio.css";
import {MenuHamburguesa} from './SobreNosotros';





// Componente de inicio que renderiza el video de fondo, la barra de navegación y el botón que redirige al recorrido 3D





export const Inicio = () => {
  return (
    <>
      <div className="capa">
      <nav className="ocultar container-menu-content">
        <div className="navegacion">
          <Link className="elemento-barra-navegacion" to="/" id="inicio">
            Inicio
          </Link>
          <Link className="elemento-barra-navegacion" to="/bienestar">
            Bienestar
          </Link>
          <Link className="elemento-barra-navegacion" to="/SobreNosotros">
            Sobre Nosotros
          </Link>
          <Link className="elemento-barra-navegacion" to="/areas">
            Áreas
          </Link>
          <Link className="elemento-barra-navegacion" to="/calendario">
            Calendario
          </Link>
        </div>
        
      </nav>
      </div>
      <MenuHamburguesa />
      <main>
        <div className="contenedor">
          <div className="contenido">
            <div className="imagen">
              <img src="/src/images/logo-blanco.png" alt="" />
            </div>
            <h1>CDITI</h1>
            <h4>
              Centro de diseño e innovación <br />
              tecnológico industrial
            </h4>
            <Link to="/galeria/Piso1">Galeria de Video</Link>
          </div>
        </div>
      </main>
      <video autoPlay loop muted style={{ width: "100%", height: "100vh" }}>
        <source src="/src/videos/cditi.mp4" type="video/mp4" />
      </video>
    </>
  );
};
