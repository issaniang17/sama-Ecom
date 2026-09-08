import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Get user link : https://dummyjson.com/auth/login
type userInfo = {
  username: string;
  password: string;
};
type userLogin = {
  accessToken: string;
  refreshToken: string;
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
};

const Login = () => {
  const iniatialReponse: userLogin = {
    accessToken: "",
    email: "",
    firstName: "",
    gender: "",
    id: 0,
    lastName: "",
    refreshToken: "",
    image: "",
    username: "",
  };
  const [userInfo, setUserInfo] = useState<userInfo>({
    password: "",
    username: "",
  });
  const [loading, setLoading] = useState(false);
  const [erreur, setErreur] = useState<string | null>(null);
  const [userLogin, setUserLogin] = useState<userLogin>(iniatialReponse);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const submitUser = async () => {
      try {
        setLoading(true);
        setErreur(null);
        const login = await axios.post(
          "https://dummyjson.com/auth/login",
          userInfo,
        );
        setUserLogin(login.data);
        navigate("/admin");
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setErreur(error.message);
        }
      } finally {
        setLoading(false);
      }
    };
    submitUser();

    setUserInfo({ password: "", username: "" });
  };

  if (loading) {
    return (
      <div className="text-center h-screen flex flex-col justify-center items-center">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-500 mx-auto"></div>
        <h2 className="text-zinc-900 dark:text-white mt-4">Chargement...</h2>
        
      </div>
    );
  }
  if (erreur) {
    return (
      <div className="flex justify-center flex-col items-center h-screen text-red-500">
        <span className="text-black">Erreur</span>
        <br /> {erreur}
      </div>
    );
  }

  if (userLogin.accessToken !== "") {
    localStorage.setItem("userLogin", JSON.stringify(userLogin));
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 rounded-2xl w-full md:w-1/2 border py-5 px-4 shadow-sm"
      >
        <label htmlFor="nom">Nom d'utilisateur</label>
        <input
          type="text"
          placeholder="username"
          className="p-4 rounded-2xl bg-white border "
          value={userInfo.username.trim()}
          name="username"
          onChange={handleChange}
        />
        <label htmlFor="mot-de-pass">Mot de pass</label>
        <input
          type="password"
          name="password"
          id="password"
          value={userInfo.password.trim()}
          className="p-4 rounded-2xl bg-white border"
          placeholder="Mot de passe"
          onChange={handleChange}
        />
        <div className="flex gap-4">
          <p>
            Nom d'utilisateur:{" "}
            <span className="font-semibold text-red-500">emilys</span>{" "}
          </p>
          <p>
            Mot de pass:{" "}
            <span className="font-semibold text-red-500">emilyspass</span>
          </p>
        </div>
        <button className="text-white bg-slate-900 rounded-full p-3 cursor-pointer hover:bg-slate-600 duration-300">
          Se connecter
        </button>
      </form>
    </div>
  );
};

export default Login;
