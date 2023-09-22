import { useParams, Link } from "react-router-dom";
import "/src/Css/Tecnologo.css";

// Componente de Tecnologo que recibe como parámetro el programa que se filtró en componente Programa y se usa para crear la interfaz
export const Tecnologo = ({ programa }) => {

  if (!programa) {
    return <div>Área no encontrada</div>;
  }

  return (
    <>
      <div className="contenedor-padre-tecnologo">
        <header className="header-tecnologo">
          {/* en todas las secciones donde se vea programa.propiedad, indica que se está accediendo a las propiedades del programa que se recibió por props */}
          <div key={programa.tituloFiltrado}>
            <Link to={`/areas/${programa.area}`}>
              <span className="material-symbols-outlined flecha-volver-atras-tecnologo">
                arrow_back
              </span>
            </Link>
            <h1 className="tipo-tecnologo">{programa.tipoPrograma}</h1>
            <h2 className="titulo-tecnologo">{programa.tituloPrograma}</h2>
            <div className="contenedor-descripcion-programa-centrado">
              <p className="descripcion-programa-tecnologo">
                {programa.descripcionPrograma}
              </p>
            </div>

            <a
              className="inscribirse-tecnologo"
              target="_blank"
              href="https://oferta.senasofiaplus.edu.co/sofia-oferta/"
            >
              INSCRIBIRSE
            </a>

            <div className="imagenes">
              {programa.imagenes.map((imagen, index) => (
                <div key={index}>
                  <img
                    className="Imagen1"
                    src={imagen.srcImagen1}
                    alt={`Imagen ${index + 1} de programa`}
                  />
                  <img
                    className="Imagen2"
                    src={imagen.srcImagen2}
                    alt={`Imagen2`}
                  />
                </div>
              ))}
            </div>
          </div>
        </header>
      </div>
    </>
  );
};
