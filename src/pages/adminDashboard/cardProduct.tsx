type CardAdminProps = {
  img: string;
  titre: string;
  prix: number;
  categorie: string;
  stock: number;
  id: number;
  onModifier: ()=> void;
  onSupprimer: ()=> void;
  
};
const CardProductAdmin = ({
  img,
  prix,
  titre,
  categorie,
  stock,
  onModifier,
  onSupprimer,
 
  
}: CardAdminProps) => {
  return (
    <div className="relative bg-gray-100 hover:shadow-md shadow-gray-600 duration-300 transition-all ease-in-out rounded-2xl py-4 px-6 border border-gray-400 cursor-pointer">
      <div>
        <img src={img} alt={titre} className="mix-blend-multiply" />
      </div>
      <div className="flex gap-2 flex-col ">
        <p className="text-sm text-gray-400">{categorie}</p>
        <p className="text-lg">{titre}</p>
        <div className="flex justify-between">
          <p>
            Stock: <span className="font-semibold">{stock}</span>
          </p>
          <p className="text-red-500 font-bold">${prix}</p>
        </div>
      </div>
      <div className=" absolute top-0 right-0 w-30 h-30 duration-200 ease-in   flex justify-center items-center flex-col rounded-2xl px-2 gap-1">
        <button onClick={onModifier} className="w-full bg-blue-500 text-white inline-flex justify-center items-center p-2 rounded-lg cursor-pointer">
          Modifier
        </button>
       <button onClick={onSupprimer} className="w-full bg-red-500 text-white inline-flex justify-center items-center p-2 rounded-lg cursor-pointer">
          Supprimer
        </button>
      </div>
        
    </div>
  );
};

export default CardProductAdmin;
