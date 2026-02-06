import { Flag3D, Turtle3D, Rabbit3D } from './RaceElements'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="py-6 sm:py-8 bg-gray-50 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        {/* 3D Signature - Custom Graphics */}
        <div className="mb-3 sm:mb-4 flex items-center justify-center gap-1.5 sm:gap-2 transform scale-50 sm:scale-75">
          <Flag3D />
          <Turtle3D />
          <div className="flex gap-1 mx-2">
            <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
            <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
            <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
          </div>
          <Rabbit3D />
        </div>
        
        <p className="text-gray-500 text-xs sm:text-sm">
          Harshit Singh · {currentYear}
        </p>
        
        <p className="text-gray-300 text-xs mt-3 sm:mt-4 px-4">
          {/* Easter egg for those who read footers */}
          <span className="hover:text-gray-500 transition-colors cursor-default">
            If you're reading this, thank you for scrolling all the way down. You're already my favorite recruiter. 💙
          </span>
        </p>
      </div>
    </footer>
  )
}

export default Footer
