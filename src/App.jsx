import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';        // Import Home page
import About from './pages/About';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />              {/* Use Home component */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;