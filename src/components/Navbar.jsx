import { useState } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Animated Avatar */}
          <a href="#" className="flex items-center gap-2 px-2 py-1 border border-gray-300 rounded-full hover:border-teal-500 hover:shadow-lg transition-all group">
            <div className="w-8 h-8 rounded-full overflow-hidden bg-gradient-to-r from-teal-400 to-cyan-400 p-0.5">
              <img 
                src={`${import.meta.env.BASE_URL}HII.png`}
                alt="HS" 
                className="w-full h-full rounded-full object-cover bg-white animate-wave-logo"
              />
            </div>
            <span className="text-sm font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent group-hover:from-teal-500 group-hover:to-cyan-500 transition-all">HS</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6 text-sm text-gray-600">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-gray-900 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <a
                href="/HarshitSingh_MCA.pdf"
                target="_blank"
                className="btn-outline text-sm"
              >
                Resume
              </a>
              <a href="#contact" className="btn-primary text-sm">
                Hire Me
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2.5 -mr-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 sm:mt-4 pb-4 border-t border-gray-100 pt-4">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 hover:text-gray-900 py-2.5 px-2 min-h-[44px] flex items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex gap-3 mt-3">
                <a href="/HarshitSingh_MCA.pdf" target="_blank" className="btn-outline text-sm flex-1 text-center py-2.5 min-h-[44px] flex items-center justify-center">
                  Resume
                </a>
                <a href="#contact" onClick={() => setIsMenuOpen(false)} className="btn-primary text-sm flex-1 text-center py-2.5 min-h-[44px] flex items-center justify-center">
                  Hire Me
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
