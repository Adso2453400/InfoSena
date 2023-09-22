import { useRouteError } from "react-router-dom";
import '../Css/Error.css'
// Componente de error en caso de que la ruta ingresada no exista o no se encuentre
export const ErrorPage = () => {
    const error = useRouteError();
  
    return (
      <div className="contenedor">
        <div id="error-page">
          <h1>Vaya!</h1>
          <p>Lo sentimos, no se ha encontrado la ruta especificada.</p>
          <p>
            <i>{error.statusText || error.message}</i>
          </p>
        </div>
      </div>
    );
  }