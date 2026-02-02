import { NavLink } from 'react-router-dom';
import { Wrench, Mail, Home, Building2, CircleUser } from "lucide-react"

const Navbar = () => {

  // Base styling for links
  const baseLink = "flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-300 border border-transparent";

  // Active: Vibrant Magenta background with white text (High Contrast)
  const activeLink = "bg-[#e91e63] text-white font-bold shadow-[0_0_15px_rgba(233,30,99,0.5)] scale-105";

  // Inactive: White text with a transparent background, hover turns Teal
  const inactiveLink = "text-gray-300 hover:text-white hover:bg-[#1fb4b4]/20 hover:border-[#1fb4b4]/50";

  return (
    <nav className="sticky top-0 z-50 bg-[#120d26] border-b border-gray-800 px-6 py-4 flex items-center justify-between shadow-lg">

      {/* Text Branding with Icon */}
      <NavLink to="/" className="flex items-center gap-3 group">
        <div className="bg-gradient-to-br from-[#e91e63] to-[#1fb4b4] p-2.5 rounded-xl group-hover:scale-110 transition-transform duration-300">
          <Building2 size={24} className="text-white" strokeWidth={2.5} />
        </div>
        <div className="hidden md:block">
          <p className="text-white font-black text-lg leading-none">Sam Bowie</p>
          <p className="text-[#1fb4b4] text-xs font-bold tracking-wider">CONSULTING</p>
        </div>
      </NavLink>

      {/* Navigation Links */}
      <div className="flex items-center gap-3 bg-white/5 p-1.5 rounded-full backdrop-blur-sm border border-white/10">
        <NavLink
          to="/"
          className={({ isActive }) => `${baseLink} ${isActive ? activeLink : inactiveLink}`}
        >
          <Home size={18} />
          <span className="hidden sm:inline">Home</span>
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => `${baseLink} ${isActive ? activeLink : inactiveLink}`}
        >
          <CircleUser size={18} />
          <span className="hidden sm:inline">About</span>
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