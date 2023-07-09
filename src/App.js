import logo from './logo.svg';
import './App.css';
import Navbars from './Navbars';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Results from './pages/Results';
import Footer from './pages/Footer'

function App() {
  return (
    <div>
      <Router>
        <Navbars />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/result" element={<Results />} />
        </Routes>
        <Footer />
      </Router>
    </div >
  );
}

export default App;
