import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <header className='header'>
      <motion.div
        initial={{
          x: -100,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          ease: [0.6, -0.05, 0.01, 0.99],
        }}
        className='flex flex-row items-center'
      >
        <NavLink
          to='/'
          className="group relative w-12 h-12 flex items-center justify-center rounded-xl transition-all duration-300"
          style={{
            background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.9) 0%, rgba(118, 75, 162, 0.9) 100%)',
            boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
          }}
        >
          <span className='text-lg font-bold text-white group-hover:scale-110 transition-transform'>
            ASP
          </span>
          {/* Glow on hover */}
          <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              boxShadow: '0 0 25px rgba(102, 126, 234, 0.6)',
            }}
          />
        </NavLink>
      </motion.div>

      <motion.div
        initial={{
          x: 100,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          ease: [0.6, -0.05, 0.01, 0.99],
        }}
        className='flex flex-row items-center'
      >
        <nav
          className='flex items-center gap-1 p-1.5 rounded-full'
          style={{
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
            border: '1px solid rgba(255, 255, 255, 0.8)',
          }}
        >
          <NavLink
            to='/about'
            className={({ isActive }) =>
              `px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${isActive
                ? 'bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white shadow-lg'
                : 'text-slate-700 hover:text-white hover:bg-gradient-to-r hover:from-[#667eea] hover:to-[#764ba2]'
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to='/projects'
            className={({ isActive }) =>
              `px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${isActive
                ? 'bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white shadow-lg'
                : 'text-slate-700 hover:text-white hover:bg-gradient-to-r hover:from-[#667eea] hover:to-[#764ba2]'
              }`
            }
          >
            Projects
          </NavLink>
          <NavLink
            to='/contact'
            className={({ isActive }) =>
              `px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${isActive
                ? 'bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white shadow-lg'
                : 'text-slate-700 hover:text-white hover:bg-gradient-to-r hover:from-[#667eea] hover:to-[#764ba2]'
              }`
            }
          >
            Contact
          </NavLink>
        </nav>
      </motion.div>
    </header>
  );
};

export default Navbar;
