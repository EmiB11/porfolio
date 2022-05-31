import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import Swal from "sweetalert2";
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_5cy1vtk',
        'template_dzgmyn5',
        form.current,
        'SzBQ-wfpm2L_yYCns'
      )
      .then(
        () => {
          Swal.fire({
            text: `Enviado correctamente`,
            icon: "success",
            confirmButtonText: "Ok",
          });
          window.location.reload(false)
        },
        () => {
          Swal.fire({
            text: `Error al enviar el mensaje , por favor intentelo de nuevo`,
            icon: "error",
            confirmButtonText: "Ok",
        })
      })
  }
   



 console.log(form.current)
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['E', 'm', 'a', 'i', 'l', ' ', 'd', 'e', ' ', 'c' ,'o','n','t','a','c','t','o']}
              idx={15}
            />
          </h1>
          <p>
          
             Puede ponerse en contacto conmigo utilizando el siguiente formulario .
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="from_name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li   >
                  <input
                    
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    
                    required
                    
                  />
                </li>
                <li >
                  <textarea
                    placeholder="Message"
                    name="message"
                    
                    required
                  ></textarea>
                </li>
                <li >
                  <input type="submit"  className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
       
      </div>
      <Loader type="ball-clip-rotate-multiple" />
      
    </>
  )
}

export default Contact
