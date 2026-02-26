import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 shadow-lg sticky top-0 z-50 border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Name */}
          <Link to="/" className="text-xl font-bold text-white hover:text-blue-400 transition-colors">
            Robert Shepherd
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-blue-400 transition-colors font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-blue-400 transition-colors font-medium">
              About
            </Link>
            <a 
              href="/resume.pdf" 
              download="Robert_Shepherd_Resume.pdf"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              📄 Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:bg-gray-800 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col space-y-3">
              <Link 
                to="/" 
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-blue-400 py-2 px-2 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Home
              </Link>
              <Link 
                to="/about" 
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-blue-400 py-2 px-2 rounded-lg hover:bg-gray-800 transition-colors"
              >
                About
              </Link>
              <a 
                href="/resume.pdf" 
                download="Robert_Shepherd_Resume.pdf"
                onClick={() => setIsOpen(false)}
                className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-center transition-colors"
              >
                📄 Download Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;