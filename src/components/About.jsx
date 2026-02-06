import { Turtle3D } from './RaceElements'

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="section-header mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 whitespace-nowrap">About Me</h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-24">
          {/* Profile Photo - Enhanced */}
          <div className="relative flex-shrink-0">
            {/* Avatar container - circular */}
            <div className="relative group">
              {/* Animated ring border */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400 animate-spin-slow"></div>
              
              {/* White ring */}
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full p-1 bg-white shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src={`${import.meta.env.BASE_URL}avatar3d.png`}
                    alt="Harshit Singh - Developer" 
                    className="w-full h-full object-cover object-top rounded-full transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full shadow-lg border border-gray-100 z-20">
                <span className="text-xs sm:text-sm font-medium text-gray-700 whitespace-nowrap">
                  <span className="text-green-500 animate-pulse">●</span> Open to Work
                </span>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left flex-1 max-w-xl space-y-4 sm:space-y-6 text-gray-600 px-2">
            <p className="text-base sm:text-lg leading-relaxed">
              Hey there! I'm <strong className="text-gray-900">Harshit Singh</strong>, an MCA student who's currently 
              in the <span className="italic">"please hire me, I promise I learn fast"</span> phase of my career. 
              <span className="text-gray-400 block sm:inline"> (The turtle in my logo isn't just for show)</span>
            </p>
            
            <p className="text-base sm:text-lg leading-relaxed">
              My journey into tech started when I realized I could spend hours debugging 
              code but can't focus on literally anything else for more than 5 minutes. 
              <em className="text-gray-400">Classic developer brain.</em>
            </p>
            
            <p className="text-base sm:text-lg leading-relaxed">
              I specialize in turning caffeine into code, asking ChatGPT the right questions, 
              and pretending to understand algorithms in interviews. My superpower? 
              I can write "Hello World" in at least 5 languages. <strong className="text-gray-900">Hire me.</strong>
            </p>

            <p className="text-base sm:text-lg font-medium text-gray-700 pt-2">
              When I'm not coding, you'll find me:
            </p>
            
            <ul className="space-y-3 text-gray-500 text-left">
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1.5">▹</span>
                <span>Questioning my life choices while my code builds</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1.5">▹</span>
                <span>Adding "years of experience" by watching YouTube tutorials</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1.5">▹</span>
                <span>Starring GitHub repos I'll definitely read someday</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1.5">▹</span>
                <span>Telling people "it works on my machine"</span>
              </li>
            </ul>

            <div className="pt-6 flex items-center justify-center md:justify-start gap-3">
              <div className="transform scale-50 origin-left">
                <Turtle3D />
              </div>
              <span className="text-gray-400">→</span>
              <span className="text-gray-500 italic text-sm">
                "The turtle always wins... eventually. Right? <strong>RIGHT?</strong>"
              </span>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-16 sm:mt-20 lg:mt-24">
          <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-900 mb-2 sm:mb-3 text-center">
            Technologies I've Pretended to Master
          </h3>
          <p className="text-gray-400 text-xs sm:text-sm text-center mb-6 sm:mb-8 lg:mb-10">
            (fake it till you make it, right?)
          </p>
          
          {/* Languages */}
          <div className="mb-5 sm:mb-6 lg:mb-8">
            <p className="text-xs sm:text-sm font-semibold text-gray-700 text-center mb-3 sm:mb-4">Languages</p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {[
                { name: 'C', color: 'hover:border-blue-500 hover:bg-blue-50' },
                { name: 'C++', color: 'hover:border-blue-600 hover:bg-blue-50' },
                { name: 'JavaScript', color: 'hover:border-yellow-400 hover:bg-yellow-50' },
              ].map((skill) => (
                <span
                  key={skill.name}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 bg-white border border-gray-200 rounded-full text-xs sm:text-sm text-gray-600 cursor-default transition-all duration-300 ${skill.color}`}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* Frameworks */}
          <div className="mb-5 sm:mb-6 lg:mb-8">
            <p className="text-xs sm:text-sm font-semibold text-gray-700 text-center mb-3 sm:mb-4">Frameworks</p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {[
                { name: 'React.js', color: 'hover:border-cyan-400 hover:bg-cyan-50' },
                { name: 'Node.js', color: 'hover:border-green-400 hover:bg-green-50' },
                { name: 'Express.js', color: 'hover:border-gray-500 hover:bg-gray-50' },
              ].map((skill) => (
                <span
                  key={skill.name}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 bg-white border border-gray-200 rounded-full text-xs sm:text-sm text-gray-600 cursor-default transition-all duration-300 ${skill.color}`}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* Databases */}
          <div className="mb-5 sm:mb-6 lg:mb-8">
            <p className="text-xs sm:text-sm font-semibold text-gray-700 text-center mb-3 sm:mb-4">Databases</p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {[
                { name: 'SQL', color: 'hover:border-orange-400 hover:bg-orange-50' },
                { name: 'MongoDB', color: 'hover:border-green-500 hover:bg-green-50' },
              ].map((skill) => (
                <span
                  key={skill.name}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 bg-white border border-gray-200 rounded-full text-xs sm:text-sm text-gray-600 cursor-default transition-all duration-300 ${skill.color}`}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* Dev Tools */}
          <div className="mb-5 sm:mb-6 lg:mb-8">
            <p className="text-xs sm:text-sm font-semibold text-gray-700 text-center mb-3 sm:mb-4">Dev Tools</p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {[
                { name: 'VS Code', color: 'hover:border-blue-500 hover:bg-blue-50' },
                { name: 'Git', color: 'hover:border-red-400 hover:bg-red-50' },
                { name: 'GitHub', color: 'hover:border-gray-600 hover:bg-gray-100' },
                { name: 'Colab', color: 'hover:border-yellow-500 hover:bg-yellow-50' },
              ].map((skill) => (
                <span
                  key={skill.name}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 bg-white border border-gray-200 rounded-full text-xs sm:text-sm text-gray-600 cursor-default transition-all duration-300 ${skill.color}`}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
