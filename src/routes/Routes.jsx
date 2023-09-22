import { createBrowserRouter } from "react-router-dom";
import { Areas } from "../components/Areas";
import { Inicio } from "../components/Inicio";
import { ErrorPage } from "../components/ErrorRuta";
import {Bienestar} from '../components/Bienestar';
import {Area} from '../components/Area';
import {Programa} from '../components/Programa';
import {Tecnico} from '../components/Tecnico';
import { VideoGallery } from '../components/GaleriaPisos/VideoGallery';
import { VideoGallery2 } from '../components/GaleriaPisos/VideoGallery2';
import { VideoGallery3 } from '../components/GaleriaPisos/VideoGallery3';
import { VideoGallery4 } from '../components/GaleriaPisos/VideoGallery4';
import { VideoGallery5 } from '../components/GaleriaPisos/VideoGallery5';
import { VideoGallery_exteriores } from '../components/GaleriaPisos/VideoGallery_exteriores';
import { VideoGalleryPisos } from '../components/VideoGalleryPisos';
import {Nosotros} from '../components/SobreNosotros';
import { Calendario } from "../components/Calendario";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/areas",
    element: <Areas />,
  },
  {
    path : "/bienestar",
    element : <Bienestar/>
  },
  {
    path: "/areas/:nombreArea",
    element: <Area />,
  },
  {
    path : "/areas/:nombreArea/:nombrePrograma",
    element : <Programa/>
  },
  {
    path:"/SobreNosotros",
    element:<Nosotros/>
  },
  {
    path: "/galeria",
    element: <VideoGallery/>, 
  },
  {
    path: "/galeria/Piso1",
    element: <VideoGalleryPisos/>, 
  },
  {
    path: "/calendario",
    element: <Calendario/>,
  },
  {
    path: "/galeria/piso2",
    element: <VideoGallery2/>,
  },
  {
    path: "/galeria/piso3",
    element: <VideoGallery3/>,
  },

  {
    path: "/galeria/piso4",
    element: <VideoGallery4/>,
  },

  {
    path: "/galeria/piso5",
    element: <VideoGallery5/>,
  },
  
  {
    path: "/galeria/piso_Exterior",
    element: <VideoGallery_exteriores/>,
  },

]);
