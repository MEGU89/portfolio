const Projects = () => {
  const featuredProjects = [
    {
      title: 'PulseBank – Blood Donation Platform',
      description: 'Built a full-stack blood donation platform with real-time request and notification system. Implemented JWT authentication, role-based access, and RESTful APIs. Integrated Socket.IO for live updates and MongoDB for managing users, requests, and donations.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io'],
      github: 'https://github.com/MEGU89/PulseBank---',
      live: '#',
      images: ['/Pulsbank1.jpeg', '/pulsebank2.jpeg', '/plusebank3.jpeg', '/pulsebank4.jpeg'],
      date: 'Sep 2025',
    },
    {
      title: 'Campus Vault',
      description: 'Worked on the frontend for a platform enabling students to upload certificates and share interview experiences. Built dashboards, upload modules, and student profiles using React.js. Ensured responsive design and smooth user experience across devices.',
      tech: ['React.js', 'JavaScript', 'Node.js', 'MongoDB'],
      github: 'https://github.com/MEGU89/CampusVault',
      live: '#',
      images: ['/campusvault.png'],
      date: 'Mar 2025',
    },
    {
      title: 'College Leave Approval System',
      description: 'Developed frontend interface for students and faculty leave management. Implemented form validations, status displays, and real-time notifications. Built clean, responsive UI/UX for multi-role access.',
      tech: ['React.js', 'JavaScript', 'MongoDB'],
      github: 'https://github.com/MEGU89/College-Leave-ERP',
      live: '#',
      images: ['/leave-system.png'],
      date: 'Sep 2024',
    },
  ]

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Featured Projects */}
        <div className="mb-16 sm:mb-20 lg:mb-24">
          <div className="section-header mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900">Featured Projects</h2>
          </div>
          
          <p className="text-center text-gray-500 italic mb-8 sm:mb-12 lg:mb-16 text-base sm:text-lg px-2">
            "The ones good enough to show recruiters"
          </p>

          <div className="space-y-12 sm:space-y-16 lg:space-y-20">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-6 sm:gap-8 lg:gap-16 items-center`}
              >
                {/* Project Image */}
                <div className="flex-1 w-full">
                  <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                    {project.images ? (
                      project.images.length === 1 ? (
                        <img 
                          src={project.images[0]} 
                          alt={`${project.title} screenshot`}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="slideshow-container">
                          {project.images.map((img, i) => (
                            <img 
                              key={i}
                              src={img} 
                              alt={`${project.title} screenshot ${i + 1}`}
                              className="slideshow-image"
                            />))}
                        </div>
                      )
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-500">
                        <div className="text-center p-4">
                          <div className="text-4xl mb-2">🖼️</div>
                          <p className="text-sm">Project Screenshot</p>
                          <p className="text-xs text-gray-400">(Coming soon)</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Project Info */}
                <div className={`flex-1 text-center lg:text-left ${index % 2 === 0 ? '' : 'lg:text-right'}`}>
                  <div className={`flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 mb-2 ${index % 2 === 0 ? '' : 'lg:justify-end'}`}>
                    <h3 className="text-xl sm:text-2xl font-medium text-gray-900">{project.title}</h3>
                    {project.date && <span className="text-xs sm:text-sm text-gray-500">({project.date})</span>}
                  </div>
                  <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">{project.description}</p>
                  <div className={`flex flex-wrap justify-center lg:justify-start gap-2 mb-3 sm:mb-4 ${index % 2 === 0 ? '' : 'lg:justify-end'}`}>
                    {project.tech.map((tech, i) => (
                      <span key={i} className="text-xs sm:text-sm text-gray-500 bg-gray-100 px-2 py-0.5 rounded">{tech}</span>
                    ))}
                  </div>
                  <div className={`flex justify-center lg:justify-start gap-4 ${index % 2 === 0 ? '' : 'lg:justify-end'}`}>
                    <a href={project.github} className="text-gray-600 hover:text-gray-900 transition-colors" aria-label="GitHub">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href={project.live} className="text-gray-600 hover:text-gray-900 transition-colors" aria-label="Live Demo">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <div className="section-header mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900">Other Projects</h2>
          </div>
          
          <div className="text-center py-8 sm:py-12 lg:py-16">
            <div className="text-4xl sm:text-5xl lg:text-6xl mb-4 sm:mb-6">🚧</div>
            <h3 className="text-xl sm:text-2xl font-medium text-gray-700 mb-3 sm:mb-4">Coming Soon™</h3>
            <p className="text-gray-500 max-w-lg mx-auto mb-2 text-sm sm:text-base px-4">
              "Currently cooking up something awesome... or probably just debugging why it doesn't work."
            </p>
            <p className="text-gray-400 text-xs sm:text-sm italic px-4">
              Translation: I have ideas, but Netflix keeps calling.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
