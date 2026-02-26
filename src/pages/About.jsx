import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Header */}
        <h1 className="text-5xl font-bold text-white mb-8 text-center">
          About <span className="text-blue-400">Me</span>
        </h1>

        {/* Main Content */}
        <div className="bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 mb-8">
          
          {/* Introduction */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
              <span className="w-1 h-8 bg-blue-500 rounded-full mr-3"></span>
              Who I Am
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm Robert Shepherd, an aspiring developer based in Phoenix, Arizona and wanting to move to 
              Cebu, Phillipines. My journey into tech started with curiosity and has grown into a passionate 
              pursuit of building meaningful solutions through code.
            </p>
          </div>

          {/* My Story */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
              <span className="w-1 h-8 bg-blue-500 rounded-full mr-3"></span>
              My Journey
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Like many developers, my path hasn't been a straight line. I've faced hurdles, 
              celebrated small victories, and learned that persistence is the most important skill 
              in this field. Every error message is a learning opportunity, and every project 
              teaches something new.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I started with HTML and CSS, fell in love with JavaScript, and am now diving deep 
              into React and modern frontend development. This portfolio itself is a testament 
              to that journey - built from scratch with React, Tailwind CSS, and deployed on 
              GitHub Pages. I would like to learn Python more and maybe help with robotics and AI and 
              someday help farming with drones and maybe automation tools. There are so many things i want to do, but
              got a late start in life.
            </p>
          </div>

          {/* What Drives Me */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
              <span className="w-1 h-8 bg-blue-500 rounded-full mr-3"></span>
              What Drives Me
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-700/50 rounded-xl p-6">
                <div className="text-3xl mb-3">💡</div>
                <h3 className="text-xl font-semibold text-white mb-2">Problem Solving</h3>
                <p className="text-gray-400">I love breaking down complex problems into manageable pieces and building elegant solutions.</p>
              </div>
              <div className="bg-gray-700/50 rounded-xl p-6">
                <div className="text-3xl mb-3">📚</div>
                <h3 className="text-xl font-semibold text-white mb-2">Continuous Learning</h3>
                <p className="text-gray-400">Tech evolves fast, and I'm committed to growing my skills every single day.</p>
              </div>
              <div className="bg-gray-700/50 rounded-xl p-6">
                <div className="text-3xl mb-3">🤝</div>
                <h3 className="text-xl font-semibold text-white mb-2">Collaboration</h3>
                <p className="text-gray-400">I believe the best code is written together. I'm eager to learn from and contribute to a team.</p>
              </div>
              <div className="bg-gray-700/50 rounded-xl p-6">
                <div className="text-3xl mb-3">🚀</div>
                <h3 className="text-xl font-semibold text-white mb-2">Impact</h3>
                <p className="text-gray-400">I want to build things that make a difference, no matter how small.</p>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
              <span className="w-1 h-8 bg-blue-500 rounded-full mr-3"></span>
              My Toolkit
            </h2>
            <div className="flex flex-wrap gap-3">
              {['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS', 'Git', 'GitHub', 'VS Code', 'Vite'].map((tech, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-blue-600/20 text-blue-300 rounded-full border border-blue-600/30 hover:bg-blue-600/30 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center pt-6 border-t border-gray-700">
            <h3 className="text-2xl font-semibold text-white mb-4">Want to work together?</h3>
            <p className="text-gray-400 mb-6">
              I'm currently looking for opportunities to learn, grow, and contribute.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/resume.pdf" 
                download="Robert_Shepherd_Resume.pdf"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Resume
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 border-2 border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors inline-flex items-center justify-center"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center">
          <Link 
            to="/" 
            className="text-gray-400 hover:text-blue-400 transition-colors inline-flex items-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;