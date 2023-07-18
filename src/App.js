// import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero  from './components/Homepage/Hero';
import About from './components/Homepage/About';
import Services from './components/Homepage/Services';
import More from './components/Homepage/More'; 
import Testimonial from './components/Homepage/Testimonial';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <About />
      <More />
      <Testimonial />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
