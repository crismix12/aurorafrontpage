import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Description from './components/Description'
import Footer from './components/Footer'
import MyNavBar from './components/MyNavBar'
import Principal from './components/Principal'
import Products from './components/Products'

function App() {
  return (
    <>
    <MyNavBar />
    <Principal />
    <About />
    <h4>Productos</h4>
    <Products /> <br />
    <h4>Descripcion</h4>
    <Description /><br />
    <h4>Contacto</h4>
    <Contact />
    <Footer />
    </>
  )
}

export default App
