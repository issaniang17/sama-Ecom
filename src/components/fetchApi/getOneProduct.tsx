import { Link, useParams } from "react-router-dom";
import FiltreProducts from "./filtreProducts";
import type { productProps } from "./getAllproducts";
import CardProducts from "../ui/CardProducts";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import { DotIcon, X } from "lucide-react";
import { services, support } from "@/constante/constante";
import { useEffect, useState } from "react";
import type { SupportProps } from "@/types/support";
import BuyOneProduct from "@/pages/boutique/buyOneProduct";

// afficher un produit et ses informations et 3 autres produits associes au meme categorie
const GetOneProduct = () => {
  const { produit } = useParams();
  const [viewDescription, setViewDescription] = useState(false);
  const [valueSupport, setValueSupport] = useState<SupportProps[]>([]);
  const [productBuy, setProductBuy] = useState(false);
 

  const handleViewDescripton = (titre: string) => {
    setViewDescription(!viewDescription);
    const oneSupport = [...support].filter((elem) => elem.titre === titre);
    setValueSupport(oneSupport);
  };
  useEffect(() => {
    if (!viewDescription && !productBuy) {
      document.body.style.overflowY = "scroll";
      
    } else {
      document.body.style.overflowY = "hidden";
      
    }
  }, [viewDescription, productBuy]);

  const { data } = FiltreProducts<{
    products: productProps[];
  }>(`https://dummyjson.com/products`);
  if (!data) {
    return "";
  }
  const Produit = data?.products.find(
    (prod) => prod.title.toLowerCase().split(" ").join("") === produit,
  );
  const categoryProduit = data.products
    .filter(
      (prod) => prod.category === Produit?.category && prod.id !== Produit.id,
    )
    .slice(0, 3);

  return (
    <div className="flex flex-col gap-5 my-10">
      <div>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink render={<Link to="/">Accueil</Link>} />
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <DotIcon color="gray" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink render={<Link to="/boutique">Boutique</Link>} />
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <DotIcon color="gray" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>{Produit?.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-gray-100 p-2 rounded-2xl flex justify-center items-center">
          <img
            src={Produit?.thumbnail}
            alt={Produit?.title}
            className="mix-blend-multiply"
          />
        </div>
        <div className="space-y-2 px-4 md:px-8">
          <h2 className="text-2xl md:text-4xl font-light">{Produit?.title}</h2>
          <p className="font-light text-slate-800">{Produit?.description}</p>
          <p className="text-2xl">USD {Produit?.price}</p>
          <button
            className="inline-flex justify-center items-center bg-slate-900 text-white rounded-full p-4 w-full cursor-pointer"
            onClick={() => setProductBuy(!productBuy)}
          >
            Achetez maintenant
          </button>
          {/* Faire une commande */}
          {productBuy && (
            <div className="fixed w-full bg-black/60 h-full top-0 left-0 flex justify-center items-center z-3000 py-10 overflow-y-scroll">
              <div
                className="w-8 h-8 p-1 bg-gray-300 flex justify-center items-center rounded-full fixed top-3 right-5 cursor-pointer z-3000"
                onClick={() => setProductBuy(!productBuy)}
              >
                <X />
              </div>
              <BuyOneProduct
                imgProduct={Produit?.thumbnail ?? ""}
                price={Produit?.price ?? 0}
                productTitle={Produit?.title ?? ""}
              />
             
            </div>
          )}
          <div className="text-center opacity-60">
            <p>
              Délais de livraison estimés : 3 à 6 jours (International)
              Retournez dans les 45 jours suivant l’achat. Les droits et taxes
              ne sont pas remboursable
            </p>
          </div>
          <div className="flex flex-col gap-5 divide-y divide-gray-300 space-y-3 font-light py-4 text-gray-600 text-sm">
            {support.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center cursor-pointer"
                onClick={() => handleViewDescripton(item.titre)}
              >
                <div className="flex gap-3 items-center">
                  {item.iconTitre}
                  <p>{item.titre}</p>
                </div>
                {<item.iconArrow />}
              </div>
            ))}
          </div>
          {viewDescription && (
            <div className="w-full bg-black/80 flex items-center justify-center fixed top-0 left-0 h-screen z-2000">
              {valueSupport.map((item, index) => (
                <div
                  className="flex flex-col gap-5 divide-y divide-gray-300 px-3 py-4 bg-white w-full md:w-1/2 rounded-2xl  md:h-100"
                  key={index}
                >
                  <div className="flex items-center justify-between py-5">
                    <div className="flex gap-4">
                      {item.iconTitre}
                      <p>{item.titre}</p>
                    </div>
                    <div onClick={() => setViewDescription(!viewDescription)}>
                      {item.iconX}
                    </div>
                  </div>
                  <div className="overflow-auto">{item.description}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="bg-gray-200 flex flex-col gap-5 items-center md:justify-center md:flex-row p-8 rounded-2xl md:space-x-4 my-10">
        {services.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-2 items-center"
          >
            <div className="bg-white rounded-xl flex justify-center items-center p-5">
              {item.icon}
            </div>
            <div>
              <h2 className="font-normal text-xl">{item.titre}</h2>
              <p className="text-sm opacity-80">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="my-5 text-4xl">
        <h2>Produits associés</h2>
      </div>
      <div className="flex my-10  gap-4 md:grid md:grid-cols-3 overflow-x-scroll scrollbar-none overflow-y-hidden">
        {categoryProduit.map((prod) => (
          <CardProducts
            key={prod.id}
            image={prod.thumbnail}
            price={prod.price}
            title={prod.title}
            url={`/boutique/${prod.category}/${prod.title.split(" ").join("").toLowerCase()}`}
          />
        ))}
      </div>
    </div>
  );
};

export default GetOneProduct;
