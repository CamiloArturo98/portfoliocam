import { useState } from 'react';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';

export const Header = () => {
  const { i18n, t } = useTranslation();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang_code = e.target.value;
    i18n.changeLanguage(lang_code);
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="bg-indigo-900 p-4 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">CamArt</div>
        <button className="md:hidden text-white cursor-pointer mr-4" onClick={toggleNav}>
          {isNavOpen ? '✖' : '☰'}
        </button>
    
        <div className="hidden md:flex space-x-8">
          <Link to="AboutMe" smooth={true} duration={500} className="text-white cursor-pointer">About Me</Link>
          <Link to="projects" smooth={true} duration={500} className="text-white cursor-pointer">Portfolio</Link>
          <Link to="Hobbies" smooth={true} duration={500} className="text-white cursor-pointer">Hobbies</Link>
          <Link to="Contact" smooth={true} duration={500} className="text-white cursor-pointer">Contact</Link>
          <Link to="Experience" smooth={true} duration={500} className="text-white cursor-pointer">Experience</Link>
        </div>
      </div>
      {isNavOpen && (
        <div className="md:hidden flex flex-col space-y-4 mt-4 text-right">
          <Link to="AboutMe" smooth={true} duration={500} className="text-white cursor-pointer">About Me</Link>
          <Link to="projects" smooth={true} duration={500} className="text-white cursor-pointer">Portfolio</Link>
          <Link to="Hobbies" smooth={true} duration={500} className="text-white cursor-pointer">Hobbies</Link>
          <Link to="Contact" smooth={true} duration={500} className="text-white cursor-pointer">Contact</Link>
          <Link to="Experience" smooth={true} duration={500} className="text-white cursor-pointer">Experience</Link>
        </div>
      )}
    </nav>
  );
};
