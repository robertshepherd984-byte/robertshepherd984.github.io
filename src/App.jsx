import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './pages/About';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <div className="min-h-screen bg-gray-900 text-gray-100">
              <Hero />
            </div>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;