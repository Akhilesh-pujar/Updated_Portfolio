import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import {animate, motion} from "framer-motion"
import sakura from "../assets/sakura.mp3";
import { HomeInfo, Loader } from "../components";
import { soundoff, soundon } from "../assets/icons";
import { Bird, Island, Plane, Sky } from "../models";
import Star from "../components/Star";
import Title from "../components/Title";

const Home = () => {
  // const audioRef = useRef(new Audio(sakura));
  // audioRef.current.volume = 0.4;
  // audioRef.current.loop = true;

  // const [currentStage, setCurrentStage] = useState(1);
  // const [isRotating, setIsRotating] = useState(false);
  // const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  // useEffect(() => {
  //   if (isPlayingMusic) {
  //     audioRef.current.play();
  //   }

  //   return () => {
  //     audioRef.current.pause();
  //   };
  // }, [isPlayingMusic]);

  // const adjustBiplaneForScreenSize = () => {
  //   let screenScale, screenPosition;

   
  //   if (window.innerWidth < 768) {
  //     screenScale = [1.5, 1.5, 1.5];
  //     screenPosition = [0, -1.5, 0];
  //   } else {
  //     screenScale = [3, 3, 3];
  //     screenPosition = [0, -4, -4];
  //   }

  //   return [screenScale, screenPosition];
  // };

  // const adjustIslandForScreenSize = () => {
  //   let screenScale, screenPosition;

  //   if (window.innerWidth < 768) {
  //     screenScale = [0.9, 0.9, 0.9];
  //     screenPosition = [0, -6.5, -43.4];
  //   } else {
  //     screenScale = [1, 1, 1];
  //     screenPosition = [0, -6.5, -43.4];
  //   }

  //   return [screenScale, screenPosition];
  // };

  // const [biplaneScale, biplanePosition] = adjustBiplaneForScreenSize();
  // const [islandScale, islandPosition] = adjustIslandForScreenSize();

   const StarCount = 90;
 
 
  return (
    <div 
    className=' bg-black flex flex-col items-center 
    justify-center w-screen
     h-screen overflow-hidden bg-gradient-to-tl from-black
     via-zinc-600/20 to-black'>
        {Array.from({length:StarCount}).map((_,index)=>(
          <Star key={index}/>
        ))}
     
        <motion.div 
        initial={{opacity:0, z:-10}}
        whileInView={{opacity:1, z:0}}
        transition={{duration:1 , delay:0.4, ease:'easeInOut'}}
        className="hidden w-screen h-px animate-glow md:block animate-fade-right
         bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0"/>

        <motion.div className="absolute inset-0 -z-10 animate-fade-in  " aria-hidden="true"/>
        {/* <canvas width="517" height="1120" className="width-[414px]"></canvas> */}

        <motion.div
         initial={{opacity:0, z:-10}}
         animate={{opacity:1, z:0}}
        
         transition={{ duration: 1 , delay:0.4, ease:'easeInOut' }}
         className="flex justify-center items-center flex-col flex-col-2"
        >
        <h1 className="text-4xl text-transparent  cursor-default 
          text-edge-outline sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text
          blue-gradient_text"> <Title /></h1>
           <span className="w-10 h-10">👋</span>
        </motion.div>
         
       
        

        <motion.div
         initial={{opacity:0, z:-10}}
         whileInView={{opacity:1, z:0}}
         transition={{duration:1.8 , delay:0.4, ease:'easeInOut'}}
        className="hidden w-screen h-px animate-glow md:block animate-fade-right
         bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0
        ">

        </motion.div>
        <div className=" my-16 text-center animate-fade-in">
          <h2 className="text-sm text-zinc-500">
            
            I'm Akhilesh likes to build logics for fullstack website</h2>
        </div>

    
    


      {/* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <hemisphereLight
            skyColor='#b1e1ff'
            groundColor='#000000'
            intensity={1}
          />

          <Bird />
          <Sky isRotating={isRotating} />
          <Island
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            position={islandPosition}
            rotation={[0.1, 4.7077, 0]}
            scale={islandScale}
          />
          <Plane
            isRotating={isRotating}
            position={biplanePosition}
            rotation={[0, 20.1, 0]}
            scale={biplaneScale}
          />
        </Suspense>
      </Canvas>

      <div className='absolute bottom-2 left-2'>
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt='jukebox'
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className='w-10 h-10 cursor-pointer object-contain'
        />
      </div> */}
    </div>
  );
};


export default Home;
