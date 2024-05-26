import { useState } from 'react';
import { Link } from  'react-scroll';
export const Header = () => {

  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <nav className='bg-indigo-900 p-4'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <div className='text-white font-bold text-xl'>CamArt</div>
          <button className='md:hidden text-white cursor-pointer' onClick={toggleNav}>
            {isNavOpen ? '✖' : '☰'}
          </button>
          <div className='hidden md:flex space-x-8'>
            <Link to="AboutMe" smooth={true} duration={500} className='text-white cursor-pointer'>About me</Link>
            <Link to="projects" smooth={true} duration={500} className='text-white cursor-pointer'>Portfolio</Link>
            <Link to="Hobbyes" smooth={true} duration={500} className='text-white cursor-pointer'>Hobbies</Link>
            <Link to="Contact" smooth={true} duration={500} className='text-white cursor-pointer'>Contact</Link>
            <Link to="Experience" smooth={true} duration={500} className='text-white cursor-pointer'>Experience</Link>
          </div>
        </div>
        {isNavOpen && (
          <div className='md:hidden flex flex-col space-y-4 mt-4 text-right'>
            <Link to="AboutMe" smooth={true} duration={500} className='text-white cursor-pointer'>About me</Link>
            <Link to="projects" smooth={true} duration={500} className='text-white cursor-pointer'>Portfolio</Link>
            <Link to="Hobbyes" smooth={true} duration={500} className='text-white cursor-pointer'>Hobbies</Link>
            <Link to="Contact" smooth={true} duration={500} className='text-white cursor-pointer'>Contact</Link>
            <Link to="Experience" smooth={true} duration={500} className='text-white cursor-pointer'>Experience</Link>
          </div>
        )}
      </div>
    </nav>
  );
};