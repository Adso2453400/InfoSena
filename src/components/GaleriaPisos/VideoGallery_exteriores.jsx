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
import video1 from '../../videosGaleria/Exterior/Exterior.mp4';
import video2 from '../../videosGaleria/Exterior/ANDAMIOS.mp4';
import video3 from '../../videosGaleria/Exterior/GIMNASIO.mp4';
import video4 from '../../videosGaleria/Exterior/GIMNASIO,PARQUEADERO.mp4';


export const VideoGallery_exteriores = () => {

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


         <h1 className="titulo-lista-galeria" style={{textAlign: 'left'}}> Lista de videos - Zonas Exteriores</h1>

         {/* Textos */}
         <h3 className="subtitulo-lista1-galeria">Video principal - Zonas Exteriores</h3> 

         <h3 className="subtitulo-lista2">
            Video - Zona de Andamios <br />
            Exterior
        </h3>

        <h3 className="subtitulo-lista3">
            Video - Explicación Gimnasio  <br />
            Exterior
        </h3>

        <h3 className="subtitulo-lista4">
            Video - Gimnasio <br />
            Exterior
        </h3>

        {/* Descripciones */}
            <p className="descripcion1-galeria">En este video podemos Encontrar las zonas exteriores con las que cuenta nuestro centro de formación, las cuales están a disposición de los aprendices para su formación o actividades </p>
            <p className="descripcion2">En este video podemos conocer el área de Andamios de la parte exterior del centro donde los aprendices pueden capacitarse en cursos de alturas haciendo uso de estas zonas.</p>
            <p className="descripcion3">En este video podemos conocer Mas la zona del gimnasio la cual esta a disposición de los aprendices por medio de una Explicación detallada.</p>
            <p className="descripcion4">En este video podemos Conocer mas los articulos deportivos con los que cuenta la zona de gimnasio de nuestro centro</p>



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

export default VideoGallery_exteriores;