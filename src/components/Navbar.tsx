import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-lg shadow-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <NavLink to="/" className="flex-shrink-0 flex items-center gap-3 hover:opacity-80 transition-opacity duration-200">
            <img 
              src="/icon.png" 
              alt="IT25 Logo" 
              className="h-10 w-10 object-contain"
            />
            <h1 className="text-xl font-bold text-primary-700 tracking-tight">
              PolicyHub
            </h1>
          </NavLink>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-primary-600/10 text-primary-700 backdrop-blur-sm'
                      : 'text-gray-700 hover:bg-gray-900/5 hover:backdrop-blur-sm'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:bg-gray-900/5 hover:backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

