import React, { useContext } from 'react';
// import images
import WomanImg from '../img/about/me.png';
// import link
import { Link } from 'react-router-dom';
// import motion
import { motion } from 'framer-motion';
// import transition
import { transition1 } from '../transitions';
// import cursor context
import { CursorContext } from '../context/CursorContext';

const Skills = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className='section'
    >
      <div
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className='container mx-auto h-full relative'
      >
        {/* text & img wrapper */}
        {/* <div className='flex  
        lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16'> */}

           <div className='flex flex-col lg:flex-row justify-center'>
          {/* image */}
          {/* <div className='flex-1 max-h-96 lg:max-h-max order-2 lg:order-none'>
            <img src={WomanImg} alt='' />
          </div> */}
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: '-80%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-80%' }}
            transition={transition1}
            className='flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start'
          >
            <h1 className='h1'>About me</h1>
            <p className='mb-12 max-w-sm'>
            New adventures are always exciting. 
            <br></br>
            I'm thrilled as I am making a career transition to grow as a developer and also as a person. 
            <br></br>
            I am a fast learner with strong skills in active listening, creativity and persistence.
            <br></br>
            A background in biology as a nursing major and hospitality in the food industry.
              {/* <b> Exercitationem, veritatis.</b>  */}
              <br />
              <br />
              I work through positive collaborations and value efficiency.  I look forward to future opportunities to work with inspiring people in creating innovative products.
            </p>
            {/* <Link to={'/projects'} className='btn'>
              View my work
            </Link> */}
            
          </motion.div>
          {/* image */}
          {/* <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ transition: transition1, duration: 1.5 }}
            className='lg:flex-1'
          >
            <img src={WomanImg} alt='' />
          </motion.div> */}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
