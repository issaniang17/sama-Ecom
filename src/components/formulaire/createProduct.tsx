import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export type formulaireProps = {
  title: string;
  thumbnail: string;
  price: number;
  stock: number;
};

const CreateProduct = () => {
  const navigate = useNavigate();
  const [updateProduct, setUpdateProduct] = useState<formulaireProps>({
    thumbnail: "",
    price: 0,
    stock: 0,
    title: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdateProduct((prev) => ({
      ...prev,
      [name]: name === "price" || name === "stock" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !updateProduct.price ||
      !updateProduct.stock ||
      !updateProduct.thumbnail ||
      !updateProduct.title
    )
      return;
    try {
      await axios.post(`https://dummyjson.com/products/add`, updateProduct);
      
      localStorage.setItem("UpdateProduct", JSON.stringify(updateProduct));
      navigate("/admin/mes-produits");
      setUpdateProduct({
        thumbnail: "",
        price: 0,
        stock: 0,
        title: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-wrap justify-center gap-3 rounded-2xl py-6 md:w-1/2 border border-gray-500 md:mx-auto md:px-4 px-2 w-full  bg-white"
    >
      <input
        type="text"
        className="p-2 bg-white outline outline-gray-200 rounded-xl w-full"
        placeholder="https://...."
        name="thumbnail"
        value={updateProduct.thumbnail}
        onChange={handleChange}
      />
      <input
        type="text"
        className="p-2 bg-white outline outline-gray-200 rounded-xl w-full"
        placeholder="Donner le nom du Produit "
        name="title"
        value={updateProduct.title}
        onChange={handleChange}
      />
      <label htmlFor="stock">Stock</label>
      <input
        type="number"
        min={0}
        className="p-2 bg-white outline outline-gray-200 rounded-xl w-full"
        placeholder="Donner le stock disponible"
        name="stock"
        value={updateProduct.stock}
        onChange={handleChange}
      />
      <label htmlFor="price">Prix</label>
      <input
        type="number"
        className="p-2 bg-white outline outline-gray-200 rounded-xl w-full"
        placeholder="Donner le prix"
        min={0}
        name="price"
        value={updateProduct.price}
        onChange={handleChange}
      />
      <button className="p-3 rounded-full bg-blue-400 text-white cursor-pointer inline-flex items-center justify-center w-full md:w-1/2">
        Ajouter
      </button>
    </form>
  );
};

export default CreateProduct;
