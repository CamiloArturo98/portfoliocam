import dlImage from './../../assets/imagenes/DL.jpg';
export default function AboutMe() {
  return (
    <div id='AboutMe' className=' bg-indigo-900 text-white min-h-screen flex items-center justify-center py-12'>
        <div className='w-full'>
    <div className='max-w-4xl p-6'>
        <div className='flex flex-col md:flex-row items-center'>
            <div className='flex-shrink-0'>
                <img src={dlImage} alt="Cam in the gym" className='w-64 h-64 object-cover p-1 rounded-lg' />
            </div>
            <div className='md:ml-6 mt-6 md:mt-0'>
                <h1 className="text-2xl font-bold mb-4 text-left">ABOUT ME</h1>    {/* Centrar imagen , titulo y parrafo */}
                <p className="text-sm md:text-base mb-4 leading-relaxed font-bold text-justify">
                I’m a student of engineering software, I'm in 5th semester. In this moment, I learn better Java, React, Tailwind, and management of databases.
                Also, I study in Cambridge. I'm in phase 7 and only study on Sundays. Apart from my studies, I like to go to the gym, go out with my friends, meet new people, and finally, I enjoy playing video games.
                Some of my preferred titles are Warzone, Fortnite, Rocket League, among others.
                </p>
            </div>
        </div>
    </div>
</div>
</div>
  )
}
