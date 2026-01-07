import { Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Loader } from "../components";
import Title from "../components/Title";
import DynamicSkyBackground from "../components/DynamicSkyBackground";

const Home = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour >= 5 && hour < 12) return "Good Morning";
    if (hour >= 12 && hour < 17) return "Good Afternoon";
    if (hour >= 17 && hour < 21) return "Good Evening";
    return "Good Night";
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  // Get time-based gradient for text that matches sky
  const getTimeGradient = () => {
    const hour = currentTime.getHours();
    if (hour >= 5 && hour < 7) {
      // Dawn - purple to orange
      return 'linear-gradient(90deg, #4a3853, #ff7e5f, #feb47b)';
    } else if (hour >= 7 && hour < 10) {
      // Morning - green to blue
      return 'linear-gradient(90deg, #48BB78, #4A90D9, #87CEEB)';
    } else if (hour >= 10 && hour < 16) {
      // Daytime - sky blue
      return 'linear-gradient(90deg, #4A90D9, #00c6ff, #0072ff)';
    } else if (hour >= 16 && hour < 18) {
      // Afternoon - warm
      return 'linear-gradient(90deg, #F4A460, #FF6B6B, #5D8AA8)';
    } else if (hour >= 18 && hour < 20) {
      // Sunset - vibrant
      return 'linear-gradient(90deg, #E74C3C, #F39C12, #9B59B6)';
    } else if (hour >= 20 && hour < 22) {
      // Dusk - purple
      return 'linear-gradient(90deg, #302b63, #667eea, #764ba2)';
    } else {
      // Night - cool
      return 'linear-gradient(90deg, #00c6ff, #667eea, #764ba2)';
    }
  };

  const isDaytime = currentTime.getHours() >= 6 && currentTime.getHours() < 18;

  return (
    <div className='relative flex flex-col items-center justify-center w-screen h-screen overflow-hidden'>
      {/* Dynamic Sky Background */}
      <DynamicSkyBackground />

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 py-12">
        {/* Greeting based on time with matching gradient */}
        <motion.p
          className="text-2xl sm:text-3xl font-bold mb-4 text-transparent bg-clip-text"
          style={{ backgroundImage: getTimeGradient() }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {getGreeting()}, Visitor! 
        </motion.p>


        {/* Main content */}
        <motion.div
          className="flex flex-col items-center justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Name with adaptive glow effect */}
          <motion.div
            className="relative"
            variants={itemVariants}
          >
            <h1
              className={`z-10 text-5xl sm:text-7xl md:text-9xl font-bold drop-shadow-2xl ${isDaytime
                ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500'
                : 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600'
                }`}
            >
              <Title />
            </h1>
            {/* Glow behind text */}
            <div className="absolute inset-0 blur-3xl opacity-30 pointer-events-none">
              <span className={`text-5xl sm:text-7xl md:text-9xl font-bold ${isDaytime ? 'text-purple-500' : 'text-cyan-400'}`}>
                <Title />
              </span>
            </div>
          </motion.div>

          {/* Role badges */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mt-8"
            variants={itemVariants}
          >
            {['Full Stack Developer', 'Cyber Security', 'React.js', 'Django', 'PostgreSQL'].map((tag, index) => (
              <motion.span
                key={tag}
                className={`px-4 py-2 rounded-full text-sm font-medium backdrop-blur-md border ${isDaytime
                  ? 'bg-white/70 border-slate-200 text-slate-700 shadow-lg'
                  : 'bg-white/10 border-white/20 text-white/90'
                  }`}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: isDaytime ? 'rgba(102, 126, 234, 0.2)' : 'rgba(102, 126, 234, 0.3)',
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + index * 0.1 }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>



          {/* CTA Buttons */}
          {/* <motion.div
            className="flex flex-wrap justify-center gap-4 mt-10"
            variants={itemVariants}
          >
            <Link to="/projects">
              <motion.button
                className="px-8 py-3 rounded-full font-semibold text-white transition-all duration-300"
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
                View Projects
              </motion.button>
            </Link>
            <Link to="/about">
              <motion.button
                className={`px-8 py-3 rounded-full font-semibold backdrop-blur-md transition-all duration-300 ${isDaytime
                  ? 'text-slate-700 border border-slate-300 bg-white/70 hover:bg-white'
                  : 'text-white border border-white/20 bg-white/10 hover:bg-white/20'
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                About Me
              </motion.button>
            </Link>
          </motion.div> */}

          {/* Stats */}
          {/* <motion.div
            className="flex flex-wrap justify-center gap-8 mt-12"
            variants={itemVariants}
          >
            {[
              { value: '1.6+', label: 'Years Experience' },
              { value: '10+', label: 'Projects Completed' },
              { value: 'M.Sc', label: 'Cyber Security' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className={`text-center px-4 py-2 rounded-xl backdrop-blur-sm ${isDaytime ? 'bg-white/50' : 'bg-white/5'
                  }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8 + index * 0.2 }}
              >
                <p className={`text-3xl sm:text-4xl font-bold ${isDaytime
                  ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600'
                  : 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500'
                  }`}>
                  {stat.value}
                </p>
                <p className={`text-sm mt-1 ${isDaytime ? 'text-slate-600' : 'text-white/60'}`}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div> */}
        </motion.div>

        {/* Time indicator */}
        <motion.div
          className={`absolute bottom-8 right-8 text-sm font-medium ${isDaytime ? 'text-slate-500' : 'text-white/50'
            }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          {currentTime.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
          })}
        </motion.div>
      </div>

      {/* Scroll indicator */}
     
    </div>
  );
};

export default Home;
