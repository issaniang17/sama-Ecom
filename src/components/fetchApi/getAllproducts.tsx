import CardProducts from "../ui/CardProducts";
import CategoryCard from "../ui/categoryCard";
import FiltreProducts from "./filtreProducts";

export type productProps = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  thumbnail: string;
};
type viewProduct = {
  homeView?: boolean;
  allProductsView?: boolean;
};
const GetAllproducts = ({ allProductsView, homeView }: viewProduct) => {
  const { data, loading, erreur } = FiltreProducts<{
    products: productProps[];
  }>("https://dummyjson.com/products");
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

  if (!data) {
    return (
      <div className="text-3xl font-bold flex justify-center items-center text-red-500">
        Pas de produits disponible
      </div>
    );
  }
  const beautyFirstProduct = data?.products
    .filter((produit) => produit.category === "beauty")
    .slice(0, 4);
  const fragrancesFirstProduct = data?.products
    .filter((produit) => produit.category === "fragrances")
    .slice(0, 3);
  const furnitureFirstProduct = data?.products
    .filter((produit) => produit.category === "furniture")
    .slice(0, 3);

  return (
    <div>
      {/* Home Page et Affichage de produit selectif */}
      {homeView && (
        <div className="flex flex-col gap-5 my-8">
          <div className="md:grid flex gap-4 grid-cols-3 scrollbar-none overflow-x-scroll py-4">
            <CardProducts
              image={beautyFirstProduct[0].thumbnail}
              title={beautyFirstProduct[0].title}
              price={beautyFirstProduct[0].price}
              url={`/boutique/beauty/${beautyFirstProduct[0]?.title.toLowerCase().split(" ").join("")}`}
              vedette
            />

            <CardProducts
              image={furnitureFirstProduct[0].thumbnail}
              title={furnitureFirstProduct[0].title}
              price={furnitureFirstProduct[0].price}
              url={`/boutique/furniture/${furnitureFirstProduct[0]?.title.toLowerCase().split(" ").join("")}`}
              vedette
            />

            <CardProducts
              image={fragrancesFirstProduct[0].thumbnail}
              title={fragrancesFirstProduct[0].title}
              price={fragrancesFirstProduct[0].price}
              url={`/boutique/fragrances/${fragrancesFirstProduct[0]?.title.toLowerCase().split(" ").join("")}`}
              vedette
            />
          </div>
          {/* Categorie de produits */}
          <div className="my-10">
            <h2 className="text-2xl md:text-4xl">Parcourez par catégories</h2>
            <p className="md:w-1/3 leading-loose font-medium my-3 opacity-60">
              Découvrez notre large gamme de catégories adaptées à vos besoins
              et centres d’intérêt spécifiques.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            <CategoryCard
              image={beautyFirstProduct[1].thumbnail}
              lien="/boutique"
              nomLien="Parcourez tous les produits"
              description="Découvrez d’innombrables possibilités grâce à notre catégorie Tous produits. Achetez dès maintenant tout ce dont vous avez besoin en un seul endroit pratique."
              titre="Tous les produits"
              key={beautyFirstProduct[1].id}
              className="flex flex-col justify-around md:col-span-2 md:row-span-2"
              affichage="space-y-5"
            />
            <CategoryCard
              className="md:col-span-2 flex flex-col gap-4 md:flex-row md:justify-between space-y-4"
              titre="Exposition"
              image={fragrancesFirstProduct[1].thumbnail}
              lien={`/boutique/${fragrancesFirstProduct[0].category}`}
              nomLien="Parfums"
              key={fragrancesFirstProduct[1].id}
              description="Profitez de nos large gamme de parfums tout genre."
              affichage="space-y-5 md:flex md:flex-col justify-arround"
            />
            <CategoryCard
              image={furnitureFirstProduct[1].thumbnail}
              lien={`/boutique/${furnitureFirstProduct[0].category}`}
              nomLien="Meubles"
              className="flex flex-col-reverse items-center"
            />
            <CategoryCard
              image={beautyFirstProduct[2].thumbnail}
              className="flex flex-col-reverse items-center"
              lien={`/boutique/${beautyFirstProduct[0].category}`}
              nomLien="Beauté"
            />
          </div>
          <div className="text-2xl md:text-4xl my-10">
            <h2>Nos articles et actualités</h2>
          </div>
          <div className="md:grid flex gap-4 grid-cols-3 scrollbar-none overflow-x-scroll py-4">
            <CardProducts
              image={beautyFirstProduct[3].thumbnail}
              description={beautyFirstProduct[3].description}
              url={`/blog/${beautyFirstProduct[3].title.toLowerCase().split(" ").join("")}`}
            />

            <CardProducts
              image={furnitureFirstProduct[2].thumbnail}
              description={furnitureFirstProduct[2].description}
              url={`/blog/${furnitureFirstProduct[2].title.toLowerCase().split(" ").join("")}`}
            />

            <CardProducts
              image={fragrancesFirstProduct[2].thumbnail}
              description={fragrancesFirstProduct[2].description}
              url={`/blog/${fragrancesFirstProduct[2].title.toLowerCase().split(" ").join("")}`}
            />
          </div>
        </div>
      )}
      {/* Page boutique avec tous les produits */}
      <div className="grid md:grid-cols-3 gap-4">
        {allProductsView &&
          data?.products.map((produit) => (
            <CardProducts
              key={produit.id}
              image={produit.thumbnail}
              url={`/boutique/${produit.category}/${produit.title.toLowerCase().split(" ").join("")}`}
              price={produit.price}
              title={produit.title}
            />
          ))}
      </div>
      {/* Filtre des produits */}
    </div>
  );
};

export default GetAllproducts;
