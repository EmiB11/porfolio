import { useEffect, useState } from 'react'
import {

  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faBootstrap
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['S', 'o', 'b', 'r', 'e', ' ', 'm', 'í']}
              idx={15}
            />
          </h1>
          <p>
          Soy desarrollador web fullstack muy ambicioso en busca de un puesto en una
            empresa IT que cuente con la oportunidad de trabajar con las últimas
            tecnologías en proyectos desafiantes y diversos.
          </p>
          <p align="LEFT">
          Tengo una ética de trabajo que fui desarrollando a lo largo de mi experiencia laboral y académica , 
          lo que me dio un fuerte sentido de responsabilidad y compromiso con los clientes. 
         
          </p>
          <p>
          Me destaco por ser proactivo y metódico, siempre busco nuevos retos y me adapto fácilmente a nuevos
           desafíos. Estoy abierto a aprender nuevas tecnologías y lenguajes. La comunicación y el trabajo en equipo 
          es para mí esencial para poder crecer como desarrollador.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faBootstrap} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="ball-clip-rotate-multiple" />
    </>
  )
}

export default About
