import { useState, useEffect } from 'react'
import { Link, useLocation, Outlet } from 'react-router-dom'
import { Menu, X, LogIn, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { socialLinks } from '@/lib/social'
// import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
// import { Input } from '@/components/ui/input'
// import { Label } from '@/components/ui/label'
// import { Building2 } from 'lucide-react'

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // const [setIsLoginOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

const BASE_API = import.meta.env.VITE_BASE_API_URL  || 'http://localhost:3000';

  const navLinks = [
    { name: 'Home', href: '/' },
    { 
      name: 'About', 
      href: '/about',
      dropdown: [
        { name: 'About AHITI', href: '/about' },
        { name: 'Leadership', href: '/about#leadership' },
        { name: 'Our History', href: '/about#history' },
        { name: 'Vision & Mission', href: '/about#vision-mission' },
      ]
    },
    { name: 'Courses', href: '/courses' },
    { name: 'Admissions', href: '/admissions' },
    { name: 'News', href: '/news' },
    { name: 'Contact', href: '/contact' },
  ]

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || location.pathname !== '/' ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/images/ministry-logo.png" 
                alt="Ministry of Agriculture & Livestock Development" 
                className="h-14 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <div key={link.name} className="relative">
                  {link.dropdown ? (
                    <div 
                      className="relative"
                      onMouseEnter={() => setIsAboutDropdownOpen(true)}
                      onMouseLeave={() => setIsAboutDropdownOpen(false)}
                    >
                      <Link
                        to={link.href}
                        className={`flex items-center px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-ahiti-primary/10 ${
                          isActive(link.href) ? 'text-ahiti-primary bg-ahiti-primary/10' : 
                          scrolled || location.pathname !== '/' ? 'text-gray-700' : 'text-white'
                        }`}
                      >
                        {link.name}
                        <ChevronDown className="w-4 h-4 ml-1" />
                      </Link>
                      {isAboutDropdownOpen && (
                        <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.name}
                              to={item.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-ahiti-primary/10 hover:text-ahiti-primary"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={link.href}
                      className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-ahiti-primary/10 ${
                        isActive(link.href) ? 'text-ahiti-primary bg-ahiti-primary/10' : 
                        scrolled || location.pathname !== '/' ? 'text-gray-700' : 'text-white'
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Login Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button
               
                className="bg-ahiti-secondary text-ahiti-primary hover:bg-ahiti-secondary/90 font-semibold"
              >
                <LogIn className="w-4 h-4 mr-2" />
                  <Link to={BASE_API}>Portal Login</Link>
              </Button>
               
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 rounded-lg ${scrolled || location.pathname !== '/' ? 'text-ahiti-primary' : 'text-white'}`}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t shadow-lg">
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    to={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-3 py-2 rounded-lg font-medium ${
                      isActive(link.href) 
                        ? 'bg-ahiti-primary/10 text-ahiti-primary' 
                        : 'text-gray-700 hover:bg-ahiti-primary/10 hover:text-ahiti-primary'
                    }`}
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <div className="ml-4 mt-1 space-y-1">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-ahiti-primary"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Button
             
                className="bg-ahiti-secondary text-ahiti-primary hover:bg-ahiti-secondary/90 font-semibold"
              >
                <LogIn className="w-4 h-4 mr-2" />
                  <Link to={BASE_API}>Portal Login</Link>
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-ahiti-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            {/* Logo & About */}
            <div className="md:col-span-2">
              <div className="mb-6">
                <img 
                  src="/images/ministry-logo.png" 
                  alt="Ministry of Agriculture & Livestock Development" 
                  className="h-16 w-auto"
                />
              </div>
              <p className="text-white/80 mb-6 max-w-md">
                A government institution under the Ministry of Agriculture and Livestock Development, 
                committed to training skilled veterinary paraprofessionals for Kenya's livestock sector.
              </p>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social) => (
                  <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name} className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-ahiti-secondary hover:text-ahiti-primary transition-colors">
                    {social.icon('w-5 h-5')}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><Link to="/" className="text-white/80 hover:text-ahiti-secondary transition-colors">Home</Link></li>
                <li><Link to="/about" className="text-white/80 hover:text-ahiti-secondary transition-colors">About Us</Link></li>
                <li><Link to="/courses" className="text-white/80 hover:text-ahiti-secondary transition-colors">Courses</Link></li>
                <li><Link to="/admissions" className="text-white/80 hover:text-ahiti-secondary transition-colors">Admissions</Link></li>
                <li><Link to="/news" className="text-white/80 hover:text-ahiti-secondary transition-colors">News</Link></li>
                <li><Link to="/contact" className="text-white/80 hover:text-ahiti-secondary transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h4 className="font-bold text-lg mb-6">Programs</h4>
              <ul className="space-y-3">
                <li><Link to="/courses" className="text-white/80 hover:text-ahiti-secondary transition-colors">Diploma in Animal Health</Link></li>
                <li><Link to="/courses" className="text-white/80 hover:text-ahiti-secondary transition-colors">Certificate in Animal Health</Link></li>
                <li><Link to="/courses" className="text-white/80 hover:text-ahiti-secondary transition-colors">Artificial Insemination</Link></li>
                <li><Link to="/courses" className="text-white/80 hover:text-ahiti-secondary transition-colors">Poultry Farming</Link></li>
                <li><Link to="/courses" className="text-white/80 hover:text-ahiti-secondary transition-colors">Bee Farming</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-white/60 text-sm">
                © 2025 AHITI Ndomba. All rights reserved. Ministry of Agriculture & Livestock Development.
              </p>
              <div className="flex items-center space-x-6 text-sm text-white/60">
                <a href="#" className="hover:text-ahiti-secondary transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-ahiti-secondary transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Login Portal Modal */}
      {/* <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-ahiti-primary text-2xl">Portal Login</DialogTitle>
          </DialogHeader>
          <div className="space-y-6 py-4">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-ahiti-primary/10 rounded-full flex items-center justify-center">
                <Building2 className="w-10 h-10 text-ahiti-primary" />
              </div>
            </div>
            <div>
              <Label htmlFor="username" className="text-gray-700">Username / Email</Label>
              <Input id="username" placeholder="Enter your username" className="mt-2" />
            </div>
            <div>
              <Label htmlFor="password" className="text-gray-700">Password</Label>
              <Input id="password" type="password" placeholder="Enter your password" className="mt-2" />
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded border-gray-300 text-ahiti-primary focus:ring-ahiti-primary" />
                <span className="text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-ahiti-primary hover:underline">Forgot password?</a>
            </div>
            <Button className="w-full bg-ahiti-primary text-white hover:bg-ahiti-dark">
              <LogIn className="w-4 h-4 mr-2" />
              Sign In
            </Button>
            <div className="text-center text-sm text-gray-500">
              <p>Access student portal, course materials, and more.</p>
            </div>
          </div>
        </DialogContent>
      </Dialog> */}
    </div>
  )
}

export default Layout
