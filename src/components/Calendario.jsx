import React, { useEffect, useState, useRef  } from "react";
import { Link } from "react-router-dom";
import "../Css/Calendario.css";
import {Footer} from './SobreNosotros';
import image from '../images/abril_1.jpeg';
import {MenuHamburguesa} from './SobreNosotros';
import Traductor from './Translate';

export const Calendario = () => {
{/* Lightbox - Componentes */}
const [lightboxVisible, setLightboxVisible] = useState(false);
const [lightboxVisible2, setLightboxVisible2] = useState(false);
const [lightboxVisible3, setLightboxVisible3] = useState(false);
const [lightboxVisible4, setLightboxVisible4] = useState(false);
const [lightboxVisible5, setLightboxVisible5] = useState(false);
const [lightboxVisible6, setLightboxVisible6] = useState(false);
const [lightboxVisible7, setLightboxVisible7] = useState(false);
const [lightboxVisible8, setLightboxVisible8] = useState(false);
const [lightboxVisible9, setLightboxVisible9] = useState(false);


const abrirLightbox = () => {
    setLightboxVisible(true);
};
const cerrarLightbox = () => {
    setLightboxVisible(false);
};
const abrirLightbox2 = () => {
    setLightboxVisible2(true);
};
const cerrarLightbox2 = () => {
    setLightboxVisible2(false);
};
const abrirLightbox3 = () => {
    setLightboxVisible3(true);
};
const cerrarLightbox3 = () => {
    setLightboxVisible3(false);
};
const abrirLightbox4 = () => {
    setLightboxVisible4(true);
};
const cerrarLightbox4 = () => {
    setLightboxVisible4(false);
};
const abrirLightbox5 = () => {
    setLightboxVisible5(true);
};
const cerrarLightbox5 = () => {
    setLightboxVisible5(false);
};
const abrirLightbox6 = () => {
    setLightboxVisible6(true);
};
const cerrarLightbox6 = () => {
    setLightboxVisible6(false);
};

const abrirLightbox7 = () => {
    setLightboxVisible7(true);
};
const cerrarLightbox7 = () => {
    setLightboxVisible7(false);
};
const abrirLightbox8 = () => {
    setLightboxVisible8(true);
};
const cerrarLightbox8 = () => {
    setLightboxVisible8(false);
};

const abrirLightbox9 = () => {
    setLightboxVisible9(true);
};
const cerrarLightbox9 = () => {
    setLightboxVisible9(false);
};

{/* Inicio del codigo en general */}
    return (
        <>
        {/* BARRA DE NAVEGACIÓN */}
        <header>
            <nav className="ocultar container-menu-content">
            <div className="navegacion-areas margen-nav">
                <Link to="/">Inicio</Link>
                <Link to="/bienestar">Bienestar</Link>
                <Link to="/SobreNosotros">Sobre Nosotros</Link>
                <Link to="/areas">Áreas</Link>
                <Link to="/calendario">Calendario</Link>
            </div>
            <Traductor/>
            </nav>
        </header>

        <div className="wrapper">
            <ul className="carousel">
                <section>
                    <li className="card-propia">
                        <div className="flip-card-propia">
                            <div className="face front">
                                <img src="/src/images/Febrero.jpg" alt="" />
                                <h2>Febrero</h2>
                            </div>
                            <div className="face back">
                                <h3>Adaptación al cambio</h3>
                                <p className="p">Adaptarse al cambio es la capacidad de redefinir la manera de trabajar para conseguir       procesos más productivos y eficientes.</p>
                                <div className="link">
                                    <a href="#" id="abrirLightbox" onClick={(e) => {
                                    e.preventDefault();
                                    abrirLightbox();
                                    }}
                                    ><h3>Detalles</h3></a>
                                </div>
                            </div>
                        </div>
                    </li>
    {/* Esto es lo que se va a mostrar cuando la variable auxiliar cambie a true */}
                    {lightboxVisible && (
                        <div className="lightbox-mostrado-calendario">
                            <div className="contenido-lightbox-mostrado-febrero">
                                <div className="cabecero-lightbox-calendario">
                                    <h2 className="titulo-lightbox-calendario">MÁS INFORMACIÓN:</h2>
                                    <span
                                    className="material-symbols-outlined cerrar-lightbox"
                                    onClick={cerrarLightbox}
                                    >
                                    close
                                    </span>
                                </div>
                                <div className="texto-imagen-lightbox-calendario">
                                    <p className="texto-lightbox-2-calendario-febrero">
                                    10 de febrero. Taller aprendices FIC adaptación al cambio 
                                    <br></br>
                                    <br></br>
                                    15 de febrero. Campaña de promoción de estilos de vida saludables - Taller preparación laboral y uso de la poliza
                                    <br></br>
                                    <br></br>
                                    20 de febrero. Visita de rectores y coordinadores
                                    <br></br>
                                    <br></br>
                                    21 de febrero. Taller educación sexual
                                    <br></br>
                                    <br></br>
                                    </p>
                                    <img className="imagen-lightbox-directivas-calendario" src="/src/images/febrero_1.jpg" alt=""/>
                                </div>
                            </div>
                        </div>
                    )}
                </section>
            
                <section>
                    <li className="card-propia">
                        <div className="flip-card-propia">
                            <div className="face front">
                                <img src="/src/images/Marzo.png" alt="" />
                                <h2>Marzo</h2>
                            </div>
                            <div className="face back">
                                <h3>Inteligencia emocional</h3>
                                <p className="p">Capacidad de reconocer tus propias emociones 
                                y las de los demás, discernir entre diferentes sentimientos</p>
                                <div className="link">
                                    <a href="#" id="abrirLightbox" onClick={(e) => {
                                    e.preventDefault();
                                    abrirLightbox2();
                                    }}
                                    ><h3>Detalles</h3></a>
                                </div>
                            </div>
                        </div>
                    </li>
    {/* Esto es lo que se va a mostrar cuando la variable auxiliar cambie a true */}
                    {lightboxVisible2 && (
                        <div className="lightbox-mostrado-calendario">
                            <div className="contenido-lightbox-mostrado-marzo">
                                <div className="cabecero-lightbox-calendario">
                                    <h2 className="titulo-lightbox-calendario">MÁS INFORMACIÓN:</h2>
                                    <span
                                    className="material-symbols-outlined cerrar-lightbox"
                                    onClick={cerrarLightbox2}
                                    >
                                    close
                                    </span>
                                </div>
                                <div className="texto-imagen-lightbox-calendario">
                                    <p className="texto-lightbox-2-calendario-marzo">
                                    3 de marzo. Campaña día mudial de la obesidad
                                    <br></br>
                                    <br></br>
                                    7 de marzo. Debate de aprendices candidatos a representantes
                                    <br></br>
                                    <br></br>
                                    8 de marzo. Conmemoración dia de la mujer
                                    <br></br>
                                    <br></br>
                                    15 de marzo. Eleccion de representantes
                                    <br></br>
                                    <br></br>
                                    29 de marzo. Talleres prevencion de deserción
                                    <br></br>
                                    <br></br>
                                    </p>
                                    <img className="imagen-lightbox-directivas-calendario" src="/src/images/marzo_1.jpeg" alt=""/>
                                </div>
                            </div>
                        </div>
                    )}
                </section>

                <section>
                    <li className="card-propia">
                        <div className="flip-card-propia">
                            <div className="face front">
                                <img src="/src/images/Abril.jpg" alt="" />
                                <h2>Abril</h2>
                            </div>
                            <div className="face back">
                                <h3>Acoso laboral y sexual</h3>
                                <p className="p">Acoso sexual es cuando alguien en el trabajo hace avances o solicitudes sexuales no deseadas y sin consentimiento.</p>
                                <div className="link">
                                    <a href="#" id="abrirLightbox" onClick={(e) => {
                                    e.preventDefault();
                                    abrirLightbox3();
                                    }}
                                    ><h3>Detalles</h3></a>
                                </div>
                            </div>
                        </div>
                    </li>
    {/* Esto es lo que se va a mostrar cuando la variable auxiliar cambie a true */}
                    {lightboxVisible3 && (
                        <div className="lightbox-mostrado-calendario">
                            <div className="contenido-lightbox-mostrado-abril">
                                <div className="cabecero-lightbox-calendario">
                                    <h2 className="titulo-lightbox-calendario">MÁS INFORMACIÓN:</h2>
                                    <span
                                    className="material-symbols-outlined cerrar-lightbox"
                                    onClick={cerrarLightbox3}
                                    >
                                    close
                                    </span>
                                </div>
                                <div className="texto-imagen-lightbox-calendario">
                                    <p className="texto-lightbox-2-calendario-abril">
                                    13 de abril. Inicio de torneo de futbol y sorteo de partidos
                                    <br></br>
                                    <br></br>
                                    17 de abril. Inicio de convocatoria para apoyo de alimentación
                                    <br></br>
                                    <br></br>
                                    24 de abril. Taller habitos y estilos de vida saludables
                                    <br></br>
                                    <br></br>
                                    26 de abril. Campaña prevención de acoso sexual
                                    <br></br>
                                    <br></br>
                                    </p>
                                    <img className="imagen-lightbox-directivas-calendario" src="/src/images/abril_1.jpeg" alt=""/>
                                </div>
                            </div>
                        </div>
                    )}
                </section>

                <section>
                    <li className="card-propia">
                        <div className="flip-card-propia">
                            <div className="face front">
                                <img src="/src/images/Mayo.jpg" alt="" />
                                <h2>Mayo</h2>
                            </div>
                            <div className="face back">
                                <h3>Optimización del tiempo</h3>
                                <p className="p">Aplicación de estrategias que buscan maximizar el aprovechamiento del tiempo de trabajo para poder hacer más en menos tiempo.</p>
                                <div className="link">
                                    <a href="#" id="abrirLightbox" onClick={(e) => {
                                    e.preventDefault();
                                    abrirLightbox4();
                                    }}
                                    ><h3>Detalles</h3></a>
                                </div>
                            </div>
                        </div>
                    </li>
    {/* Esto es lo que se va a mostrar cuando la variable auxiliar cambie a true */}
                    {lightboxVisible4 && (
                        <div className="lightbox-mostrado-calendario">
                            <div className="contenido-lightbox-mostrado-mayo">
                                <div className="cabecero-lightbox-calendario">
                                    <h2 className="titulo-lightbox-calendario">MÁS INFORMACIÓN:</h2>
                                    <span
                                    className="material-symbols-outlined cerrar-lightbox"
                                    onClick={cerrarLightbox4}
                                    >
                                    close
                                    </span>
                                </div>
                                <div className="texto-imagen-lightbox-calendario">
                                    <p className="texto-lightbox-2-calendario-mayo">
                                    2 de mayo. Divulgación de festival de talentos
                                    <br></br>
                                    <br></br>
                                    4 de mayo. Campaña prevención de acoso sexual: performance y sensibilización
                                    <br></br>
                                    <br></br>
                                    15 de mayo. Inscripción festival de talentos
                                    <br></br>
                                    <br></br>
                                    17 de mayo. Dia de la afrocolombianidad - Feria Artesanal - Talleres, comida y folclor
                                    <br></br>
                                    <br></br>
                                    18 de mayo. Taller virtual Planificación familiar - Taller reglamento del aprendiz y prevención de acoso con fiscalía
                                    <br></br>
                                    <br></br>
                                    </p>
                                    <img className="imagen-lightbox-directivas-calendario" src="/src/images/mayo_1.jpeg" alt=""/>
                                </div>
                            </div>
                        </div>
                    )}
                </section>

                <section>
                    <li className="card-propia">
                        <div className="flip-card-propia">
                            <div className="face front">
                                <img src="/src/images/Junio.jpg" alt="" />
                                <h2>Junio</h2>
                            </div>
                            <div className="face back">
                                <h3>Trabajo en equipo</h3>
                                <p className="p">Es el trabajo hecho por un grupo de personas, donde todos tienen un objetivo en común.</p>
                                <div className="link">
                                    <a href="#" id="abrirLightbox" onClick={(e) => {
                                    e.preventDefault();
                                    abrirLightbox5();
                                    }}
                                    ><h3>Detalles</h3></a>
                                </div>
                            </div>
                        </div>
                    </li>
    {/* Esto es lo que se va a mostrar cuando la variable auxiliar cambie a true */}
                    {lightboxVisible5 && (
                        <div className="lightbox-mostrado-calendario">
                            <div className="contenido-lightbox-mostrado-junio">
                                <div className="cabecero-lightbox-calendario">
                                    <h2 className="titulo-lightbox-calendario">MÁS INFORMACIÓN:</h2>
                                    <span
                                    className="material-symbols-outlined cerrar-lightbox"
                                    onClick={cerrarLightbox5}
                                    >
                                    close
                                    </span>
                                </div>
                                <div className="texto-imagen-lightbox-calendario">
                                    <p className="texto-lightbox-2-calendario-junio">
                                    1 de junio. Clases musicales aula cultural SENAverso
                                    <br></br>
                                    <br></br>
                                    4 de junio. Caminata de parque Olaya a Cerro Canceles
                                    <br></br>
                                    <br></br>
                                    5 de junio. Taller prevención de delitos informaticos con invitado de la policía
                                    <br></br>
                                    <br></br>
                                    7 de junio. Evento de grafitería
                                    <br></br>
                                    <br></br>
                                    14 de junio. Taller en articulación con biblioteca: Escritura creativa y redacción
                                    <br></br>
                                    <br></br>
                                    15 de junio. Taller liderazgo para voceros
                                    <br></br>
                                    <br></br>
                                    22 de junio. Campaña uso del condón
                                    <br></br>
                                    <br></br>
                                    23 de junio. Dia del aprendiz
                                    <br></br>
                                    <br></br>
                                    </p>
                                    <img className="imagen-lightbox-directivas-calendario" src="/src/images/junio_1.jpeg" alt=""/>
                                </div>
                            </div>
                        </div>
                    )}
                </section>

                <section>
                    <li className="card-propia">
                        <div className="flip-card-propia">
                            <div className="face front">
                                <img src="/src/images/Julio.jpg" alt="" />
                                <h2>Julio</h2>
                            </div>
                            <div className="face back">
                                <h3>Responsabilidad</h3>
                                <p className="p">Valor que está en la conciencia de la persona que estudia la Ética sobre la base de la moral.</p>
                                <div className="link">
                                    <a href="#" id="abrirLightbox" onClick={(e) => {
                                    e.preventDefault();
                                    abrirLightbox6();
                                    }}
                                    ><h3>Detalles</h3></a>
                                </div>
                            </div>
                        </div>
                    </li>
    {/* Esto es lo que se va a mostrar cuando la variable auxiliar cambie a true */}
                    {lightboxVisible6 && (
                        <div className="lightbox-mostrado-calendario">
                            <div className="contenido-lightbox-mostrado-julio">
                                <div className="cabecero-lightbox-calendario">
                                    <h2 className="titulo-lightbox-calendario">MÁS INFORMACIÓN:</h2>
                                    <span
                                    className="material-symbols-outlined cerrar-lightbox"
                                    onClick={cerrarLightbox6}
                                    >
                                    close
                                    </span>
                                </div>
                                <div className="texto-imagen-lightbox-calendario">
                                    <p className="texto-lightbox-2-calendario-julio">
                                    17 de julio. Taller sobre derechos sexuales y planificación familiar
                                    <br></br>
                                    <br></br>
                                    18 de julio. Saloneo (musica/ deportes/ y salud sexual)
                                    <br></br>
                                    <br></br>
                                    19 de julio. Taller de Responsabilidad
                                    <br></br>
                                    <br></br>
                                    24 de julio. Taller de confianza en si mismo, manejo de las emociones y la interacción con los demás
                                    <br></br>
                                    <br></br>
                                    </p>
                                    <img className="imagen-lightbox-directivas-calendario" src="/src/images/julio_1.jpeg" alt=""/>
                                </div>
                            </div>
                        </div>
                    )}
                </section>

                <section>
                    <li className="card-propia">
                        <div className="flip-card-propia">
                            <div className="face front">
                                <img src="/src/images/Agosto.jpeg" alt="" />
                                <h2>Agosto</h2>
                            </div>
                            <div className="face back">
                                <h3>Lealtad y justicia</h3>
                                <p className="p">Conjunto de valores propios y lo que uno podría considerar como justo dentro de su esquema moral o asociativo.</p>
                                <div className="link">
                                    <a href="#" id="abrirLightbox" onClick={(e) => {
                                    e.preventDefault();
                                    abrirLightbox7();
                                    }}
                                    ><h3>Detalles</h3></a>
                                </div>
                            </div>
                        </div>
                    </li>
    {/* Esto es lo que se va a mostrar cuando la variable auxiliar cambie a true */}
                    {lightboxVisible7 && (
                        <div className="lightbox-mostrado-calendario">
                            <div className="contenido-lightbox-mostrado-agosto">
                                <div className="cabecero-lightbox-calendario">
                                    <h2 className="titulo-lightbox-calendario">MÁS INFORMACIÓN:</h2>
                                    <span
                                    className="material-symbols-outlined cerrar-lightbox"
                                    onClick={cerrarLightbox7}
                                    >
                                    close
                                    </span>
                                </div>
                                <div className="texto-imagen-lightbox-calendario">
                                    <p className="texto-lightbox-2-calendario-agosto">
                                    2 de agosto. Zona de escucha. Principales causas de consumo, rutas de atención y centros de escucha.
                                    <br></br>
                                    <br></br>
                                    9 de agosto. Cine escuela - Roger y sandra de biblioteca.
                                    <br></br>
                                    <br></br>
                                    10 de agosto. Taller virtual de liderazgo.
                                    <br></br>
                                    <br></br>
                                    14 de agosto. Talleres cultuparche. Arte, danza y teatro.
                                    <br></br>
                                    <br></br>
                                    28 de agosto. Tomas de prueba rapida VIH.
                                    <br></br>
                                    <br></br>
                                    31 de agosto. Mirador Tambo - Festival de cometas.
                                    <br></br>
                                    <br></br>
                                    </p>
                                    <img className="imagen-lightbox-directivas-calendario" src="/src/images/agosto_1.jpeg" alt=""/>
                                </div>
                            </div>
                        </div>
                    )}
                </section>

                <section>
                    <li className="card-propia">
                        <div className="flip-card-propia">
                            <div className="face front">
                                <img src="/src/images/Septiembre.jpg" alt="" />
                                <h2>Septiembre</h2>
                            </div>
                            <div className="face back">
                                <h3>Compañerismo</h3>
                                <p className="p">Vínculo que se establece a partir de las relaciones afectivas entre personas.</p>
                                <div className="link">
                                    <a href="#" id="abrirLightbox" onClick={(e) => {
                                    e.preventDefault();
                                    abrirLightbox8();
                                    }}
                                    ><h3>Detalles</h3></a>
                                </div>
                            </div>
                        </div>
                    </li>
    {/* Esto es lo que se va a mostrar cuando la variable auxiliar cambie a true */}
                    {lightboxVisible8 && (
                        <div className="lightbox-mostrado-calendario">
                            <div className="contenido-lightbox-mostrado-septiembre">
                                <div className="cabecero-lightbox-calendario">
                                    <h2 className="titulo-lightbox-calendario">MÁS INFORMACIÓN:</h2>
                                    <span
                                    className="material-symbols-outlined cerrar-lightbox"
                                    onClick={cerrarLightbox8}
                                    >
                                    close
                                    </span>
                                </div>
                                <div className="texto-imagen-lightbox-calendario">
                                    <p className="texto-lightbox-2-calendario-septiembre">
                                    14 de septiembre. Talleres con bienestar para aprendices
                                    <br></br>
                                    <br></br>
                                    17 de septiembre. Taller sobre derechos sexuales y planificación familiar - Donaciones canasta Solidaridad
                                    <br></br>
                                    <br></br>
                                    19 de septiembre. Taller de responsabilidad -actitud aptitud y compromiso-
                                    <br></br>
                                    <br></br>
                                    25 de septiembre. Taller de escritura creativa y oratoria
                                    <br></br>
                                    <br></br>
                                    31 de septiembre. Cierre selección de talentos Risaralda
                                    <br></br>
                                    <br></br>
                                    </p>
                                    <img className="imagen-lightbox-directivas-calendario" src="/src/images/septiembre_1.jpeg" alt=""/>
                                </div>
                            </div>
                        </div>
                    )}
                </section>

                <section>
                    <li className="card-propia">
                        <div className="flip-card-propia">
                            <div className="face front">
                                <img src="/src/images/Octubre.jpeg" alt="" />
                                <h2>Octubre</h2>
                            </div>
                            <div className="face back">
                                <h3>Solidaridad</h3>
                                <p className="p">Es un valor que nos ayuda a ser conscientes de las necesidades de otros y nos genera el deseo de sumar en su satisfacción.</p>
                                <div className="link">
                                    <a href="#" id="abrirLightbox" onClick={(e) => {
                                    e.preventDefault();
                                    abrirLightbox9();
                                    }}
                                    ><h3>Detalles</h3></a>
                                </div>
                            </div>
                        </div>
                    </li>
    {/* Esto es lo que se va a mostrar cuando la variable auxiliar cambie a true */}
                    {lightboxVisible9 && (
                        <div className="lightbox-mostrado-calendario">
                            <div className="contenido-lightbox-mostrado-octubre">
                                <div className="cabecero-lightbox-calendario">
                                    <h2 className="titulo-lightbox-calendario">MÁS INFORMACIÓN:</h2>
                                    <span
                                    className="material-symbols-outlined cerrar-lightbox"
                                    onClick={cerrarLightbox9}
                                    >
                                    close
                                    </span>
                                </div>
                                <div className="texto-imagen-lightbox-calendario">
                                    <p className="texto-lightbox-2-calendario-octubre">
                                    3 de octubre. Cumbre nacional representantes de aprendices 2023 -Evento nacional-
                                    <br></br>
                                    <br></br>
                                    10 de octubre. Jornada de donación de sangre.
                                    <br></br>
                                    <br></br>
                                    13 de octubre. Taller de hábitos saludables y gestión de tiempo para descanso.
                                    <br></br>
                                    <br></br>
                                    25 de octubre. Taller de preparación de vida laboral.
                                    <br></br>
                                    <br></br>
                                    </p>
                                    <img className="imagen-lightbox-directivas-calendario" src="/src/images/octubre_1.jpeg" alt=""/>
                                </div>
                            </div>
                        </div>
                    )}
                </section>
            </ul>
        </div>
        <Footer/>
        <MenuHamburguesa/>
        </>
    );
};