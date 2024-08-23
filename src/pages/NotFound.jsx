import { Link } from "react-router-dom"


export const NotFound = () => {
  return (
    <div className="h-screen bg-primary flex flex-col items-center justify-center gap-8">
      <h1 className="text-secondary font-Roboto text-5xl">Pagina no 
        <span className="text-detail"> encontrada</span></h1>
        <Link className="py-3 px-7 bg-secondary rounded-xl transition-all
        duration-1000 hover:bg-detail"
        to='/'>Volver Inicio</Link>
    </div>
  )
}
