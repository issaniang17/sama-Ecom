import logo from "@/assets/samaEcomLogo.webp";
import UserCountryInfo from "@/components/formulaire/user-countryInfo";

type ProductProps = {
  imgProduct: string;
  productTitle: string;
  price: number;
};
const BuyOneProduct = ({ imgProduct, productTitle, price }: ProductProps) => {
  return (
    <div className="bg-white w-[80%] md:w-1/3 flex flex-col rounded-2xl my-5 absolute top-8 pb-4">
      <div className="flex justify-between py-2 px-4 bg-gray-300 h-50 rounded-t-2xl">
        <div className="flex items-end w-1/2">
          <img src={logo} alt="logoSama-Ecom" className="mix-blend-multiply" />
        </div>
        <img
          src={imgProduct}
          alt={productTitle}
          className="mix-blend-multiply w-1/2"
        />
      </div>
      <div className="px-4 space-y-2">
        <h2 className="text-2xl font-semibold">{productTitle}</h2>
        <p className="text-2xl font-light">${price}</p>
      </div>
      <div className="px-4">
        <UserCountryInfo prix={price} />
      </div>
    </div>
  );
};

export default BuyOneProduct;
