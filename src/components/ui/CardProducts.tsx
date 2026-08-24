import { Link } from "react-router-dom"

type productCardProps = {
url:string, title?:string, price?:number, image:string, vedette?:boolean, description?:string
}
const CardProducts = ({url, title, price, image, vedette, description}:productCardProps) => {
  return (
    <Link to={url} className="hover:scale-105 transition duration-300 ease-in relative w-full shrink-0">
        
        <div className="bg-gray-100 rounded-2xl flex justify-center w-full">
            {
                vedette && <div className="absolute top-2 left-2 rounded-full p-2 border border-gray-500">En vedette</div>
            }
            <img src={image} alt={title} className="bg-blend-multiply"/>
        </div>
        <div className="flex gap-3 justify-between  px-2  mt-3">
            {title && <p className="text-lg">{title}</p>}
            {price && <p className="text-gray-400 text-xl">{price}</p>}
            {description && <p>{description}</p>}
        </div>
    </Link>
  )
}

export default CardProducts