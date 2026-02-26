const Hero = () => {
    return(
        <section className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 
        via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-950">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 
                to-cyan-500 bg-clip-text text-transparent">Robert Shepherd</h1>
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                    Aspiring developer building solutions one line of code at a time.
                    I turn challenges into learning opportunities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    {/* View My Work Button - Blue */}
                    <a href="#projects" className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium">
                        View My Work
                    </a>
                    
                    {/* Contact Me Button - Outlined */}
                    <a href="#contact" className="px-8 py-3 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-lg font-medium">
                        Contact Me
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;