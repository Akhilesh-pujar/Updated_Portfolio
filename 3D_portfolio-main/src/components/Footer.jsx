import { Link } from "react-router-dom";

import { socialLinks } from "../constants";

const Footer = () => {
  return (
    <footer className='footer font-poppins'>
      <hr className='border-slate-200' />

      <div className='footer-container'>
        <p>
          © 2023 <strong>Akhilesh S Pujar</strong>. All rights reserved.
        </p>

        <div className='flex gap-3 justify-center items-center'>
          {socialLinks.map((link) => (
            <Link key={link.name} to={link.link} target='_blank'>
              <img
                src={link.iconUrl}
                alt={link.name}
                className='w-6 h-6 object-contain'
              />
            </Link>
          ))}
          <Link to="https://leetcode.com/Akhilesh_pujar/" target="_blank" className="text-xl text-amber-500 font-semibold"><span className="text-xl text-gray-800 font-semibold">Leet</span>code</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
