import type { NavProps } from "@/types/navbar";
import logo from "@/assets/samaEcomLogo.webp";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };
  const navBar: NavProps = {
    logo: logo,
    liens: [
      {
        nom: "Tous les produits",
        lien: "boutique",
      },
      {
        nom: "à propos ",
        lien: "a-propos",
      },
      {
        nom: "FAQ",
        lien: "faq",
      },
      {
        nom: "Blog",
        lien: "blog",
      },
      {
        nom: "Contact",
        lien: "contact",
      },
    ],
  };
  return (
    <nav className="py-5 relative bg-white">
      
      <div className="flex justify-between items-center">
        <Link to='/'>
          <img
            src={navBar.logo}
            alt="sama-Ecom logo"
            className="mix-blend-multiply"
          />
        </Link>
        <div>
          <div className="md:hidden">{mobileMenu ? <X onClick={toggleMenu}/> : <Menu onClick={toggleMenu}/>}</div>
        </div>
        <div className="hidden md:flex gap-5 items-center">
          {navBar.liens.map((lien, index) => (
            <NavLink to={lien.lien} key={index} className={({isActive})=> isActive ? "text-slate-900": "text-gray-400 hover:text-black transition-colors duration-150 ease-in"}>
              <span className="capitalize">{lien.nom}</span>
            </NavLink>
          ))}
        </div>
      </div>
      {/* Mobile view */}
      {mobileMenu && (
        <div className="absolute top-20 left-0 w-full h-screen z-200  bg-white">
        <div
          className={`flex flex-col gap-4 justify-around animate-[ToptoBottom_1s_ease-in] md:hidden py-8 divide-y divide-gray-400 space-y-3 leading-loose `} onClick={toggleMenu}
        >
          {navBar.liens.map((lien, index) => (
            <NavLink to={lien.lien} key={index} className={({isActive})=> isActive ? "text-slate-900": "text-gray-400 hover:text-black transition-colors duration-150 ease-in"}>
              <span className="capitalize">{lien.nom}</span>
            </NavLink>
          ))}
        </div>
        </div>)}
    </nav>
  );
};

export default Navbar;
