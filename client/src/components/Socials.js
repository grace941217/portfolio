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
  ImBlog,
  ImBlogger,
  ImBlogger2,
} from 'react-icons/im';
// import cursor context
import { CursorContext } from '../context/CursorContext';

const Socials = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      className='hidden xl:flex ml-24'
    >
      <ul className='flex gap-x-4'>
      <li>
        <a href='https://www.linkedin.com/in/grace-kim1217/' target='_blank'>
          <ImLinkedin />
        </a>
      </li>
      <li>
        <a href='https://www.linkedin.com/in/grace-kim1217/' target='_blank'>
          <ImGithub />
        </a>
      </li>
      <li>
        <a href='https://www.linkedin.com/in/grace-kim1217/' target='_blank'>
          <ImAttachment />
        </a>
      </li>
      <li>
        <a href='https://www.linkedin.com/in/grace-kim1217/' target='_blank'>
          <ImBlogger2 />
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
