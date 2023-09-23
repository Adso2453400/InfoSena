import React, { useState } from 'react';
import '../Css/Video-galleryPisos.css';
import { Link } from 'react-router-dom';
import {Footer} from './SobreNosotros';
import {MenuHamburguesa} from './SobreNosotros';

import video1 from '../videosGaleria/Piso 1/Piso 1.mp4';
import video2 from '../videosGaleria/Piso 2/Piso 2.mp4';
import video3 from '../videosGaleria/Piso 3/Piso 3.mp4';
import video4 from '../videosGaleria/Piso 4/Piso4.mp4';
import video5 from '../videosGaleria/Piso 5/Piso 5.mp4';
import video6 from '../videosGaleria/CDITI/CDITI.mp4';
import video8 from '../videosGaleria/CDITI/UBICACION CDITI.mp4';
import video7 from '../videosGaleria/Exterior/EXTERIOR.mp4';

export const VideoGalleryPisos = () => {
  const [model, setModel] = useState(false);

  let data = [
    {
      id: 1,
      videoUri: video1,
      isLarge: true,
      title: 'Piso 1',
      showButton: true,
      buttonHref: '/galeria', // Add the desired href for button 1
    },
    {
      id: 2,
      videoUri: video2,
      isLarge: true,
      title: 'Piso 2',
      showButton: true,
      buttonHref: '/galeria/piso2', // Add the desired href for button 2
    },
    {
      id: 3,
      videoUri: video3,
      isLarge: true,
      title: 'Piso 3',
      showButton: true,
      buttonHref: '/galeria/piso3', // Add the desired href for button 3
    },
    {
      id: 4,
      videoUri: video4,
      isLarge: true,
      title: 'Piso 4',
      showButton: true,
      buttonHref: '/galeria/piso4', // Add the desired href for button 4
    },
    {
      id: 5,
      videoUri: video5,
      isLarge: true,
      title: 'Piso 5',
      showButton: true,
      buttonHref: '/galeria/piso5', // Add the desired href for button 5
    },
    {
      id: 6,
      videoUri: video6,
      title: 'CDITI',
      showButton: false,
      buttonHref: 'https://example.com/video6', // Add the desired href for button 6
    },
    {
      id: 7,
      videoUri: video7,
      isLarge: true,
      title: 'Zonas exteriores',
      showButton: true,
      buttonHref: '/galeria/piso_Exterior', // Add the desired href for button 7
    },
    {
      id: 8,
      videoUri: video8,
      isLarge: true,
      title:'Cómo llegar al sena',
      buttonHref: 'https://example.com/video8', // Add the desired href for button 8
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

      
        <h1 className="titulo_galeria_pisos" >Galeria virtual</h1>
      <div className="gallery2">
        {data.map((item, index) => {
          return (
            <div className="video-container" key={index}>
                 <h2 className="video-title">{item.title}</h2> {/* Título del video */}
                
              <video
                className="video-element" // Added class for video styling
                autoPlay={model}
                controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
              >
                <source src={item.videoUri} type="video/webm" />
              </video>
              {item.showButton && (
      <a href={item.buttonHref} className={`btn btn-primary btn-${index}`}>
        Ver más
      </a>
    )}
            </div>
          );
        })}
      </div>
      <Footer/>
      <MenuHamburguesa/>
    </>
  );
};

export default VideoGalleryPisos;
