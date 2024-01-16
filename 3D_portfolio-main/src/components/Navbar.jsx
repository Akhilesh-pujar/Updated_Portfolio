import { NavLink } from "react-router-dom";
import {motion} from "framer-motion"


const Navbar = () => {
  return (
    <header className='header'>
      <motion.div
       initial={{
        x:-500,
        opacity:0,
        scale:0.5
      }} 
      animate={{
        x:0,
        opacity:1,
        scale:1
      }}
      transition={{
        duration:1.5,
      }}
      className='flex flex-row items-center'
      >
      <NavLink to='/' className="w-10 h-10 object-contain items-center  text-white flex font-semibold justify-center rounded-lg">
        <p className=' blue-gradient_text' >ASP</p>
      </NavLink>


      </motion.div>
      <motion.div
       initial={{
        x:500,
        opacity:0,
        scale:0.5
      }} 
      animate={{
        x:0,
        opacity:1,
        scale:1
      }}
      transition={{
        duration:1.5,
      }}
      className='flex flex-row items-center cursor-pointer'>
      
      <nav className='flex text-lg gap-7 font-medium bg-background text-zinc-500'>
        <NavLink to='/about' >
          About
        </NavLink>
        <NavLink to='/projects' className= "text-zinc-500">
          Projects
        </NavLink>
      </nav>
      </motion.div>
      
    </header>
  );
};

export default Navbar;
