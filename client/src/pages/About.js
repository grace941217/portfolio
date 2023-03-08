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
import Skills from './Skills';

const About = () => {
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

           <div className='flex flex-col lg:flex-row justify-center mt-20'>
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
            className='flex-1 pt-36 pb-14 mb:4rem lg:pt-0 lg:w-auto z-10 flex flex-col justify-center sm:items-center items-start'
          >
            <h1 className='h1'>About me</h1>
            <p className='mb-12 max-w-sm'>
            Ready and excited to embark on a new journey!💡 
            {/* New adventures are always exciting.  */}
            <br></br>
            I'm thrilled as I am making a transition to grow as a developer and also as a person. 
            <br></br>
            <br></br>
            I am a fast learner with strong skills in active listening, creativity and persistence.
            <br />
            My background is in biology as a nursing major. And I gained hospitality experiences in the food industry while studying.
              {/* <b> Exercitationem, veritatis.</b>  */}
              <br />
              <br />
              I like to work through positive collaborations and value efficiency.  Looking forward to future opportunities to work with inspiring people to create innovative products.
              <br />
              <br />
              Let the journey begin!✨
            </p>
            {/* <Link to={'/projects'} className='btn'>
              View my work
            </Link> */}
            
          </motion.div>
          {/* image */}
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ transition: transition1, duration: 1.5 }}
            className='lg:flex-1  pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start'
          >
            <img src={WomanImg} alt='' 
            className='lg:flex-1 '

            />
          </motion.div>
        </div>
        {/* <div>
        <Skills />

        </div> */}
      </div>
    </motion.section>
  );
};

export default About;
