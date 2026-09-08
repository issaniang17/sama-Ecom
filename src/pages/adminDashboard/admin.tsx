import logo from "@/assets/samaEcomLogo.webp";
import { navAdmin } from "@/constante/constante";
import { Menu, Plus, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const Admin = () => {
  console.log(localStorage.getItem("userLogin"));
  const [mobileView, setMobileView] = useState(false);
  const userInfo = JSON.parse(localStorage.getItem("userLogin") ?? "");

  const toggleMenu = () => {
    setMobileView(!mobileView);
  };
  return (
    <div className="flex gap-2 md:divide-x-2 divide-gray-800">
      <Menu onClick={toggleMenu} className="md:hidden absolute top-2 left-0" />
      <div
        className={`duration-300 ease-in transition-all w-full md:w-1/6 fixed z-2000 top-0 left-0 md:relative h-screen bg-gray-200  py-5 px-4 flex flex-col gap-5 shadow-sm ${mobileView ? "translate-x-[0%]" : "-translate-x-full"} md:translate-x-0`}
      >
        <div className="flex justify-between items-center md:justify-center">
          <img src={logo} alt="logo sama-Ecom" className="mix-blend-multiply" />
          <X onClick={toggleMenu} className="md:hidden" />
        </div>
        <div className="flex flex-col gap-8  my-10 flex-1" onClick={toggleMenu}>
          {navAdmin.map((link, index) => (
            <NavLink
              to={link.url}
              key={index}
              className={({ isActive }) =>
                isActive
                  ? "bg-slate-900 text-white p-2 text-center w-full"
                  : "text-black hover:text-slate-700 duration-75"
              }
            >
              {link.nom}
            </NavLink>
          ))}
        </div>
        <Link
          to="/login"
          className="bg-red-400 text-white rounded-lg p-4 inline-flex justify-center items-center cursor-pointer hover:bg-red-500 duration-300 transition-colors ease-in-out"
        >
          Se deconnecter
        </Link>
      </div>
      <div className="h-screen overflow-y-scroll scrollbar-none flex-1 px-4 mx-3">
        <div className="my-5 flex justify-between items-center">
          <div>
            <h2 className="text-2xl">
              Bienvenue{" "}
              <span className="font-bold">{`${userInfo.firstName}`}</span>
            </h2>
            <p className="font-light text-sm my-2">
              Accédez à tous vos produits
            </p>
          </div>
          <Link
            to={"/admin/add-product"}
            className="text-white bg-blue-400 flex gap-1 items-center rounded-full justify-center px-2 py-1 shrink-0"
          >
            <Plus size={20} />
            <p className="hidden md:flex">Ajouter un produit</p>
          </Link>
        </div>
        <Outlet />
      </div>
      <div className="hidden md:w-1/6 md:flex flex-col gap-2 items-center py-4">
        <div className="w-15 rounded-full border p-1">
          <img src={userInfo.image} alt="profil" />
        </div>
        <div className="flex gap-1 items-center">
          <p>{userInfo.firstName}</p>
          <p>{userInfo.lastName}</p>
        </div>
      </div>
    </div>
  );
};

export default Admin;
