import { FaHome, FaSun, FaMoon, FaGithub, FaPen, FaInfo } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import React from 'react';

// globals
const iconSize = '2rem'

const Sidebar = ({ darkTheme, setDarkTheme }) => {
  return (
    <div className='top-0 left-0 w-12 sm:w-16 h-full m-0 pt-4 flex flex-col flex-none bg-white dark:bg-gray-700 text-white shadow-lg'>
      <Link to="/">
        <SideBarIcon icon={<FaHome size={iconSize} />} text='Home' />
      </Link>
      <Link to="/About">
        <SideBarIcon icon={<FaInfo size={iconSize} />} text='About/help' />
      </Link>
      <LinkIcon link='https://forms.gle/SevNUmM1a75Wy38LA' icon={<FaPen size={iconSize} />} text='Form' />
      <LinkIcon link='https://github.com/JamesQiY/Wardex' icon={<FaGithub size={iconSize} />} text='Github' />
      <ThemeIcon darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
    </div>
  )
};

const SideBarIcon = ({ icon, text = 'tooltip' }) => (
  <div className='sidebar_icon group'>
    {icon}
    <span className='sidebar_text group-hover:scale-100 group-active:scale-100'>
      {text}
    </span>
  </div>
);

const LinkIcon = ({ link = '', icon, text = 'tooltip', download = false }) => {
  return (
    <a href={link} {...download} target="_blank" rel="noopener noreferrer">
      <SideBarIcon icon={icon} text={text} />
    </a>
  );
};

const ThemeIcon = ({ darkTheme, setDarkTheme }) => {
  const toggle = () => setDarkTheme(!darkTheme);
  return (
    <div onClick={toggle}>
      {darkTheme ? (
        <SideBarIcon icon={<FaSun size={iconSize} />} text='Light mode' />
      ) : (
        <SideBarIcon icon={<FaMoon size={iconSize} />} text='Dark mode' />
      )}
    </div>
  );
};

export default Sidebar;