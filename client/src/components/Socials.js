import React, { useContext } from 'react';
// import icons
import {
  ImFacebook,
  ImTwitter,
  ImPinterest,
  ImInstagram,
  ImYoutube,
  ImLinkedin,
  ImLinkedin2,
  ImGithub,
  ImAttachment,
  ImPen,
  ImProfile
} from 'react-icons/im';
// import cursor context
import { CursorContext } from '../context/CursorContext';

const Socials = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      className=' xl:flex mr-10 px-5'
    >
      <ul className='flex gap-x-4'>
      <li>
        <a href='https://www.linkedin.com/in/grace-kim1217/' target='_blank'>
          <ImLinkedin />
        </a>
      </li>
      <li>
        <a href='https://github.com/grace941217' target='_blank'>
          <ImGithub />
        </a>
      </li>
      <li>
        <a href='https://medium.com/@grace941217' target='_blank'>
          <ImPen />
        </a>
      </li>
      <li>
        <a href='https://docs.google.com/document/d/1xEyZdZwRZ-c9NmGF33QgOrWHAIY4uXGJHvs4J0p3oqY/edit?usp=sharing' target='_blank'>
          <ImProfile />
        </a>
      </li>
        {/* <li>
          <a href='http://wwww.facebook.com' target='_blank'>
            <ImFacebook />
          </a>
        </li>
        <li>
          <a href='http://www.twitter.com' target='_blank'>
            <ImTwitter />
          </a>
        </li>
        <li>
          <a href='http://www.pinterest.com' target='_blank'>
            <ImPinterest />
          </a>
        </li>
        <li>
          <a href='http://www.instagram.com' target='_blank'>
            <ImInstagram />
          </a>
        </li>
        <li>
          <a href='http://www.youtube.com' target='_blank'>
            <ImYoutube />
          </a>
        </li> */}
      </ul>
    </div>
  );
};

export default Socials;
