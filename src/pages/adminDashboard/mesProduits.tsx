import type { productProps } from "@/components/fetchApi/getAllproducts";
import CardProductAdmin from "./cardProduct";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductForm, {
  type formulaireProps,
} from "@/components/formulaire/updateProductForm";

const MesProduits = () => {
  const [produits, setProduits] = useState<productProps[]>([]);
  const [erreur, setErreur] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [viewModif, setViewModif] = useState<number | null>(null);

  useEffect(() => {
    const getProduct = async () => {
      try {
        setLoading(true);
        setErreur(null);
        const response = await axios.get("https://dummyjson.com/products");
        setProduits(response.data.products);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setErreur(error.message);
        }
      } finally {
        setLoading(false);
      }
    };
    getProduct();
  }, []);

  const deleteProduct = async (id: number) => {
    try {
      await axios.delete(`https://dummyjson.com/products/${id}`);
      setProduits((prev) => prev.filter((prod) => prod.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const modifierProduct = (id: number, nouvellesValeurs: formulaireProps) => {
    setProduits((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? {
              ...product,
              ...nouvellesValeurs,
            }
          : product,
      ),
    );
  };

  const addProduct = () => {
    const add = setTimeout(() => {
      const data = localStorage.getItem("UpdateProduct");
      if (!data) {
        return;
      }
      const produit = JSON.parse(data);
      setProduits((prev) => [...prev, produit]);
      localStorage.removeItem("UpdateProduct");
    }, 1000);
    return ()=>{
      clearTimeout(add)
    }
  };
  if (localStorage.getItem("UpdateProduct")) {
    addProduct();
  }

  if (loading) {
    return (
      <div className="grid md:grid-cols-3">
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
      <div className="flex justify-center items-center text-red-400 h-screen ">
        {erreur}
      </div>
    );
  }

  return (
    <div className="grid  md:grid-cols-2 gap-3 relative">
      {produits.map((item) => (
        <div key={item.id} className="relative">
          <CardProductAdmin
            onModifier={() => setViewModif(item.id)}
            onSupprimer={() => deleteProduct(item.id)}
            id={item.id}
            img={item.thumbnail}
            prix={item.price}
            titre={item.title}
            categorie={item.category}
            stock={item.stock ?? 0}
          />
          {viewModif === item.id && (
            <ProductForm
              id={item.id}
              onView={() => setViewModif(null)}
              onUpdate={modifierProduct}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default MesProduits;
