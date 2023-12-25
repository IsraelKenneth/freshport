import { motion } from "framer-motion";

const transitionVariants = {
  initial: {
    x:'100%',
    width: '100%'
  },
  animate:{
    x: '0%',
    width: '0%'
  },
  exit:{
    x: ['0%', '100%'],
    width: ['0%','100%']
  }
}
const Transition = () => {
  return (
    <>
      <motion.div className="fixed top-0 bottom-0 right-full w-screen 
      h-screen z-30 bg-[#2e2257]" 
      variants={transitionVariants} 
      initial='initial' animate='animate' exit='exit' transition={{delay: 0.2, duration: 0.6, ease:'easeInOut' }}>

      </motion.div>
      
      <motion.div className="fixed top-0 bottom-0 right-full w-screen 
      h-screen z-20 bg-[#3b2d71]" 
      variants={transitionVariants} 
      initial='initial' animate='animate' exit='exit' transition={{delay: 0.4, duration: 0.6, ease:'easeInOut' }}>

      </motion.div>
      
      <motion.div className="fixed top-0 bottom-0 right-full w-screen 
      h-screen z-0 bg-[#4b3792]" 
      variants={transitionVariants} 
      initial='initial' animate='animate' exit='exit' transition={{delay: 0.2, duration: 0.6, ease:'easeInOut' }}>

      </motion.div>
    </>
  );
};


const HeroImg = () => {
  return (
    <div className="lg:w-1/2 lg:px-10 relative h-screen">
      <motion.img 
        src={New} 
        alt="Professional Showcase" 
        className="absolute bottom-0 lg:float-left lg:w-full lg:max-w-md lg:ml-10"
        initial={{ y: '100vh' }}  // Starts the image 100% viewport height from the bottom
        animate={{ y: 0 }}         // Animate the image to its original position
        transition={{ type: 'spring', stiffness: 100 }} // Spring animation effect
      />
    </div>
  );
};

export  {Transition, HeroImg};
