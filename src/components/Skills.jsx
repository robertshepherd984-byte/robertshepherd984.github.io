const Skills = () => {
  const skills = [
    { name: 'HTML5', level: 'Advanced', icon: '🌐' },
    { name: 'CSS3', level: 'Advanced', icon: '🎨' },
    { name: 'JavaScript', level: 'Learning', icon: '⚡' },
    { name: 'React', level: 'Learning', icon: '⚛️' },
    { name: 'Tailwind CSS', level: 'Learning', icon: '🎯' },
    { name: 'Git & GitHub', level: 'Comfortable', icon: '📦' },
    { name: 'Responsive Design', level: 'Learning', icon: '📱' },
    { name: 'Vite', level: 'Learning', icon: '⚡' },
  ];

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">
          Skills & <span className="text-blue-400">Technologies</span>
        </h2>
        <p className="text-xl text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Technologies I'm working with and learning every day
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="p-6 bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 text-center group border border-gray-700 hover:border-blue-500"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                {skill.icon}
              </div>
              <div className="font-semibold text-lg text-white mb-1">
                {skill.name}
              </div>
              <div className="text-sm text-gray-400">
                {skill.level}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;