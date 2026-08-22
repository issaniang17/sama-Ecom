import logo from "@/assets/samaEcomLogo.webp";
import { footerLink, socialMediaLinks } from "@/constante/constante";
import { Link, NavLink } from "react-router-dom";

const UtilLinks = () => {
  return (
    <div>
      <div className="flex flex-col  md:flex-row md:gap-10 gap-5 bg-gray-200 px-5 py-4 md:py-10 rounded-2xl md:space-x-5">
        <div className="flex flex-col gap-2 divide-y-2 divide-gray-300 md:w-[30%]">
          <div>
            <Link to="/">
              <img
                src={logo}
                alt="logo sama-Ecom"
                className="mix-blend-multiply"
              />
            </Link>
            <p className="font-light text-md my-4">
              Vendre des produits haut de gamme, conçus pour sublimer votre
              expérience quotidienne
            </p>
          </div>
          <div className="flex gap-2">
            {socialMediaLinks.map((icon, index) => (
              <div
                key={index}
                className="p-2 rounded-full bg-gray-300 flex items-center justify-center"
              >
                <Link to={icon.link}>
                  <icon.name size={20} />
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between md:w-[20%]">
          <div className="flex flex-col gap-3">
            <h2 className="text-lg text-gray-800">Pages</h2>
            {footerLink.pages.map((lien, index) => (
              <NavLink
                to={lien.url}
                key={index}
                className={({ isActive }) =>
                  isActive ? "text-black" : "opacity-60  "
                }
              >
                {lien.nom}
              </NavLink>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-lg text-gray-800">Soutien</h2>
            {footerLink.support.map((lien, index) => (
              <NavLink
                to={lien.url}
                key={index}
                className={({ isActive }) =>
                  isActive ? "text-black" : "opacity-60  "
                }
              >
                {lien.nom}
              </NavLink>
            ))}
          </div>
        </div>
        <div className="md:w-[40%]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.3271540763576!2d-17.460964226282247!3d14.750589385753715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec10bb55f4b5493%3A0x57fe6956325e6eb!2sXarala!5e0!3m2!1sfr!2ssn!4v1786916183134!5m2!1sfr!2ssn"
            style={{ border: "0", width: "100%", height: "100%" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
      </div>
      <div className="my-5 flex flex-col gap-4 md:flex-row md:justify-between text-center font-light text-gray-500">
        <div className="flex gap-2">
          <p>Conception {new Date().getFullYear()} &copy; par</p>
          {footerLink.liensFinaux.slice(0, 1).map((lien, index) => (
            <NavLink
              to={lien.url}
              key={index}
              className={({ isActive }) =>
                isActive ? "text-black" : "opacity-60  "
              }
            >
              {lien.nom}
            </NavLink>
          ))}
        </div>
        <div className="flex gap-5">
          {footerLink.liensFinaux.slice(1).map((lien, index) => (
            <NavLink
              to={lien.url}
              key={index}
              className={({ isActive }) =>
                isActive ? "text-black" : "opacity-60  "
              }
            >
              {lien.nom}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UtilLinks;
