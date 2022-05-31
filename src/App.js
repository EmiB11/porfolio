import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Layout from './components/Layout'
import Skills from './components/skills'
import './App.scss'
import MyProyects from './components/Proyects/MyProyects'
import AllMyProjects from './components/Proyects/AllMyProjects'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/skills' element={<Skills />} />
        </Route>
          <Route path='/proyects' element={<AllMyProjects />} />
          <Route path='/proyect' element={<MyProyects/>} />
      </Routes>
    </>
  )
}

export default App
