import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import imageCoderCamp from '../assets/image/codercamp.jpg';
import { FaArrowDown } from 'react-icons/fa';
import { useText } from '../hooks/useText';

export function Intro() {
    const { displayedText: welcomeText } = useText('Bienvenidos al Coder Camp');
    const { displayedText: descriptionText } = useText('Tu viaje para aprender comienza aquí');

    const [timeRemaining, setTimeRemaining] = useState(10);
    const navigate = useNavigate();

    useEffect(() => {
        const toastId = toast.info(`Redirigiendo en ${timeRemaining} segundos...`, {
            autoClose: false, 
        });

        const timer = setInterval(() => {
            setTimeRemaining(prevTime => {
                if (prevTime <= 1) {
                    clearInterval(timer);
                    navigate('/blog');
                    return 0;
                }
                if (prevTime <= 10 && prevTime > 0 && (prevTime - 1) % 1 === 0) {
                    toast.update(toastId, {
                        render: `Redirigiendo en ${prevTime - 1} segundos...`,
                        autoClose: false,
                    });
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [navigate]);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-primary overflow-hidden">
            <img 
                src={imageCoderCamp} 
                alt="Imagen del Coder Camp" 
                className="object-contain transition-transform duration-500 ease-in-out
                 transform hover:scale-110 pointer-events-none" 
            />
            <div className="z-10 text-white text-center font-Roboto">
                <h1 className="text-4xl font-bold">{welcomeText}</h1>
                <p className="mt-4 text-lg">{descriptionText}</p>
            </div>
            <Link 
                to='/blog'
                className="mt-8 p-2 text-secondary hover:text-detail transition-colors">
                <FaArrowDown size={26} />
            </Link>
            <ToastContainer />
        </div>
    );
}
