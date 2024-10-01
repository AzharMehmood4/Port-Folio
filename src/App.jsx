import { Toaster } from 'react-hot-toast';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Experiance from './components/Experiance';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
function App() {

  return (
    <>
    <div>
    <Navbar/>
    <Home/>
    <About/>
    <Portfolio/>
    <Experiance/>
    <Contact/>
    <Footer/>
    </div>
    <Toaster />
     </>
  )
}

export default App
