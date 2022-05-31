import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/miFoto.jpg'

import curriculum from '../../assets/images/Cv-Emiliano-Barberis.pdf'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = [' ',' ', 'E', 'm', 'i', 'l', 'i', 'a', 'n' , 'o' , ' ' , 'B' , 'a','r','b','e','r','i','s']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>Hola</span>
            <span className={`${letterClass} _12`}>,</span>
            
            <span className={`${letterClass} _13`}>s</span>
            <span className={`${letterClass} _14`}>oy</span>
             <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Fullstack Web Developer</h2>
          <a className="flat-button" href={curriculum} download>
            DESCARGAR CV
          </a>
        </div>
        <div className='imagen-container'>
       <img src={LogoTitle} alt ='foto perfil' />
       </div>
      </div>
     
      <Loader type="ball-clip-rotate-multiple" />
    </>
  )
}

export default Home
