import { NavLink } from "react-router-dom";



const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/' className="w-10 h-10 object-contain items-center  text-white flex font-semibold justify-center rounded-lg">
        <p className=' blue-gradient_text' >ASP</p>
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium bg-background text-zinc-500'>
        <NavLink to='/about' >
          About
        </NavLink>
        <NavLink to='/projects' className= "text-zinc-500">
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
