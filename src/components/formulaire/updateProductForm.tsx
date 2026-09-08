import axios from "axios";
import { X } from "lucide-react";
import { useState } from "react";

export type formulaireProps = {
  title: string;
  thumbnail: string;
  price: number;
  stock: number;
};
type produitFormProps = {
  id: number;
  onView: () => void;
  onUpdate: (id: number, values: formulaireProps) => void;
};
const ProductForm = ({ id, onView, onUpdate }: produitFormProps) => {
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
      await axios.put(`https://dummyjson.com/products/${id}`, updateProduct);
      onUpdate(id, updateProduct);
      onView();
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
      className="flex flex-wrap justify-center gap-3 rounded-2xl py-6  absolute z-3000  top-0 left-0  w-full h-full bg-white"
    >
      <X
        onClick={onView}
        size={14}
        className="absolute top-0 right-0 cursor-pointer"
      />
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
        min={0}
        className="p-2 bg-white outline outline-gray-200 rounded-xl w-full"
        placeholder="Donner le prix"
        name="price"
        value={updateProduct.price}
        onChange={handleChange}
      />
      <button className="p-3 rounded-full bg-blue-400 text-white cursor-pointer inline-flex items-center justify-center w-1/2">
        Modifier
      </button>
    </form>
  );
};

export default ProductForm;
