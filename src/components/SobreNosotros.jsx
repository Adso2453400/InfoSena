//menu hamburguesa
import menuicon from "../images/icons8-menu-50 (1).png";
import menuwhite from "../images/icons8-x-50.png";
import iconinicio from "../images/icons8-casa-48.png";
import iconbienestar from "../images/icons8-bienestar-48.png";
import iconnosotros from "../images/icons8-información-48.png";
import iconareas from "../images/icons8-universidad-48.png";
import iconcalen from "../images/icons8-calendario-48.png";




import { Link } from "react-router-dom";
// importaciones de la informacion
import bandera from "../images/bandera-removebg-preview.png";
//Importaciones de las card testimonio
import img from "../images/icons8-cita-derecha-30.png";
import logo from "../images/icons8-usuario-masculino-en-círculo-50.png";

import "../Css/SobreNosotros.css";
//Importaciones de las preguntas frecuentes
import { useState } from "react";

//Importaciones del footer
import fb from "../images/icons8-facebook-48.png";
import fi from "../images/icons8-instagram-48.png";
import ft from "../images/icons8-twitterx-48.png";
import fy from "../images/icons8-youtube-48.png";
import se from "../images/sena.png";

//Translate
import Traductor from './Translate'


export function MenuHamburguesa() {
  return (
    <>
      <div
        className="menu-hamburguesa"
        onClick={() => {
          const menuContent = document.querySelector(
            ".menu-hamburguesa-content"
          );
          menuContent.style.display = "flex";
          menuContent.style.flexDirection="column";
          document.querySelector('.menu-hamburguesa').style.display= 'none';

        }}
      >
      <div className="menu-rayas-principal">
        <div className="menu-prin-rayas">
        <img src={se} className="menu-rayas"></img>
        <div className="p-menu-rayas">
        <p className="p-menu-rayas-t">Sena CDITI</p>
        </div></div>
        <div className="menu-prin-rayas-2">
        <img src={menuicon} className="menu-rayas"></img>
        </div></div>
      </div>

      <div className="menu-hamburguesa-content">
        <div
          className="menu-hamburguesax"
          onClick={() => {
            document.querySelector(".menu-hamburguesa-content").style.display =
              "none";
            document.querySelector(".menu-hamburguesa").style.display="block";
            
            
            
          }}
        >
          <img src={menuwhite} className="menuwhite1"></img>
    
        </div>

        <div className="img-logo-sena">
            <img src={se} className="img-logo-menu-sena"></img>
        </div>

        <div className="menus">
            
            <div className="menus-links">
              
              <img src={iconinicio} className="icon-menu"></img>
              <a href="/">Inicio</a>
              
            </div>
          
         
          <div className="menus-links">
            <img src={iconbienestar} className="icon-menu"></img>
            <a href="/Bienestar">Bienestar</a>
            
          </div>
          <div className="menus-links">
            
            <img src={iconnosotros} className="icon-menu"></img>
            <a href="/SobreNosotros">Sobre Nosotros</a>
            
          </div>
          
          <div className="menus-links">
            
            <img src={iconareas} className="icon-menu"></img>
            <a href="/Areas">Areas</a>
            
          </div>
          
          <div className="menus-links">
          <img src={iconcalen} className="icon-menu"></img>
          <a href="/Calendario">Calendario</a>
          </div>
          
          
          </div>
      </div>
    </>
  );
}


function Menu(){
  return (<header className="container-menu">
  <nav className="container-menu-content">
    <div className="navegacion-areas margen-nav">
      <Link to="/">Inicio</Link>
      <Link to="/bienestar">Bienestar</Link>
      <Link to="/SobreNosotros">Sobre Nosotros</Link>
      <Link to="/areas">Áreas</Link>
      <Link to="/calendario">Calendario</Link>
    </div>
    <Traductor/>
  </nav>
</header>)
}

