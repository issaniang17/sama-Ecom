import LinkButton from "./linkButton"

type categoryProps = {
    titre?:string, description?:string, lien:string, image:string, className?:string, nomLien:string, affichage?:string
}
const CategoryCard = ({titre, description, lien, image, className, nomLien, affichage}:categoryProps) => {
  return (
    <div className={`${className} py-4 px-6 rounded-2xl bg-gray-200 relative`}>
        <div className={`leading-relaxed ${affichage}`}>
            <h2 className="font-semibold md:text-2xl text-xl">{titre}</h2>
            <p className="text-lg font-light tracking-wide">{description}</p>
            <LinkButton nom={nomLien} url={lien} className="border bg-gray-100 px-4 py-2 border-gray-400 "/>
        </div>
        <div className="mx-auto my-4">
            <img src={image} alt={titre} className="mix-blend-multiply" />
        </div>
    </div>
  )
}

export default CategoryCard