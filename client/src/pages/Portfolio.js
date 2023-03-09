import React, { useContext } from 'react';
// import images
import Image1 from '../img/portfolio/Hello World.png';
import Image2 from '../img/portfolio/NASA Playground.png';
import Image3 from '../img/portfolio/Flatiron Books.png';
import Image4 from '../img/portfolio/ComingSoon.jpg';
// import link
import { Link } from 'react-router-dom';
// import motion
import { motion } from 'framer-motion';
// import transition
import { transition1 } from '../transitions';
// import context
import { CursorContext } from '../context/CursorContext';
import './portfolio.css';

const Portfolio = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      // transition={transition1}
      className='section'
    >
      <div className='container mx-auto  h-full relative'>
        {/* <div className='flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8'> */}
        {/* <div className='flex  
        lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16'> */}
          <div className='flex-1 flex-cols-2 lg:flex-row  justify-center lg:mt-20 mt-100px pt-100px'>
          {/* text */}
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            initial={{ opacity: 0, y: '-80%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-80%' }}
            transition={transition1}
            // className='flex flex-col lg:items-start'
            className='container flex-1 pt-40 lg:pb-10 pb-0 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start relative'
          >
            <h1 className='h1'>Projects</h1>
            {/* <p className='portfolio__container'> */}
              {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              <b> Exercitationem, veritatis.</b> Veritatis illum aut,
              reprehenderit sed dolorem dolore. */}
              <br />
              <br />
              {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Recusandae, iure! Ullam, dolore? Eligendi, quam mollitia. */}
            {/* </p> */}
            {/* <Link to={'/contact'} className='btn mb-[30px] mx-auto lg:mx-0'>
              Hire me
            </Link> */}
          </motion.div>
          {/* image grid */}
          </div>
          {/* <div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className='grid grid-cols-3 lg:gap-2 sm:m-auto sm:gap-2'
          > */}
            {/* image */}
            {/* <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'> */}
            <div className='grid lg:grid-cols-3 lg:gap-8 md:grid-cols-2 sm:grid-cols-2 sm:gap-2 m-auto justify-center'>
              <article className='portfolio__item '>
                <div className='portfolio__item-image'>
              <img
                className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'
                src={Image1}
                alt=''
                />
                </div>
                <h3 className="font-bold">Hello World</h3>
                <div className='portfolio__item-cta'>
                <a href="https://github.com/grace941217/Capstone-Project" className='portBtn' target='_blank'>Github</a>
                {/* <a href="" className='portBtn' target='_blank'>Live Demo</a> */}
                </div>
                </article>

              <article className='portfolio__item'>
                <div className='portfolio__item-image'>
              <img
                className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'
                src={Image2}
                alt=''
                />
                </div>
                <h3 className="font-bold">NASA Playground</h3>
                <div className='portfolio__item-cta'>
                <a href="https://github.com/grace941217/Project-2" className='portBtn' target='_blank'>Github</a>
                {/* <a href="" className='portBtn' target='_blank'>Live Demo</a> */}
                </div>
                </article>


              <article className='portfolio__item'>
                <div className='portfolio__item-image'>
              <img
                className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'
                src={Image3}
                alt=''
                />
                </div>
                <h3 className="font-bold">Flatiron Books</h3>
                <div className='portfolio__item-cta'>
                <a href="https://github.com/grace941217/Phase-4-Project" className='portBtn' target='_blank'>Github</a>
                {/* <a href="" className='portBtn' target='_blank'>Live Demo</a> */}
                </div>
                </article>


              <article className='portfolio__item'>
                <div className='portfolio__item-image'>
              <img
                className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'
                src={Image4}
                alt=''
                />
                </div>
                {/* <h3 className="font-bold">Hello World</h3>
                <div className='portfolio__item-cta'>
                <a href="" className='portBtn' target='_blank'>Github</a>
                <a href="" className='portBtn' target='_blank'>Live Demo</a>
                </div> */}
                </article>
                </div>
            
            {/* <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img
                className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'
                src={Image2}
                alt=''
              />
            </div>
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img
                className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'
                src={Image3}
                alt=''
              />
            </div>
            <div className='max-w-[250px] lg:max-w-[320px]  lg:h-[220px] bg-accent overflow-hidden'>
              <img
                className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'
                src={Image4}
                alt=''
              />
            </div> */}
          {/* </div> */}
        {/* </div> */}
      </div>
    </motion.section>
  );
};

export default Portfolio;
