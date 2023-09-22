import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {Footer} from '../SobreNosotros';
import {MenuHamburguesa} from '../SobreNosotros';

//Reproductor de video
import { P, DefaultPlayer as video } from 'react-html5video';
import 'react-html5video/dist/styles.css';

//CSS
import '../../Css/Video-gallery.css'; 

// Icono pausa
import pauseIcon from '../../Iconos/Icono-reproducir-azul.png';
import pauseIcon2 from '../../Iconos/Icono-reproducir-verde.png';


//Importar videos e imagenes
import video1 from '../../videosGaleria/Piso 4/Piso4.mp4';
import video2 from '../../videosGaleria/Piso 4/BIENESTAR.mp4';
import video3 from '../../videosGaleria/Piso 4/PSICOLOGIA.mp4';
import video4 from '../../videosGaleria/Piso 4/SIMULADORES.mp4';


export const VideoGallery4 = () => {

    const [model, setModel] = useState(false);

    let data = [
        {
            id: 1,
            videoUri: video1,
            isLarge: true, // Marcar el primer video como grande
        },

        {
            id: 2,
            videoUri: video2,
            isLarge: true, // Marcar el primer video como grande
        },

        {
            id: 3,
            videoUri: video3,
            isLarge: true, // Marcar el primer video como grande
        },

        {
            id: 4,
            videoUri: video4,
            isLarge: true, // Marcar el primer video como grande
        }, 

    ];



    return (
        <>
        {/* BARRA DE NAVEGACIÓN */}
        <header className="container-menu">
            <nav>
                <div className="navegacion-areas margen-nav">
                <Link to="/">Inicio</Link>
                <Link to="/bienestar">Bienestar</Link>
                <Link to="/SobreNosotros">Sobre Nosotros</Link>
                <Link to="/areas">Áreas</Link>
                <Link to="/calendario">Calendario</Link>
                </div>
            </nav>
        </header>


         <h1 className="titulo-lista-galeria" style={{textAlign: 'left'}}> Lista de videos - Piso 4</h1>

         {/* Textos */}
         <h3 className="subtitulo-lista1-galeria">Video principal - piso 4</h3> 

         <h3 className="subtitulo-lista2">
            Video - Bienestar al Aprendiz <br />
            Piso 4
        </h3>

        <h3 className="subtitulo-lista3">
            Video - Psicología <br />
            Piso 4
        </h3>

        <h3 className="subtitulo-lista4">
            Video - Simuladores <br />
            Piso 4
        </h3>

        {/* Descripciones */}
            <p className="descripcion1-galeria">En este video podemos observar el piso 4 podemos encontrar ambientes de formacion para los aprendices y observar de las herramientas disponibles para su formacion, el taller donde se realizan los carnets, oficina de bienestar al aprendiz y la enfermeria </p>
            <p className="descripcion2">En este video podemos conocer el área de bienestar al aprendiz del centro y sus servicios.</p>
            <p className="descripcion3">En este video podemos conocer el area de psicologia del centro y sus servicios.</p>
            <p className="descripcion4">En este video podemos encontrar las herramientas de simulacion de las que dispone el centro para familiarizar a los aprendices con las maquinas y ofrecer una formacion de excelente calidad</p>



         {/* Icnonos de reproduccion */}
        <img src={pauseIcon2} alt="Pausa" className="pause-icon1" />
        <img src={pauseIcon} alt="Pausa" className="pause-icon2" />
        <img src={pauseIcon} alt="Pausa" className="pause-icon3" />
        <img src={pauseIcon} alt="Pausa" className="pause-icon4" />


        <div className="gallery">
            {data.map((item, index)=>{
                return(
                    <div className="video" key={index}>
                        <div className="video-container">
                            <video 
                                style={{width: item.isLarge ? '400px' : '200px', // Ajusta el tamaño aquí
                                height: item.isLarge ? '300px' : '150px',}}
                                autoplay={model}
                                controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
                                // poster={item.poster}
                            >
                                <source src={item.videoUri} type="video/webm" />
                            </video>

                            <div className="video-line"></div> {/* Línea debajo de cada video */}

                        </div>
                    </div>
                )
            })}

         </div>
         <Footer/>
         <MenuHamburguesa/>
        </>
    )
}

export default VideoGallery4;