const Education = () => {
  const education = [
    {
      degree: 'Master of Computer Applications',
      institution: 'KIET Group of Institutions',
      location: 'Ghaziabad, Uttar Pradesh',
      period: 'Sep 2024 – May 2026',
      grade: 'Pursuing',
      position: 'left',
      image: `${import.meta.env.BASE_URL}kiet logo.png`,
    },
    {
      degree: 'Bachelor of Computer Applications',
      institution: 'Dr. Ram Manohar Lohia Avadh University',
      location: 'Ayodhya, Uttar Pradesh',
      period: 'Aug 2020 – Sep 2023',
      grade: 'Percentage: 70.06%',
      position: 'right',
      image: `${import.meta.env.BASE_URL}bca logo.png`,
    },
    {
      degree: 'Intermediate',
      institution: 'PT. Mata Prasad Tripathi Rajkaran V.P Inter College',
      location: 'Ayodhya, Uttar Pradesh',
      period: 'Apr 2019 – Jun 2020',
      grade: 'Percentage: 77.80%',
      position: 'left',
      image: `${import.meta.env.BASE_URL}12th school logo.png`,
    },
    {
      degree: 'High School',
      institution: 'O.P.S. Intermediate College',
      location: 'Ayodhya, Uttar Pradesh',
      period: 'Apr 2017 – Jun 2018',
      grade: 'Percentage: 77.67%',
      position: 'right',
      image: `${import.meta.env.BASE_URL}ops 10 logo.png`,
    },
  ]

  return (
    <section id="education" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="section-header mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 whitespace-nowrap">Education</h2>
        </div>
        
        <p className="text-center text-gray-500 italic mb-10 sm:mb-16 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg px-4">
          "Where I learned that Ctrl+C and Ctrl+V are the most important shortcuts"
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Center line - desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200"></div>
          
          {/* Left line - mobile */}
          <div className="md:hidden absolute left-4 w-0.5 h-full bg-gray-200"></div>

          <div className="space-y-6 sm:space-y-8 md:space-y-12">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 ${
                  edu.position === 'right' ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Mobile timeline dot */}
                <div className="md:hidden absolute left-4 transform -translate-x-1/2">
                  <div className="w-3 h-3 bg-teal-400 rounded-full border-2 border-white shadow"></div>
                </div>

                {/* Content */}
                <div className={`flex-1 ml-8 md:ml-0 ${edu.position === 'right' ? 'md:text-left' : 'md:text-right'}`}>
                  <div className={`bg-white p-4 sm:p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow ${
                    edu.position === 'left' ? 'md:mr-8' : 'md:ml-8'
                  }`}>
                    <div className={`flex items-center gap-3 sm:gap-4 mb-3 ${edu.position === 'left' ? 'md:flex-row-reverse' : ''}`}>
                      <img 
                        src={edu.image} 
                        alt={edu.institution} 
                        className="w-10 h-10 sm:w-14 sm:h-14 object-contain rounded-lg bg-gray-50 p-1 flex-shrink-0"
                      />
                      <div className={edu.position === 'left' ? 'md:text-right' : ''}>
                        <h3 className="text-base sm:text-lg md:text-xl font-medium text-gray-900">{edu.degree}</h3>
                        <p className="text-teal-600 font-medium text-xs sm:text-sm md:text-base">{edu.institution}</p>
                      </div>
                    </div>
                    <p className="text-gray-500 text-xs sm:text-sm mb-2">{edu.location}</p>
                    <div className={`flex flex-wrap items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-400 ${edu.position === 'left' ? 'md:justify-end' : ''}`}>
                      <span>{edu.period}</span>
                      <span>•</span>
                      <span className="text-teal-600 font-medium">{edu.grade}</span>
                    </div>
                  </div>
                </div>

                {/* Timeline dot - desktop */}
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
        <div className="mt-10 sm:mt-16 text-center">
          <p className="text-gray-400 text-xs sm:text-sm">
            🎓 <em>Proof that I can sit through lectures for 3+ years!</em>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Education
