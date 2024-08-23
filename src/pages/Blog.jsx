import { Link } from 'react-router-dom';
import { Tabla } from '../components/tabla'

export function Blog() {

  return (
    <div className="p-4 bg-primary min-h-screen text-white flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-4 font-Roboto text-center">Blog del  
        <span className='font-Amsterdam font-light text-detail text-6xl'> Coder Camp</span></h1>
      <p className="mb-4 font-Roboto text-base w-10/12 text-center font-semibold">Aquí encontrarás un resumen de cada clase del Coder Camp:</p>

      <Tabla/>
      <div className='pt-12'>
        <Link to='/'
        className='bg-secondary text-primary py-3 px-6 rounded-lg
        transition-all duration-1000 hover:bg-detail font-semibold'>Ir al Inicio</Link>
      </div>
    </div>
  );
}