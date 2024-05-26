import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone , faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <div id="Contact" className= "min-h-screen bg-indigo-900 flex flex-col items-center justify-start py-16 font-bold">
        <h1 className="text'white text-2xl mb-8 text-white">Contact</h1>
        <div className='w-full max-w-4xl bg-indigo-800 p-8 rounded-lg shadow-xl'>
            <h2 className='text-white text-3xl mb-4'>Drop me a message</h2>
            <p className='text-white mb-8'>Contact me through</p>
            <div className='space-y-6'>

                <div className='flex items-center'>
                        <FontAwesomeIcon icon = {faEnvelope} className="text-white w-10 h-10 mr-4"/>
                        <span className="text-white">arturocamilo72@gmail.com</span>
                </div>

                <div className="flex items-center">
                <FontAwesomeIcon icon = {faPhone} className="text-white w-10 h-10 mr-4"/>
                <span className="text-white">3002597905</span>
                </div>

                <div className="flex items-center">
                    <FontAwesomeIcon icon = {faMapMarkedAlt} className="text-white w-10 h-10 mr-4"/>
                    <span className="text-white">carrera 24 # 22-115</span>
                </div>

            </div>

        </div>
    </div>
  )
}