function NosotrosInfo(){
  return(
    <div className="contenedor-info">
    <div className="informacion">
      <h2 className="h2-informacion">Escudo y Bandera</h2>
      <p className="p-informacion">El escudo y la bandera del SENA,fueron diseñados a comienzos de la creacion de nuestra institucion,reflejan los 3 sectores economicos dentro de los cuales se hubica el accionar de la institucion:el piñon,representativo del sector industrial;el caducedo,asociado al de comercio y servicios;y el cafe ,ligado al primario y extractivo</p>
      <img src={bandera} alt="Bandera Sena"></img>
      <h2 className="h2-informacion">Mision</h2>
      <p className="p-informacion">El SENA esta encargado de cumplir la funcion que le corresponde al estado de invertir en el desarrollo social y tecnico de los trabajadores colombianos ofreciendo y ejecutando la formacion profesional integral,para la incorporacion y el desarrollo de las personas en actividades productivas que contribuyan al desarrollo social ,economico y tecnologico del pais</p>
      <h2 className="h2-informacion">Vision</h2>
      <p className="p-informacion">En el año 2023 nuestra organización SENA se posicionará como una en institución líder en formación integral superior a nivel nacional, gracias a que contribuye en la empleabilidad, y en los emprendimientos al igual que es sustentada en la formación de cada profesional con una educación de alta calidad, la cual incluye valores, reciprocidad, promoviendo nuestra cultura SENA y todo el desarrollo sostenible de la comunidad.</p>


    </div>
    </div>
    
  )
}

function TestimonioCard(props) {
  return (
    <div className="cards" id="card">
      <div className="cards-content">
        <img src={logo} alt="Imagen Perfil"></img>
        <h2>{props.title}</h2>
        <h4 className="h4-testimonio">{props.rol}</h4>
        <br></br>
        <img src={img} alt="comillas"></img>
        <p className="f1">{props.paragraph}</p>
      </div>
    </div>
  );
}
function TestimonioTitle() {
  return <h1 className="container__title" id="testi">Testimonios</h1>;
}

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <article className="faq-item">
      <h2 className="question" onClick={toggleAnswer}>
        {question}
        <span className={`arrow ${isOpen ? "open" : "closed"}`}></span>
      </h2>
      <div className={`answer ${isOpen ? "show-answer" : ""}`}>
        <p className="respuesta">{answer}</p>
      </div>
    </article>
  );
}

