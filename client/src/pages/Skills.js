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
import { DiJavascript } from 'react-icons/di';
import { DiPython } from 'react-icons/di';
import { DiRuby } from 'react-icons/di';
import { DiReact } from 'react-icons/di';
import { DiCss3 } from 'react-icons/di';
import { DiHtml5 } from 'react-icons/di';
import { SiRubyonrails } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';
import { SiNextdotjs } from 'react-icons/si';



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
            className='flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start'
          >
            <h1 className='h1'>Skills</h1>
            <p className='grid grid-cols-3 lg:gap-2 sm:m-auto sm:gap-2 '>
              <button 
                className='logoBtn mb-[30px] mx-auto lg:mx-0 self-start'
                type='submit'>
                <DiJavascript />
              </button>
              <button 
                className='logoBtn mb-[30px] mx-auto lg:mx-0 self-start'
                type='submit'>
                <DiPython />
              </button>
              <button 
                className='logoBtn mb-[30px] mx-auto lg:mx-0 self-start'
                type='submit'>
                <DiRuby />
              </button>
              <button 
                className='logoBtn mb-[30px] mx-auto lg:mx-0 self-start'
                type='submit'>
                <DiReact />
              </button>
              <button 
                className='logoBtn mb-[30px] mx-auto lg:mx-0 self-start'
                type='submit'>
                <SiNextdotjs />
              </button>
              <button 
                className='logoBtn mb-[30px] mx-auto lg:mx-0 self-start'
                type='submit'>
                <SiRubyonrails />
              </button>
              <button 
                className='logoBtn mb-[30px] mx-auto lg:mx-0 self-start'
                type='submit'>
                <DiCss3 />
              </button>
              <button 
                className='logoBtn mb-[30px] mx-auto lg:mx-0 self-start'
                type='submit'>
                <DiHtml5 />
              </button>
              <button 
                className='logoBtn mb-[30px] mx-auto lg:mx-0 self-start'
                type='submit'>
                <SiTailwindcss />
              </button>
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
