import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
// import Skills from './components/Skills';  // Commented out until created
// import About from './pages/About';        // Commented out until created

// Temporary placeholder for About page
const TempAbout = () => {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold mb-4">About Page</h1>
      <p className="text-lg text-gray-600">Coming soon...</p>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              {/* <Skills />  Commented out until created */}
            </main>
          } />
          <Route path="/about" element={<TempAbout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;