import axios from "axios"
import { useEffect, useState } from "react"
import type { productProps } from "./getAllproducts"
import { useParams } from "react-router-dom"
import CardProducts from "../ui/CardProducts"

const GetOneCategory = () => {
    const {slug} = useParams()
    const [produits, setProduits] = useState<productProps[]>([])
    const [loading, setLoading] = useState(false)
    const [erreur, setErreur] = useState<string | null>(null)
    
    useEffect(()=>{
      const getOneCategory = async ()=>{
        try {
          setLoading(true)
          const response = await axios.get(`https://dummyjson.com/products/category/${slug}`)
          setProduits(response.data.products)
        } catch (error) {
          if(axios.isAxiosError(error)){
            setErreur(error.message)
          }
        }finally{
          setLoading(false)
        }
      }
      getOneCategory()
    }, [slug])
     if (loading) {
    return (
      <div className="flex flex-col gap-3 items-center md:flex-row md:justify-center">
        <div className="flex flex-col bg-neutral-300 w-56 h-64 animate-pulse rounded-xl p-4 gap-4">
          <div className="bg-neutral-400/50 w-full h-32 animate-pulse rounded-md"></div>
          <div className="flex flex-col gap-2">
            <div className="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md"></div>
            <div className="bg-neutral-400/50 w-4/5 h-4 animate-pulse rounded-md"></div>
            <div className="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md"></div>
            <div className="bg-neutral-400/50 w-2/4 h-4 animate-pulse rounded-md"></div>
          </div>
        </div>
        <div className="flex flex-col bg-neutral-300 w-56 h-64 animate-pulse rounded-xl p-4 gap-4">
          <div className="bg-neutral-400/50 w-full h-32 animate-pulse rounded-md"></div>
          <div className="flex flex-col gap-2">
            <div className="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md"></div>
            <div className="bg-neutral-400/50 w-4/5 h-4 animate-pulse rounded-md"></div>
            <div className="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md"></div>
            <div className="bg-neutral-400/50 w-2/4 h-4 animate-pulse rounded-md"></div>
          </div>
        </div>
        <div className="flex flex-col bg-neutral-300 w-56 h-64 animate-pulse rounded-xl p-4 gap-4">
          <div className="bg-neutral-400/50 w-full h-32 animate-pulse rounded-md"></div>
          <div className="flex flex-col gap-2">
            <div className="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md"></div>
            <div className="bg-neutral-400/50 w-4/5 h-4 animate-pulse rounded-md"></div>
            <div className="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md"></div>
            <div className="bg-neutral-400/50 w-2/4 h-4 animate-pulse rounded-md"></div>
          </div>
        </div>
      </div>
    );
  }
  if (erreur) {
    return (
      <div className="flex justify-center">
        <div className="flex flex-col justify-center gap-2 w-60 sm:w-72 text-[10px] sm:text-xs z-50">
          <div className="error-alert cursor-default flex items-center justify-between w-full h-12 sm:h-14 rounded-lg bg-[#232531] px-2.5">
            <div className="flex gap-2">
              <div className="text-[#d65563] bg-white/5 backdrop-blur-xl p-1 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                  ></path>
                </svg>
              </div>
              <div>
                <p className="text-white">{erreur}</p>
                <p className="text-gray-500">Rafraichissez la page</p>
              </div>
            </div>
            <button className="text-gray-600 hover:bg-white/10 p-1 rounded-md transition-colors ease-linear">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  }
  if (produits.length === 0) {
    return (
      <div className="text-3xl font-bold flex justify-center items-center text-red-500">
        Pas de produits disponible
      </div>
    );
  }
  return (
    <div className="grid md:grid-cols-3 gap-5">
      {produits.map(produit=>(
        <CardProducts key={produit.id} image={produit.thumbnail} url={`/boutique/${produit.category}/${produit.title.split(' ').join('').toLowerCase()}`} price={produit.price} title={produit.title}/>
      ))}
    </div>
  )
}

export default GetOneCategory