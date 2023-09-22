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
import logosena from '../../Iconos/Logo-sena.png'

//Importar videos e imagenes
import video1 from '../../videosGaleria/Piso 1/Piso 1.mp4';
import video2 from '../../videosGaleria/Piso 1/Agencia publica de empleo.mp4';
import video3 from '../../videosGaleria/Piso 1/FONDO EMPRENDER .mp4';



export const VideoGallery = () => {

    const [model, setModel] = useState(false);

    let data = [
        {
            id: 1,
            // poster: img1,
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


         <h1 className="titulo-lista-galeria" style={{textAlign: 'left'}}> Lista de videos - Piso 1</h1>

         {/* Textos */}
         <h3 className="subtitulo-lista1-galeria">Video principal - piso 1</h3> 

         <h3 className="subtitulo-lista2">
            Video - Agencia Pública de Empleo <br />
            Piso 1
        </h3>

        <h3 className="subtitulo-lista3">
            Video - Fondo Emprender <br />
            Piso 1
        </h3>


        {/* Descripciones */}
            <p className="descripcion1-galeria">En el piso uno encontramos oficinas para administrar los programas de formación, información sobre los aprendices y mecanismos de apoyo para ellos  fondo emprender y fabrica de software , la capilla, el auditorio, administración educativa  y  coordinación académica</p>
            <p className="descripcion2">En este video podemos encontrar los mecanismos que el sena ofrece para conseguir empleo para sus egresados y aprendices por medio de la pagina ape.sena.edu.co</p>
            <p className="descripcion3">En este video podemos encontrar la explicacion sobre el fondo emprender 
sus objetivos, tareas, mecanismos y procesos para identificar los emprendimientos y 
hacer el debido asesoramiento y acompañamiento para que este sea exitoso. </p>



         {/* Icnonos de reproduccion */}
        <img src={pauseIcon2} alt="Pausa" className="pause-icon1" />
        <img src={pauseIcon} alt="Pausa" className="pause-icon2" />
        <img src={pauseIcon} alt="Pausa" className="pause-icon3" />


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

export default VideoGallery;