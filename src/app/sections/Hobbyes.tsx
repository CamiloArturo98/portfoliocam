import jym from './../../assets/imagenes/gym.jpg'
import running from './../../assets/imagenes/run.jpg'
import vd from './../../assets/imagenes/games.jpg'
import soccer from './../../assets/imagenes/fut.jpg'
const hobbyes = [
    {
        title : "GYM",
        description :" I like go to the gym because is very distressing for me, also i like strong weight, but whit the best possible  technique.",
        image : jym
    }, 
    {
        title : "RUNING",
        description : "As the gym runing is very distressing for me and keeps me whit more health in my heart and my lungs",
        image : running
    },
    {
        title : "PLAY VIDEO GAMES",
        description : "Do this help me to clear my mind, i have relax and i have a lot of fun above all if i play whit my friends",
        image : vd
    },
    {
        title : "PLAY SOCCER",
        description : "My favorite sport definitely, obviously i like play also when i was a child i play whit my cousin and this bring back good memories",
        image : soccer
    }
];

const Hobbyes: React.FC = ()=>{
    return(
        <div id='Hobbyes' className=" min-h-screen bg-indigo-900 flex flex-col items-center justify-center font-bold">
            <h1 className="text-white text-2xl mb-8 ">CAM'S HOBBYES</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {hobbyes.map((hobby)=>
                <div key={hobby.title} className="bg-indigo-900 text-white p-6 rounded-lg shadow-lg flex items-center">
                    <img src= {hobby.image as string} alt={hobby.title} className="w-12 h-12 mr-14 rounded-full object-cover" />

                    <div>
                        <h3 className="text-xl font-bold">{hobby.title}</h3>
                        <p className="mt-2">{hobby.description}</p>
                    </div>
                </div>
                )}

            </div>

        </div>
    )
}
export default Hobbyes;