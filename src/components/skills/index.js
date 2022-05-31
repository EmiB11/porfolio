import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import './index.scss'

function Skills() {

  const [letterClass, setLetterClass] = useState('text-animate')

   useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, []) 


  return (
    <>
     <div className="container skills">
        
        <div className="text-zone">
          <h1>
          <AnimatedLetters
              letterClass={letterClass}
              strArray={['Habilidades ' , '  ' , ' y ', ' ', ' experiencia']}
              idx={15}
            />
            </h1>
          <p>
            Tengo conocimientos y experiencia en las siguientes tecnologías : {" "}
            <span className="tech-tag">HTML5</span>,
            <span className="tech-tag">CSS3</span>,
            <span className="tech-tag">JavaScript</span>,
            <span className="tech-tag">Redux</span>,
            <span className="tech-tag">Node</span>,
            <span className="tech-tag">React</span>,
            <br/>
            <span className="tech-tag">TypeScript</span>,
            <span className="tech-tag">PostgreSQL</span>,
            <br/>
            <span className="tech-tag">Bootstrap</span>,
            <span className="tech-tag">Sass</span>,
            <span className="tech-tag">Git</span>,
            <span className="tech-tag">Firebase</span>,
            <span className="tech-tag">Express</span>,
            <span className="tech-tag">React Native</span>,
            <span className="tech-tag">MongoDB</span>
          </p>
          <div className='infor'>
          <p >
          Realicé proyectos en el bootcamp de Henry donde implementamos la metodología <span className="tech-tag">Scrum</span> para trabajar en equipo utilizando git y github. Pongo especial
            esfuerzo en optimizar mi código y proporcionar la mejor experiencia de usuario.Soy una persona con gran facilidad para el aprendizaje y una afición por la lógica. 
          </p>
          </div>
          <p>
            Visite mi perfil de {" "}
            <a
             style={{color:'#ffd700'}}
              onclick="ga('send', {'hitType': 'event', 'eventCategory': 'Skills Page', 'eventAction': 'Link Clicked', 'eventLabel': 'Linkedin profile' });"
              target="_blank"
              href="www.linkedin.com/in/emiliano-barberis-developer"
              >LinkedIn </a
            >{" "} para ver más detalles. 
          </p>
        </div>
       
        </div>
       <Loader type="ball-clip-rotate-multiple" />
     
      </>
  )
}

export default Skills