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
import video1 from '../../videosGaleria/Piso 3/PISO 3.mp4';
import video2 from '../../videosGaleria/Piso 3/AUTOMOTRIZ.mp4';
import video3 from '../../videosGaleria/Piso 3/INFRAESTRUCTURA.mp4';
import video4 from '../../videosGaleria/Piso 3/POLIVALENTES.mp4';


export const VideoGallery3 = () => {

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


         <h1 className="titulo-lista-galeria" style={{textAlign: 'left'}}> Lista de videos - Piso 3</h1>

         {/* Textos */}
         <h3 className="subtitulo-lista1-galeria">Video principal - piso 3</h3> 

         <h3 className="subtitulo-lista2">
            Video - Automotriz <br />
            Piso 3
        </h3>

        <h3 className="subtitulo-lista3">
            Video - Infraestructura <br />
            Piso 3
        </h3>

        <h3 className="subtitulo-lista4">
            Video - Polivalentes <br />
            Piso 3
        </h3>


        {/* Descripciones */}
            <p className="descripcion1-galeria">En este video podemos conocer todos los ambientes del piso 3 de nuestro centro,las polivalentes, la cafeteria, la plazoleta y nuestros paneles solares.</p>
            <p className="descripcion2">En este video podemos conocer un poco mas sobre las zonas polivalentes del centro y el programa de analisis y desarrollo de software que se oferta en nuestro centro. </p>
            <p className="descripcion3">En este video podemos conocer un poco mas sobre el programa de implementacion de infraestructura TIC que se oferta en nuestro centro. </p>
            <p className="descripcion4">En este video podemos conocer un poco mas sobre las zonas polivalentes del centro y el programa de analisis y desarrollo de software que se oferta en nuestro centro.</p>
 


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

export default VideoGallery3;