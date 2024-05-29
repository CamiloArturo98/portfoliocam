import jym from './../../assets/imagenes/gym.jpg';
import running from './../../assets/imagenes/run.jpg';
import vd from './../../assets/imagenes/games.jpg';
import soccer from './../../assets/imagenes/fut.jpg';
import { t } from 'i18next';

const hobbies = [
  {
    title: "GYM",
    description: "I like going to the gym because it is very de-stressing for me. I also like lifting heavy weights, but with the best possible technique.",
    image: jym
  }, 
  {
    title: "RUNNING",
    description: "Like the gym, running is very de-stressing for me and keeps my heart and lungs healthier.",
    image: running
  },
  {
    title: "PLAYING VIDEO GAMES",
    description: "This helps me clear my mind, relax, and have a lot of fun, especially when I play with my friends.",
    image: vd
  },
  {
    title: "PLAYING SOCCER",
    description: "Definitely my favorite sport. I also enjoy playing it because it brings back good memories of playing with my cousin when I was a child.",
    image: soccer
  }
];

const Hobbies: React.FC = () => {
  return (
    <div id="Hobbies" className=" w-full h-full bg-indigo-900 flex flex-col items-center justify-center font-bold">
      <h1 className="text-white text-2xl mb-8">{t('CAM HOBBIES')}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {hobbies.map((hobby) => (
          <div key={hobby.title} className="text-white p-6 rounded-lg shadow-lg flex items-center bg-black-transparent">
            <img src={hobby.image} alt={hobby.title} className="w-10 h-10 mr-14 rounded-full object-cover" />
            <div>
              <h3 className="text-xl font-bold">{hobby.title}</h3>
              <p className="mt-2">{hobby.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hobbies;
