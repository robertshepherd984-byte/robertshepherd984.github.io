import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Temporary placeholder for About page
const TempAbout = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4 text-white">About Page</h1>
        <p className="text-lg text-gray-300">Coming soon...</p>
      </div>
    </div>
  );
};

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
          <Route path="/about" element={<TempAbout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;