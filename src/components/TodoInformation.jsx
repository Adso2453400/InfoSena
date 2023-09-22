import '/src/Css/TodoInformation.css';

// Componente que recibe props del componente Tecnico y las renderiza, se modifican los estilos directamente en el elemento por problema de compatibilidad
function TodoInformation(props) {
    return (
        <div className='texto-tecnicos'>
          <b><p className='texto-tecnicos__title'>{props.tituloPrograma}</p></b>
          <p className='texto-tecnicos__parrafo'>{props.descripcionPrograma}</p><br></br>
          <p className='texto-tecnicos__parrafo'>Duración: {props.duracion}</p><br></br>
          <p className='texto-tecnicos__parrafo'>Jornada: {props.jornada}</p>
        </div>
    );
  }

  // function TodoInformationMobile(props_mobile) {
  //   return (
  //     <ul className='texto-tecnicos'>
  //       <ul className='texto-tecnicos'>
  //         <h1 style={{ color: 'white', fontSize: '2.5vw', textAlign: 'center', marginBottom: '4rem', marginTop: '4.5rem' }}>{props.tituloPrograma}</h1>
  //         <p style={{ fontSize: '1.25vw', textAlign: 'center', marginBottom: '4rem' }}>{props.descripcionPrograma}</p>
  //         <p style={{ fontSize: '1.25vw', textAlign: 'center', marginBottom: '4rem' }}>Duración: {props.duracion}</p>
  //         <p style={{ fontSize: '1.25vw', textAlign: 'center' }}>Jornada: {props.jornada}</p>
  //       </ul>
  //     </ul>
  //   );
  // }

  // Exportamos el componente
  export { TodoInformation };
  // export { TodoInformationMobile };