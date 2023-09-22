import React from 'react';
import { useParams, Link } from "react-router-dom";
import { TodoList } from '../components/TodoList';
import { TodoInformation} from '../components/TodoInformation';
import '/src/Css/Tecnico.css';


// Este es el componente de Tecnico, que recibe por medio de props el programa filtrado y que se usa para renderizar la información del programa en específico
export const Tecnico = ({ programa }) => {

  return (
    <div className="programa-tecnico-container">
      <div className="contenedor-imagenFondo">
        <div className="imagenFondo" style={{ backgroundImage: `url(${programa.imagenFondo})`}}/>
        <div className="triangulo-inclinado">
        <Link to={`/areas/${programa.area}`}>
              <span className="material-symbols-outlined flecha-volver-atras">
                arrow_back
              </span>
            </Link>
          {/* Aquí usamos otros dos subcomponentes para renderizar la información de los programas técnicos */}
          <TodoList>
          </TodoList>
            <TodoInformation
              tituloPrograma={programa.tituloPrograma}
              descripcionPrograma={programa.descripcionPrograma}
              duracion={programa.duracion}
              jornada={programa.jornada}
            />
          
        </div>
      </div>
      <div className="triangulo-inclinado-2" />
      <div className="esquina-inferior-derecha" />{/* Esquina verde */}
      <div className="esquina-inferior-derecha-transparencia" />{/* Esquina transparente */}
      <div className='contenedor-buttom'>
        <button className='buttom-inscribirse'>INSCRIBIRSE</button> 
      </div>
      <div className="flecha_mobile">
        <Link to={`/areas/${programa.area}`}>
              <span className="material-symbols-outlined flecha-volver-atras">
                arrow_back
              </span>
            </Link>
            </div>
      <div className='esquina-superior-mobile'></div>
      <div className='esquina-superior-transparente-mobile'></div>
      <div className='conteiner-oculto'><TodoInformation
        tituloPrograma={programa.tituloPrograma}
        descripcionPrograma={programa.descripcionPrograma}
        duracion={programa.duracion}
        jornada={programa.jornada}
      /></div>
    </div>
    
  );
}


