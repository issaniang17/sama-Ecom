import Navbar from "@/components/navbar"
import { Link } from "react-router-dom"


const Page404 = () => {
  return (
    <div className="px-6 xl:mx-auto xl:w-[80%] flex flex-col gap-10 h-screen">
        <Navbar/>
        <div className=" flex justify-center items-center flex-col gap-5 leading-loose h-full">
            <h1 className="text-slate-900 font-bold tracking-widest text-2xl md:text-6xl my-4">Oups... Cette page n’existe pas</h1>
            <p className="font-light text-lg text-gray-700 tracking-wider">Nous nous excusons pour le désagrément. Allez sur notre page d’accueil ou découvrez nos <Link to='/boutique' className="text-slate-900 underline font-medium">dernières collections</Link>.</p>
            <Link to='/' className="rounded-full text-white bg-slate-900 p-4 tracking-widest hover:-translate-y-0.5 duration-300">Retour à la page d'accueil </Link>
        </div>
    </div>
  )
}

export default Page404