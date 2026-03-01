import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import ContactForm from './components/ContactForm';
import TodoApp from './components/TodoApp';  // Add this import

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/todo" element={<TodoApp />} />  {/* Add this route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;