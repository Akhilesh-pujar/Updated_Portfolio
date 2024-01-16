import React from 'react';
import { motion } from 'framer-motion';

const Title = () => {
  const titleVariants = {
    hidden: { opacity: 0, z: -10 },
    visible: { opacity: 1, z: 0 },
 
  };

  return (
    <motion.h1
      initial="hidden"
      animate="visible"
      variants={titleVariants}
      transition={{ duration: 1 ,  delay: 0.4, ease:"easeInOut" }}
   
    >
    Hello  
    </motion.h1>
  );
};

export default Title;
