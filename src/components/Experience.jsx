const Experience = () => {
  const experiences = [
    {
      title: 'Web Developer Intern',
      company: 'Codec Technologies',
      location: 'Remote',
      period: 'Jun 2025 – Aug 2025',
      description: [
        'Developed a Real-Time Chat Application using React.js and Node.js during the internship',
        'Designed responsive user interfaces and optimized performance for seamless user experience',
        'Integrated frontend with backend via Socket.io for live chat functionality',
      ],
      position: 'left',
    },
  ]

  return (
    <section id="experience" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="section-header mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900">Experience</h2>
        </div>
        
        <p className="text-center text-gray-500 italic mb-8 sm:mb-12 lg:mb-16 max-w-2xl mx-auto text-base sm:text-lg px-2">
          "Building things one bug at a time"
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Mobile left line */}
          <div className="md:hidden absolute left-4 top-0 w-0.5 h-full bg-gray-200"></div>
          {/* Desktop center line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200"></div>

          <div className="space-y-8 sm:space-y-10 lg:space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 ${
                  exp.position === 'right' ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Mobile timeline dot */}
                <div className="md:hidden absolute left-4 transform -translate-x-1/2">
                  <div className="w-3 h-3 bg-teal-400 rounded-full border-2 border-white shadow"></div>
                </div>

                {/* Content */}
                <div className={`flex-1 ml-8 md:ml-0 ${exp.position === 'right' ? 'md:text-left' : 'md:text-right'}`}>
                  <div className={`bg-gray-50 p-4 sm:p-5 lg:p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow ${
                    exp.position === 'left' ? 'md:mr-8' : 'md:ml-8'
                  }`}>
                    <h3 className="text-lg sm:text-xl font-medium text-gray-900">{exp.title}</h3>
                    <p className="text-teal-600 font-medium mb-1 text-sm sm:text-base">{exp.company}</p>
                    <div className={`flex flex-wrap items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4 ${exp.position === 'left' ? 'md:justify-end' : ''}`}>
                      <span>{exp.period}</span>
                      <span>•</span>
                      <span>{exp.location}</span>
                    </div>
                    <ul className={`space-y-1.5 sm:space-y-2 text-gray-600 text-xs sm:text-sm ${exp.position === 'left' ? 'md:text-right' : ''}`}>
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-teal-500 flex-shrink-0">▹</span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Desktop Timeline dot */}
                <div className="hidden md:flex items-center justify-center">
                  <div className="w-4 h-4 bg-teal-400 rounded-full border-4 border-white shadow"></div>
                </div>

                {/* Empty space for layout */}
                <div className="hidden md:block flex-1"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Fun note */}
        <div className="mt-10 sm:mt-12 lg:mt-16 text-center">
          <p className="text-gray-400 text-xs sm:text-sm">
            💼 <em>Every project is a learning experience!</em>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Experience
