import GetAllproducts from "../../components/fetchApi/getAllproducts";
import LinkButton from "../../components/ui/linkButton";

const Home = () => {
  return (
    <div className="my-10">
      <div className="flex flex-col md:justify-between px-4 md:flex-row gap-5">
        <div className="md:w-1/2">
          <h1 className="tracking-widest text-2xl md:text-5xl my-6 leading-relaxed font-semibold">
            Améliorez votre mode de vie avec des essentiels haut de gamme.
          </h1>
          <p className="my-5 text-lg font-light">
            Améliorez votre routine quotidienne avec nos produits haut de gamme
            soigneusement sélectionnés et nos essentiels soigneusement
            sélectionnés.
          </p>
        </div>
        <div className="md:flex md:items-end">
          <LinkButton
            nom="Parcourez tous les produits"
            url="/boutique"
            className="border-slate-950 border py-4 px-6"
          />
        </div>
      </div>
      <div className="my-20">
        <GetAllproducts homeView />
      </div>
    </div>
  );
};

export default Home;
