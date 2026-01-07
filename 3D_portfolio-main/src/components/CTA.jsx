import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <motion.section
      className='cta relative overflow-hidden'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      {/* Background gradient decoration */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        <p className='cta-text'>
          <span className="blue-gradient_text">Open to collaborate</span> on exciting projects! <br className='sm:block hidden' />
          Let's build something <span className="purple-gradient_text">amazing</span> together!
        </p>
      </div>

      <Link to='/contact'>
        <motion.button
          className="relative px-8 py-4 rounded-full font-semibold text-white overflow-hidden group"
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            boxShadow: '0 4px 20px rgba(102, 126, 234, 0.4)',
          }}
          whileHover={{
            scale: 1.05,
            boxShadow: '0 6px 30px rgba(102, 126, 234, 0.6)',
          }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Shimmer effect */}
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          <span className="relative flex items-center gap-2">
            Get In Touch
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </motion.button>
      </Link>
    </motion.section>
  );
};

export default CTA;
