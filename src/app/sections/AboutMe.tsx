import dlImage from './../../assets/imagenes/DL.jpg';

export default function AboutMe() {
  return (
    <div id="AboutMe" className="bg-indigo-900 text-white w-full h-full flex items-center justify-center py-12 ">
      <div className="w-full p-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex-shrink-0">
            <img src={dlImage} alt="Cam in the gym" className="w-64 h-64 object-cover p-1 rounded-lg" />
          </div>
          <div className="md:ml-6 mt-6 md:mt-0">
            <h1 className="text-2xl font-bold mb-4 text-left">ABOUT ME</h1>  
            <p className="text-sm md:text-base mb-4 leading-relaxed font-bold text-justify">
              I’m a software engineering student in my 5th semester. Currently, I am improving my skills in Java, React, Tailwind, and database management.
              I also study at Cambridge, and I'm in phase 7, studying only on Sundays. Apart from my studies, I like to go to the gym, hang out with my friends, meet new people, and play video games.
              Some of my favorite titles are Warzone, Fortnite, Rocket League, among others.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
