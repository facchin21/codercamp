import { Link } from 'react-router-dom';
import { data } from '../data/data'
import { FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className='bg-black py-10 px-8 text-secondary font-Roboto'>
        <ul className='w-full'>
            {data.map((item, key) => (
                <li key={key}>
                    <Link to={item.link} target='_blank'
                    className='flex gap-4 items-center justify-center text-md
                    transition-all duration-1000 hover:text-detail cursor-pointer'>
                        <FaLinkedin/>
                        {item.name}
                    </Link>
                </li>
            ))}        
        </ul>
    </footer>
  )
}