function App() {
  const faqData = [
    {
      question: "¿Qué pasa si pierdo un curso corto en el SENA?",
      answer: (
        <p className="f2">
          {" "}
          Para los cursos de formación complementaria virtual no existen
          condicionamientos o penalizaciones por no finalizar el proceso de
          formación, el curso cambiará a estado “Cancelado Académico” y el
          usuario podrá realizar de forma inmediata la inscripción a los cursos
          disponibles en la oferta virtual o al curso Qué se canceló
          anteriormente.,
        </p>
      ),
    },
    {
      question:
        "¿Cuánto es el tiempo máximo que dura un tecnólogo, un tecnico y un complementario del SENA?",
      answer: (
        <p className="f2">
          El tecnico tiene una duración de 15 meses(9 meses de lectiva, y 6
          meses de practica), los tecnologos tienen una duracion de 27 meses(21
          meses de lectiva y 6 de practica) y los complemetarios tienen una
          duración que varia entre 40 y 80 horas; tambien puede suceder que en
          los tecnicos y tecnologos, si no se cumple con los objetivos
          requeridos, tendran aplazamiento de 1 trimestre, por lo tanto el
          tecnico podria tener duración de 18 meses y el tecnologo de 30 meses.,
        </p>
      ),
    },
    {
      question: "¿Cuánto tiempo dura una sanción en el SENA?",
      answer: (
        <p className="f2">
          Depende de que tipo de carrera. Si es virtual la sanción es de 8
          meses. Si es una carrera presencial es de 1 hasta 3 años de sanción..,
        </p>
      ),
      
    },
    {
      question: "¿Qué pasa si falto mucho al SENA?",
      answer: (
        <p className="f2">
          Por medio del cual se ordena la Cancelación del Registro de matrícula
          al aprendiz SENA. Al cometer una falta catalogada como grave, la
          aprendiz infractora es merecedora de la cancelación de registro de
          matrícula.,
        </p>
      ),
    },
    {
      question: "¿Cuáles son las prohibiciones del aprendiz SENA?",
      answer: (
        <p className="f2">
          Realizar comportamientos contrarios a la normativa SENA. Incumplir con
          la fecha limite de reintegro al centro de formacion despues de haber
          participado de un programa estudiantil. Incumplir las normas
          establecidas para cada centro de formacion. Alterar, adulterar,
          falasificar calificaciones o evaluaciones.,
        </p>
      ),
    },
  ];

  return (
    <div className="App">
      <section className="faq">
        <h1 className="h1-faq" id="pregun">Preguntas Frecuentes</h1>
        {faqData.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </section>
    </div>
  );
}

export function Footer() {
  return (
    <div className="footer">
      <div className="sb_footer section_padding">
        <div className="sb_footer-links">
          <div className="sb_footer-links-div">
            <p className="logo">
              <img src={se} alt="imagen sena"></img>
            </p>
          </div>
          <div className="sb_footer-links-div">
            <h4 className="h4-footer">INICIO</h4>
            <a href="https://oferta.senasofiaplus.edu.co/sofia-oferta/">
              <p className="f3">Inscripcion</p>
            </a>
            <a href="/galeria">
              <p className="f3">Galeria</p>
            </a>
          </div>
          <div className="sb_footer-links-div">
            <h4 className="h4-footer">NOSOTROS</h4>
            <a href="/Areas">
              <p className="f3">Areas</p>
            </a>
            <a href="/Bienestar">
              <p className="f3">Bienestar</p>
            </a>
            <a href="/SobreNosotros">
              <p className="f3">Sobre Nosotros</p>
            </a>
          </div>
          <div className="sb_footer-links-div">
            <h4 className="h4-footer">INFO</h4>
            <a href="http://senarisaraldadosquebradas.blogspot.com/.gov">
              <p className="f3">Blog CDITI</p>
            </a>
            <a href="/Calendario">
              <p className="f3">Calendario</p>
            </a>
          </div>
          <div className="sb_footer-links-div">
            <h4 className="h4-footer">SIGUENOS</h4>
            <div className="sociales">
              <a href="https://web.facebook.com/senacditidosquebradas/?locale=es_LA&_rdc=1&_rdr">
                <p>
                  <img src={fb} alt="imagen Facebook"></img>
                </p>
              </a>
              <a href="https://www.instagram.com/bienestaralaprendizcditi/?hl=es">
                <p>
                  <img src={fi} alt="imagen instagram"></img>
                </p>
              </a>
              <a href="https://twitter.com/SENAComunica">
                <p>
                  <img src={ft} alt="imagen X"></img>
                </p>
              </a>
              <a href="https://www.youtube.com/@SENAComunica">
                <p>
                  <img src={fy} alt="imagen youtube"></img>
                </p>
              </a>
            </div>
          </div>
          <div className="sb_footer-links-div">
            <p className="f3">
              {" "}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.6102624226837!2d-75.6809854!3d4.836791799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3881a4b50bb31d%3A0x9150c2e299ed35b0!2sCDITI%20SENA%20Dosquebradas!5e0!3m2!1ses-419!2sco!4v1694988553159!5m2!1ses-419!2sco"
                width="300"
                height="200"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
              <hr/>
              <p className="f3">Contacto:  +57 (6) 3113700 IP 63361</p>
              <p className="f3">Email: serviciostecnologico@sena.edu.co</p>
            </p>
          </div>
        </div>
        <hr></hr>

        <div className="sb_footer-below">
          <div className="sb_footer-copyright">
            <p className="f3">
              @{new Date().getFullYear()} <b>SENA CDITI</b>- Todos los Derechos
              Reservados.
              <span className="derechos">Ficha 2453400 Analisis y Desarrollo De Software</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Nosotros() {
  return (
    <>
      

      <Menu/>
      <NosotrosInfo/>
      <TestimonioTitle />
      <div className="container">
        <TestimonioCard
          title={"Juan Camilo"}
          rol="Aprendiz"
          paragraph={
            "Los programas se adaptan de manera satisfactoria a los conocimientos necesarios en el mundo laboral"
          }
        />
        <TestimonioCard
          title={"Juan Pablo"}
          rol="Aprendiz"
          paragraph={
            "En bienestar al aprendiz nos brindan ayuda, informacion y realizan actividades para los aprendices, me parece una oficina muy importante"
          }
        />
        <TestimonioCard
          title={"Instructor Jose Perez "}
          rol="Instructor"
          paragraph={
            "Los aprendices son muy maduros y tienen mucha disposición, aqui los prepararemos para un ambiente laboral "
          }
        />
        <TestimonioCard
          title={"Jefrey "}
          rol="Funcionario Sena"
          paragraph={
            "El patrocinio es un apoyo economico que las empresas le dan a los aprendices que se encuntran en formacion para apoyarlos en su proceso "
          }
        />
      </div>
      <App />
      <Footer />
      <MenuHamburguesa/>
    </>
  );
}
