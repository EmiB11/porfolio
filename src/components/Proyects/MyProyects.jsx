import React , {useState , useEffect}from 'react'
import {useSearchParams} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faArrowCircleRight ,faArrowCircleLeft ,faCloudArrowUp} from '@fortawesome/free-solid-svg-icons'
import './MyProyects.scss'
import Sidebar from '../Sidebar'
import AnimatedLetters from '../AnimatedLetters'
import {faGithub } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

function MyProyects() {
    const [searchParams] = useSearchParams();
    const name = searchParams.get('name')
    const [interval , setInterval] = useState({
        init: 0,
        end: 2
    })
   const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

    const imagesMobi = ['https://res.cloudinary.com/herway-app/image/upload/v1653786333/landingMobi_puw4ye.png' ,'https://res.cloudinary.com/herway-app/image/upload/v1653786447/registroMobi_lcxcv1.png' ,
    'https://res.cloudinary.com/herway-app/image/upload/v1653786352/loginMObi_nanowg.png','https://res.cloudinary.com/herway-app/image/upload/v1653786316/homeMobi_hdx9un.png','https://res.cloudinary.com/herway-app/image/upload/v1653786257/DetailMobi_bwdgoh.png',
     'https://res.cloudinary.com/herway-app/image/upload/v1653786166/carouselMobi_nwpmj8.png' , 'https://res.cloudinary.com/herway-app/image/upload/v1653786182/carritoMobi_zznx7e.png' ,
      'https://res.cloudinary.com/herway-app/image/upload/v1653786459/ReviewsMobi_bcsqsd.png' , 'https://res.cloudinary.com/herway-app/image/upload/v1653786269/estrellasMobi_n2f4el.png','https://res.cloudinary.com/herway-app/image/upload/v1653786409/perfilMobi_zpbv1r.png','https://res.cloudinary.com/herway-app/image/upload/v1653786237/datosenvioMObi_v5xl0f.png',
    'https://res.cloudinary.com/herway-app/image/upload/v1653786385/pedidoMObi_gm4bp9.png','https://res.cloudinary.com/herway-app/image/upload/v1653786373/ordenCompraMobi_z6zxle.png',
     'https://res.cloudinary.com/herway-app/image/upload/v1653786299/HistorialPedido_nbpoui.png','https://res.cloudinary.com/herway-app/image/upload/v1653786287/favoritos_vmf8op.png',
     'https://res.cloudinary.com/herway-app/image/upload/v1653786222/dashboardAdminMobi_zuvuz8.png','https://res.cloudinary.com/herway-app/image/upload/v1653786196/chatMobi_ew3qzt.png',
    'https://res.cloudinary.com/herway-app/image/upload/v1653786210/crearProductMobi_eidvbp.png','https://res.cloudinary.com/herway-app/image/upload/v1653786432/ProductosMobi_cgozeq.png',
     'https://res.cloudinary.com/herway-app/image/upload/v1653786395/pedidosAdminMobi_x3zyar.png','https://res.cloudinary.com/herway-app/image/upload/v1653786151/AdminUsuariosMObi_ki8uhp.png',
    'https://res.cloudinary.com/herway-app/image/upload/v1653785795/adminUserMobi_evrtgx.png']
    
   const imagesVideogames = ['https://res.cloudinary.com/herway-app/image/upload/v1653858510/homegame_ldmq48.png','https://res.cloudinary.com/herway-app/image/upload/v1653858303/allgames_z7imym.png',
    'https://res.cloudinary.com/herway-app/image/upload/v1653858407/detalleGame_whstos.png','https://res.cloudinary.com/herway-app/image/upload/v1653858478/gameDetail_kcegac.png',
     'https://res.cloudinary.com/herway-app/image/upload/v1653858384/crearjugeo_info_dcwyfi.png','https://res.cloudinary.com/herway-app/image/upload/v1653858360/crearjuego_info2_cjprxk.png',
     'https://res.cloudinary.com/herway-app/image/upload/v1653858528/infoGame_ctofud.png','https://res.cloudinary.com/herway-app/image/upload/v1653858451/error404_i2kgyk.png']

    function handleNext() {
        
        let auxInit = interval.init
        let auxEnd= interval.end
        setInterval({
            init: auxInit + 2,
            end: auxEnd + 2
        })
        
    }

    function handlePrev(){
        let auxInit = interval.init
        let auxEnd= interval.end
        setInterval({
            init: auxInit - 2,
            end: auxEnd - 2
        })
    }

    return (
    <>
    <Sidebar />
    <div className='containerslider'>

   <div className="containerProyect">

 { name === 'mobi' ?  (<><div className='containertitle text-zone'>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['M', 'o', 'b', 'i', ' ', 'A', 'p' ,'p' ,' ','W','e','b']}
              idx={15}
            />
          </h1>
   
    </div>
    <div className='description'>
    <p>Es un e-commerce de muebles desarrollado por un equipo de 8 personas usando SCRUM-Agile y JS stack para un proyecto real. • 
En este proyecto implementamos chat online para que el usuario pueda comunicarse con el proveedor ,login con google , newsletters para que el usuario reciba información vía email , carrito de compras, productos favoritos ,puntaje y comentarios a productos comprados , historial de compras , perfil de usuarios , registro y login ,recupero de contrseña, pasarela de pagos , que pueda ingresar una imagen y recomendarle productos, un dashboard de administrador para que pueda administrar las ventas , eliminar , crear y editar productos , agregar más administradores , bloquear usuarios , notificaciones que le permite al administrador saber si le envían un mensaje , se realiza una venta o comentan un producto y un chat para comunicarse con el usuario.
Tecnología: React, Redux, HTML, CSS, Bootstrap, Node JS, Express, PostgreSQL, Sequelize, JWT, Firebase,Socket.io , Styled Components.</p>

<p>• Mi principal contribución al proyecto: carrito de compras, login con google utilizando Firebase, registro del usuario ,formulario de envío ,orden de compra, recupero de contraseña , deploy del proyecto del lado del backend utilizando Render.</p>
<p>
•  Url del proyecto {" "}
            <a
              target="_blank"
              href="https://mobi-app.netlify.app/"
              ><FontAwesomeIcon icon={faCloudArrowUp} /></a>
        
 </p>
 <p >
 •  Repositorio del 
           Frontend <a
              target="_blank"
              href="https://github.com/EmiB11/E-commerce-React"
              > <FontAwesomeIcon icon={faGithub}/> </a>
         y repositorio del Backend   <a
              target="_blank"
              href="https://github.com/EmiB11/PF_Backend"
              ><FontAwesomeIcon icon={faGithub}/> </a>
        
 </p>
                {/* <!-- Slider --> */}
  </div>
     <div className="containerCarousel">
    <button disabled={interval.init > 0  ? false : true}  onClick={()=> handlePrev()} className="btnPrev"><FontAwesomeIcon icon={faArrowCircleLeft} /></button>
     {imagesMobi?.slice(interval.init, interval.end).map( (image ,index) => (
        <div className="carouselCards" key={index} >         
          <img className='imgcard' src={image} alt='pokeimg' />
         </div>
         ))}
     <button disabled={interval.end < imagesMobi.length  ? false : true} onClick={()=>handleNext()}className="btnNext"><FontAwesomeIcon icon={faArrowCircleRight} /></button>
     
      </div> </>)
     :   
     (<> <div className='containertitle text-zone'>
    <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['V', 'i', 'd', 'e', 'o', 'g', 'a' ,'m' ,'e ',' ','W','e','b',' ','A','p','p']}
              idx={18}
            />
          </h1>
          </div>
        <div className='description'>
        <p>La idea general del proyecto era crear una SPA (Single Page Application) con temática de videojuegos, en la cual se puedan ver los distintos juegos disponibles, junto con información relevante de los mismos accediendo a la api externa RAWG , utilizando las tecnologías de ReactJs, Redux y CSS para el front-end y NodeJs en conjunto con sequelize y express para el back-end. Para la base de datos utilice Postgresql .
Se realizo testing de la aplicación utilizando Mocha en la parte de Back-end y Jest en la parte de Front-end.
Dentro de la aplicación podemos :</p>
<p>- Buscar videjuegos: A través del paginado o por la barra de búsqueda.
- Filtrarlos: Por géneros y por el origen de dónde provienen.
- Ordenarlos: Alfabéticamente: A a Z y viceversa y por rating de mayor a menor y viceversa.
-Ver la información mas detallada del videojuego .
- Crear tu propio videojuego: Mediante un formulario controlado, se podrán crear videojuegos a gusto de cada uno.
-Editar y eliminar el videojuego creado.</p>
<p>
•  Url del proyecto {" "}
            <a
              target="_blank"
              href="https://videogames-app-orpin.vercel.app/"
              ><FontAwesomeIcon icon={faCloudArrowUp} /></a>
        
 </p>
 <p >
 •  Repositorio del 
           proyecto <a
              target="_blank"
              href="https://github.com/EmiB11/PI-Videogames-main"
              > <FontAwesomeIcon icon={faGithub}/> </a>
        
        
 </p>
       
    </div>    
      <div className="containerCarousel">
    <button disabled={interval.init > 0  ? false : true}  onClick={()=> handlePrev()} className="btnPrev"><FontAwesomeIcon icon={faArrowCircleLeft} /></button>
     {imagesVideogames?.slice(interval.init, interval.end).map( (image ,index) => (
        <div className="carouselCards" key={index} >         
          <img className='imgcard' src={image} alt='pokeimg' />
         </div>
         ))}
     <button disabled={interval.end < imagesVideogames.length  ? false : true} onClick={()=>handleNext()}className="btnNext"><FontAwesomeIcon icon={faArrowCircleRight} /></button>
     
      </div> </>) }     
         </div>
    
       
        </div>
        <Loader type="ball-clip-rotate-multiple" />
        </>
  )
}

export default MyProyects