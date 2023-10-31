import './App.css';
import Navbar from './components/Nav';
import Footer from './components/Footer';
import About from './components/About'
import Hero from './components/Hero'
import Testimonials from './components/Testimonials';
import Highlights from './components/Highlights';
import Header from './components/Header';
import Spacer from './components/Spacer-footer';
import Routing from "./components/Routes";

function App() {
  return (
    <>
      <Navbar/>
      <Routing/>
      <Spacer/>
      <Footer/>
    </>      
  );
}

export default App;
