import firstProject from './../../assets/imagenes/image.png';
import secondProject from './../../assets/imagenes/second.jpg';
export default function Projects() {
    return (
      <section id="projects" className=" p-8 bg-indigo-900 text-white min-h-screen font-bold">
        <h1 className="text-4xl font-bold mb-8 text-center">Cam's Portfolio</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-2 text-blue-500">PROJECT 1</h2>
            <p className="mb-4">
              In my first project I designed a website mock up about sale of clothes. This page was designed when I was in the first or second semester of my career.
            </p>
          </div>
          <div className="flex justify-center">
            <img src={firstProject} alt="Project 1" className="w-full h-auto rounded-md" />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="flex justify-center order-last lg:order-first">
            <img src={secondProject} alt="Project 2" className="w-full h-auto rounded-md" />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-2 text-blue-500">PROJECT 2</h2>
            <p className="mb-4">
              The second project is a website called GYMFLEX. This website was created for the sale of clothes. I am inspired by the shop 'Gymshark'.
            </p>
          </div>
        </div>
      </section>
    );
  }
  
  