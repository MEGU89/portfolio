import { Flag3D, Turtle3D, Rabbit3D, RaceTrack } from './RaceElements'

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 pt-20 pb-10">
      <div className="max-w-6xl w-full flex flex-col-reverse md:flex-row items-center justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-24">
        {/* Text Content */}
        <div className="text-center flex-1 max-w-xl px-2">
          {/* Your unique 3D signature animation - Custom Graphics */}
          <div className="mb-6 sm:mb-8 flex items-center justify-center scale-75 sm:scale-100">
            <Flag3D />
            <Turtle3D className="mx-2" />
            <RaceTrack dots={8} />
            <Rabbit3D className="mx-2" />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-4 sm:mb-6 leading-tight">
            Hi, I'm <span className="font-medium">Harshit Singh</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-3 sm:mb-4 leading-relaxed">
            I design and build things{' '}
            <span className="text-gray-400 block sm:inline">(slowly, like that turtle, but surely)</span>
          </p>

          <p className="text-sm sm:text-base md:text-lg text-gray-400 italic mb-6 sm:mb-8 px-2">
            "My code compiles on the first try" — said no honest developer ever
          </p>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-600">
            <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">MCA Student</span>
            <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">Fresher™</span>
            <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">Professional Googler</span>
            <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">Stack Overflow Appreciator</span>
          </div>
        </div>

        {/* Hero 3D Avatar */}
        <div className="relative flex-shrink-0">
          {/* Avatar container - circular */}
          <div className="relative group">
            {/* Animated ring border */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400 animate-spin-slow"></div>
            
            {/* White ring */}
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full p-1 bg-white shadow-2xl">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img 
                  src="/hero-avatar.png" 
                  alt="Harshit Singh waving" 
                  className="w-full h-full object-cover object-top rounded-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="hidden sm:block absolute bottom-10 animate-bounce text-gray-400 hover:text-gray-600 transition-colors"
        aria-label="Scroll to about section"
      >
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 13l-7 7-7-7M19 5l-7 7-7-7" />
        </svg>
      </a>
    </section>
  )
}

export default Hero
