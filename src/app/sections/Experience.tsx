import js from './../../assets/imagenes/JavaScript-logo.png'
import html from './../../assets/imagenes/html-logo.png'
import css from './../../assets/imagenes/CSS3_logo_and_wordmark.svg.png'
import java from './../../assets/imagenes/Java-Logo.png'
import tyS from './../../assets/imagenes/Typescript_logo_2020.svg.png'
export default function Experience() {
  return (
    <div id='Experience' className="min-h-screen bg-indigo-900 flex flex-col items-center justify-center font-bold">
        <h1 className="text-xl text-white mb-8">EXPERIENCE</h1>
        <div className="flex justify-around w-full max-w-2xl">
            <div className="flex flex-col items-center">
                <img src={js as string} alt="" />
            </div>

            <div className='flex felx-col items-center'>

                <img src={html as string} alt="" />

            </div>

            <div className='flex flex-col items-center'>
                <img src={css as string} alt="" />
            </div>

            <div className='flex flex-col items-center'>
                <img src={java as string} alt="" />
            </div>

            <div className='flex flex-col items-center'>
                <img src={tyS as string} alt="" />
            </div>

        </div>
    </div>
  )
}

