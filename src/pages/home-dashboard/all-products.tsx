import FiltreProducts from "@/components/fetchApi/filtreProducts";
import type { productProps } from "@/components/fetchApi/getAllproducts";
import { categoryNav } from "@/constante/constante";
import { Search, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const AllProducts = () => {
  const [searchOption, setSearchOption] = useState(false);
  const [searchProduct, setSearchProduct] = useState("");
  const [filtreProduct, setFiltreProducts] = useState<productProps[]>([])
  const {data} = FiltreProducts<{products:productProps[]}>('https://dummyjson.com/products')
  const viewSearchMenu = () => {
    setSearchOption(!searchOption);
    if (searchOption) {
      document.body.style.overflowY = "scroll";
    } else {
      document.body.style.overflowY = "hidden";
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const produit = e.target.value
    setSearchProduct(produit);
    const all = [...data?.products.filter(elem=> elem.title.toLowerCase().split(' ')[0].includes(produit.toLowerCase().trim())) ?? []]
    setFiltreProducts(all)

  };
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className="my-10">
      <div>
        <h1 className="font-semibold text-3xl md:text-5xl ">Boutique</h1>
        <p className="md:w-1/2 leading-relaxed my-4 text-lg font-light">
          Découvrez notre collection complète de produits adaptés à vos besoins
        </p>
        <div className="flex items-center gap-3 md:justify-between ">
          <nav className="flex gap-3 order-2 md:order-1 scrollbar-none overflow-x-scroll overflow-y-hidden my-10 py-5">
            {categoryNav.map((lien, index) => (
              <NavLink
                to={lien.url}
                key={index}
                className={({ isActive }) =>
                  isActive
                    ? "bg-slate-900 text-white px-4 py-2 rounded-full shrink-0"
                    : "rounded-full border border-gray-300 px-4 py-2 shrink-0"
                }
              >
                {lien.nom}
              </NavLink>
            ))}
          </nav>
          <div className="order-1 md:order-2">
            <Search className="cursor-pointer" onClick={viewSearchMenu} />
          </div>
        </div>
      </div>
      {searchOption && (
        <div className="relative transition-all duration-300 ease-in">
          <div
            className="fixed z-2000 top-0 left-0 w-full h-screen bg-black/80"
            onClick={viewSearchMenu}
          ></div>
          <div className="rounded-xl bg-white p-4 fixed z-2000 md:top-[20%] md:left-[30%] md:w-[50%] flex flex-col top-0 left-0 w-full">
            <div className="flex justify-between gap-3 w-full">
              <Search className="cursor-pointer" />
              <form onSubmit={handleSubmit} className="flex-1">
                <input
                  type="text"
                  placeholder="Tapez pour rechercher"
                  value={searchProduct}
                  onChange={handleChange}
                  className="w-full outline-0"
                />
              </form>
              {searchProduct.trim().length !== 0 && (
                <div className="p-1 w-5 h-5 bg-gray-300 rounded-full text-white flex justify-center items-center cursor-pointer">
                  <X onClick={() => setSearchProduct("")} />
                </div>
              )}
            </div>
            {/* filtre de produits */}
            {searchProduct.trim().length !== 0 && (
              <div className="w-full flex flex-col divide-y divide-gray-200 gap-3 text-gray-400 py-5">
                {
                  filtreProduct.map(prod => (
                    <Link to={`/boutique/${prod.category}/${prod.title.split(' ').join("").toLowerCase()}`}  key={prod.id} className="flex flex-col">
                      <p>{prod.title}</p>
                      <p>{`/boutique/${prod.category}/${prod.title.split(' ').join("").toLowerCase()}`}</p>
                    </Link>
                  ))
                }
              </div>
            )}
          </div>
        </div>
      )}
      <div className="my-10">
        <Outlet />
      </div>
    </div>
  );
};

export default AllProducts;
