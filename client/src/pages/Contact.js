import React, { useContext, useRef } from 'react';
// import images
// import WomanImg from '../img/contact/plant.jpg';
// import motion
import { motion } from 'framer-motion';
// import transition
import { transition1 } from '../transitions';
// import context
import { CursorContext } from '../context/CursorContext';
import emailjs from '@emailjs/browser'

const Contact = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const form = useRef()
  // const templateParams = {
  //   name: '',
  //   email: '',
  //   message: ''
  // }

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_zi8u8cx', 'template_q9xilq3', form.current, 'wgxmEJAU9UqfpLu54')
      .then(
        () => {
          alert('Message sent successfully!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again.')
        }
      )
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className='section bg-white'
    >
      <div className='container mx-auto h-full '>
        <div className='flex flex-col lg:flex-row h-full items-center justify-start pt-40 mt-10 gap-x-8 text-center lg:text-left'>
          {/* bg */}
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={transition1}
            className='lg:w-screen lg:flex bg-[#ebe7f9] absolute bottom-0 left-0 right-0 top-72 -z-10'
          ></motion.div>
          {/* text & form */}
          <div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className='lg:flex-1 lg:pt-32 lg:ml-20'
          >
            <h1 className='h1'>Contact me</h1>
            <p className='mb-12 text-[18px]'>Please feel free to reach out to me!</p>
            {/* form */}
            <form 
              className='flex flex-col gap-y-4'
              ref={form} 
              onSubmit={sendEmail}>
              <div className='flex gap-x-10 '>
                <input
                  className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
                  type='text'
                  name='name'
                  placeholder='Your name'
                  required
                />
                <input
                  className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
                  type='email'
                  name='email'
                  placeholder='Your email address'
                  required
                />
              </div>
              <input
                className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
                type='text'
                name='message'
                placeholder='Your message'
                required
              />
              <button 
                className='sendBtn mb-[30px] mx-auto lg:mx-0 self-start'
                type='submit'>
                Send
              </button>
            </form>
          </div>
          {/* image */}
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ transition: transition1, duration: 1.5 }}
            className='lg:flex-1'
          >
            {/* <img src={WomanImg} alt='' /> */}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
