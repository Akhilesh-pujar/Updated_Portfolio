import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { CTA } from "../components";
import { projects } from "../constants";
import { arrow } from "../assets/icons";

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section className='max-container'>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className='head-text'>
          My{" "}
          <span className='blue-gradient_text drop-shadow font-semibold'>
            Projects
          </span>
        </h1>
      </motion.div>

      <motion.p
        className='text-slate-500 mt-4 leading-relaxed text-lg'
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        I've embarked on numerous projects throughout the years, from{" "}
        <span className="text-purple-500 font-semibold">IoT innovations with ESP32 and Machine Learning</span> to{" "}
        <span className="text-blue-500 font-semibold">full-stack web applications</span>.
        These are the ones I hold closest to my heart. Many of them are open-source, so feel free to
        explore the codebase and contribute your ideas for further enhancements!
      </motion.p>

      {/* Featured Project - E-Nose */}
      <motion.div
        className="mt-12 p-6 rounded-3xl relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%)',
          border: '1px solid rgba(16, 185, 129, 0.2)',
        }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        whileHover={{
          boxShadow: '0 20px 40px rgba(16, 185, 129, 0.15)',
          borderColor: 'rgba(16, 185, 129, 0.4)',
        }}
      >
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-green-500/20 text-green-500 text-xs font-semibold">
          🔬 Featured Research
        </div>
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400 to-cyan-500 flex items-center justify-center flex-shrink-0">
            <span className="text-2xl">🧬</span>
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-poppins font-bold text-slate-800">
              E-Nose: Bacterial Air Quality System
            </h3>
            <p className="mt-2 text-slate-600 leading-relaxed">
              A <span className="text-green-600 font-semibold">novel low-cost VOC-based electronic nose system</span> for
              real-time bacterial air quality assessment. Built using ESP32 microcontroller with custom Machine Learning
              models for bacterial classification. Features a working hardware prototype with AI-powered detection capabilities.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {['ESP32', 'Machine Learning', 'IoT', 'Python', 'TensorFlow'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-green-500/10 text-green-600 border border-green-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
            <Link
              to="https://github.com/Akhilesh-pujar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-green-600 font-semibold hover:text-green-500 transition-colors"
            >
              View Project
              <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Other Projects Grid */}
      <motion.div
        className='grid md:grid-cols-2 gap-8 my-16'
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.slice(1).map((project, index) => (
          <motion.div
            className='group relative p-6 rounded-2xl transition-all duration-500'
            key={project.name}
            variants={cardVariants}
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(248,250,252,0.9) 100%)',
              border: '1px solid rgba(226, 232, 240, 0.8)',
            }}
            whileHover={{
              y: -8,
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
            }}
          >
            {/* Gradient overlay on hover */}
            <div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%)',
              }}
            />

            <div className='flex items-start gap-4 relative z-10'>
              <motion.div
                className='block-container w-14 h-14 flex-shrink-0'
                whileHover={{ rotate: 5 }}
              >
                <div className={`btn-back rounded-xl ${project.theme}`} />
                <div className='btn-front rounded-xl flex justify-center items-center'>
                  <img
                    src={project.iconUrl}
                    alt={project.name}
                    className='w-1/2 h-1/2 object-contain'
                  />
                </div>
              </motion.div>

              <div className='flex-1'>
                <h4 className='text-xl font-poppins font-semibold text-slate-800 group-hover:text-blue-600 transition-colors'>
                  {project.name}
                </h4>
                <p className='mt-2 text-slate-500 text-sm leading-relaxed'>{project.description}</p>
                <div className='mt-4 flex items-center gap-2 font-poppins'>
                  <Link
                    to={project.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-500 transition-colors group/link'
                  >
                    <span>Live Link</span>
                    <motion.img
                      src={arrow}
                      alt='arrow'
                      className='w-4 h-4 object-contain'
                      whileHover={{ x: 4 }}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default Projects;
