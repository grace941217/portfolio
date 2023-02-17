import React, { useContext } from 'react';
// import images
import WomanImg from '../img/home/woman.png';
// import link
import { Link } from 'react-router-dom';
// import motion
import { motion } from 'framer-motion';
// import transition
import { transition1 } from '../transitions';
// cursor context
import { CursorContext } from '../context/CursorContext';
import About from './About';
import Portfolio from './Portfolio';

const Home = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className='section'
    >
      <div className='container mx-auto h-full relative'>
        {/* text & img wrapper */}
        <div className='flex flex-col justify-center'>
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: '-50%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-50%' }}
            transition={transition1}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className='w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start'
          >
            <h1 className='h1'>
              Software Engineer <br /> & 
            </h1>
            <p className='text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12'>
              New York, New York
            </p>
            <div>
              <About/>
            </div>
            <div>
              <Portfolio/>
            </div>
            {/* <Link to={'/projects'} className='btn mb-[20px]'>
              Projects
            </Link> */}

            <Link to={'/contact'} className='btn mb-[20px]'>
              Contact me
            </Link>
          </motion.div>
          {/* image */}
          <div className='flex justify-end max-h-96 lg:max-h-max'>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={transition1}
              className='relative lg:-right-40'
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={transition1}
                src={WomanImg}
                alt=''
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
