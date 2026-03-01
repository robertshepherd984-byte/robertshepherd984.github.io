import { Link } from 'react-router-dom';

const Hero = () => {
    return(
        <section className="min-h-screen flex items-center bg-gray-900">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    Robert Shepherd
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                    Aspiring developer building solutions one line of code at a time.
                    I turn challenges into learning opportunities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    {/* Updated this button to scroll to projects */}
                    <button 
                        onClick={() => {
                        const projectsSection = document.getElementById('projects');
                            if (projectsSection) {
                         projectsSection.scrollIntoView({ behavior: 'smooth' });
                        }
                    }}
                        className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium"
                    >
                        View My Work
                    </button>
                    <Link 
                        to="/contact" 
                        className="px-8 py-3 border-2 border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors text-lg font-medium"
                    >
                        Contact Me
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;