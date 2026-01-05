import { NavLink } from 'react-router-dom';
import logo from '../assets/images/sam-bowie-logo.png';
import { Wrench, Mail, Home } from "lucide-react"

const Navbar = () => {

  const baseLink = "flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 hover:bg-gray-100";
  const activeLink = "bg-orange-200 text-orange-700 font-bold";
  const inactiveLink = "text-gray-600";

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <NavLink to="/" className="flex items-center">
        <img
          src={logo}
          alt="Sam Bowie Consulting"
          className="h-20 md:h-22 w-auto object-contain transition-transform hover:scale-105" />
      </NavLink>

      {/* Navigation Links */}
      <div className="flex items-center gap-2">
        <NavLink
          to="/"
          className={({ isActive }) => `${baseLink} ${isActive ? activeLink : inactiveLink}`}
        >
          <Home size={18} />
          <span className="hidden sm:inline">Home</span>
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) => `${baseLink} ${isActive ? activeLink : inactiveLink}`}
        >
          <Wrench size={18} />
          <span className="hidden sm:inline">Projects</span>
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) => `${baseLink} ${isActive ? activeLink : inactiveLink}`}
        >
          <Mail size={18} />
          <span className="hidden sm:inline">Contact</span>
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar;