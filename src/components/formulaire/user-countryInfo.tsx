import type { userProps } from "@/types/userInfoProps";
import axios from "axios";
import { Minus, Plus } from "lucide-react";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

// "https://countries.dev/countries?fields=name"
type infoPaysProps = {
  pays: string;
  address: string;
  ville: string;
  codeZip: number;
  callingCode: string;
  tel: string;
};
type apiFetchProps = {
  data: { name: string; callingCodes: string }[];
  erreur: string | null;
  loading: boolean;
};

const UserCountryInfo = ({ prix }: { prix: number }) => {
  const [infoPays, setInfoPays] = useState<infoPaysProps>({
    address: "",
    codeZip: 0,
    pays: "",
    ville: "",
    callingCode: "",
    tel: "",
  });
  const [userInfo, setUserInfo] = useState<userProps>({
    email: "",
    nom: "",
    prenom: "",
  });
  const [commandeNumber, setCommandeNumber] = useState(1);
  const [apiFetch, setApiFetch] = useState<apiFetchProps>({
    data: [],
    erreur: null,
    loading: false,
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>,
  ) => {
    const { name, value } = e.target;
    setInfoPays((prev) => ({
      ...prev,
      [name]: value,
    }));
    setUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  useEffect(() => {
    const getPays = async () => {
      try {
        setApiFetch((prev) => ({
          ...prev,
          loading: true,
          erreur: null,
        }));
        const response = await axios.get(
          "https://countries.dev/countries?fields=name%2CcallingCodes",
        );
        setApiFetch((prev) => ({
          ...prev,
          data: response.data,
        }));
      } catch (error) {
        if (axios.isAxiosError(error))
          setApiFetch((prev) => ({
            ...prev,

            erreur: error.message,
          }));
      } finally {
        setApiFetch((prev) => ({
          ...prev,
          loading: false,
        }));
      }
    };
    getPays();
  }, []);
  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    setUserInfo({
      email: "",
      nom: "",
      prenom: "",
    });
    setInfoPays({
      address: "",
      codeZip: 0,
      pays: "",
      ville: "",
      callingCode: "",
      tel: "",
    });
    toast.success(`Commande prise en charge`)
  };
  if (apiFetch.erreur) {
    return `Erreur ${apiFetch.erreur}`;
  }
  if (apiFetch.loading) {
    return "Chargement....";
  }
  if (!apiFetch.data) {
    return "";
  }

  return (
    <form className="flex flex-col gap-4 my-3" onSubmit={handleSubmit}>
      <label htmlFor="prenom">Prenom *</label>
      <input
        type="text"
        id="prenom"
        className="p-2 rounded-lg focus:border-2 focus:border-gray-200 border border-gray-100"
        placeholder="Entrez votre Prenom"
        name="prenom"
        value={userInfo.prenom}
        onChange={handleChange}
        required
      />
      <label htmlFor="nom">Nom *</label>
      <input
        type="text"
        className="p-2 rounded-lg focus:border-2 focus:border-gray-200 border border-gray-100"
        placeholder="Entrez votre Nom"
        name="nom"
        value={userInfo.nom}
        onChange={handleChange}
        required
      />
      <label htmlFor="email">Email *</label>
      <input
        type="email"
        className="p-2 rounded-lg focus:border-2 focus:border-gray-200 border border-gray-100"
        placeholder="Entrez votre Email"
        name="email"
        value={userInfo.email}
        onChange={handleChange}
        required
      />

      <label htmlFor="pays">Pays *</label>
      <select
        name="pays"
        id="pays"
        value={infoPays.pays}
        onChange={handleChange}
        className="border"
      >
        {apiFetch.data.map((pays, index) => (
          <option value={pays?.name ?? ""} key={index}>
            {pays?.name}
          </option>
        ))}
      </select>
      <label htmlFor="adresse">Adresse *</label>
      <input
        type="text"
        className="p-2 rounded-lg border"
        name="address"
        value={infoPays.address}
        onChange={handleChange}
        required
        placeholder="Entrez votre adresse"
      />
      <label htmlFor="ville">Ville *</label>
      <input
        type="text"
        name="ville"
        id="ville"
        className="p-2 rounded-lg border"
        value={infoPays.ville}
        onChange={handleChange}
        required
        placeholder="Entrez votre Ville"
      />
      <label htmlFor="codeZip">Code ZIP *</label>
      <input
        type="number"
        name="codeZip"
        id="codeZip"
        className="p-2 rounded-lg border"
        required
        value={infoPays.codeZip}
        onChange={handleChange}
        placeholder="Entrez votre code ZIP"
      />
      <label htmlFor="telephone">Téléphone *</label>
      <div className="flex">
        <select
          name="telephone"
          id="telephone"
          className="border"
          onChange={handleChange}
        >
          {apiFetch.data.map((code, index) => (
            <option value={code.callingCodes} key={index}>
              + {code.callingCodes}
            </option>
          ))}
        </select>
        <input
          value={infoPays.tel}
          onChange={handleChange}
          type="tel"
          name="tel"
          id="telephone"
          className="p-2 border w-full"
          required
          placeholder="71 123 45 67"
        />
      </div>
      <div className="flex gap-3 items-center md:px-4 my-3">
        <p>Quantité</p>
        <div className="flex gap-2 items-center">
          <Minus
            onClick={() =>
              setCommandeNumber(commandeNumber <= 1 ? 1 : commandeNumber - 1)
            }
          />
          <p className="inline-flex items-center justify-center p-4 rounded-lg border w-20 h-10">
            {commandeNumber}
          </p>
          <Plus onClick={() => setCommandeNumber(commandeNumber + 1)} />
        </div>
      </div>

      <div className="px-4 my-3 text-end">
        Total : $ {prix * commandeNumber}
      </div>
      <button
        className="bg-slate-900 text-white rounded-lg p-2 w-[90%] self-center cursor-pointer"
        type="submit"
      >
        Payez ${prix * commandeNumber}
      </button>
    </form>
  );
};

export default UserCountryInfo;
