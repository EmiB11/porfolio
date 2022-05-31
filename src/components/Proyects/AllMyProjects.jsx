import React ,{useState, useEffect}from 'react'
import { Link  } from 'react-router-dom'
import imagesMobi from '../../assets/images/ImagenRegistro.png'
import imageVideogames from '../../assets/images/istockphoto.jpg'
import Sidebar from '../Sidebar'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './MyProyects.scss'
function AllMyProjects() {
    const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
      <>
    <Sidebar />
    <div className='containerslider contenedor'>
    <div className='containertitle'>
    <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['M', 'i', 's', ' ', 'p', 'r', 'o' ,'y' ,'e','c','t','o','s']}
              idx={15}
            />
          </h1>
    </div>
    <div className='proyectscards'>
    <div className='containercard'>
        <div className='cards'>
    
    <Link to='/proyect?name=mobi'>
            <img className='imgcard'src={imagesMobi} alt='pokeimg' />
            
            </Link>
        </div>
        <div className='desclider'>
                <span>Mobi App Web</span>
            </div>
        </div>
        <div className='containercard'>
            <div className='cards'>
                
          <Link  to='/proyect?name=videogames'>
            <img className='imgcard'src={imageVideogames} alt='pokeimg' />
          </Link> 
            </div>
            <div className='desclider'>
                <span>Videogames web</span>
            </div>
        </div>
      
       
    
    
    </div>
    
    
    
            </div>
    <Loader type="ball-clip-rotate-multiple" />
      
    
            </>
        )
  
}

export default AllMyProjects