import React,{useMemo, useEffect, useState} from 'react';
import { motion } from 'framer-motion';


const randomInRange = (min, max) => {
    return Math.random() * (max - min) + min;
  };
const Star = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, yaxix: 0 });

    useEffect(() => {
      const handleMouseMove = (event) => {
        setMousePosition({ x: event.clientX, yaxix: event.clientY });
      };
  
      document.addEventListener('mousemove', handleMouseMove);
  
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
      };
    }, []);


  const starVariants = {
    initial: {
      opacity: 0,
      y: -100,
    },
    animate: {
      opacity: 1,
      y: 0,
      x: mousePosition.x / window.innerWidth * 50, 
      yaxix: mousePosition.y / window.innerHeight * 50,
      
    },
    hover: {
        scale: 1.5,
      },
  };

  const starStyle = useMemo(() => ({
    width: `${randomInRange(0.25, 0.25)}rem`,
    height: `${randomInRange(0.25, 0.25)}rem`,
    background: `rgba(255, 255, 255, ${randomInRange(0.25, 0.25)})`,
    borderRadius: '50%',
    position: 'absolute',
    top: `${randomInRange(0, 92)}%`,
    left: `${randomInRange(0, 92)}%`,
    willChange: 'opacity, transform',
   
  }), []);
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      variants={starVariants}
      transition={{ duration: 0.7 }}
      style={starStyle}
    />
  );
};

export default Star;
