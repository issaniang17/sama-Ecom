import { useState } from "react";
import { toast } from "sonner";

const Newsletter = () => {
    const [email, setEmail] = useState<string>('')
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setEmail(e.target.value)
    }
    const handleSubmit = (e:React.SubmitEvent<HTMLFormElement>)=>{
        e.preventDefault()
        toast.success('Inscription reussie')
        setEmail('')
    }
  return (
    <div className="bg-gray-200 flex flex-col items-center justify-center px-5  md:py-8 py-4 space-y-3 rounded-2xl my-10 text-center">
      <p className="md:text-3xl tracking-tight text-2xl leading-relaxed font-light">
        Abonnez-vous à notre newsletter <br /> par e-mail et bénéficiez de 15 % <br />de
        réduction
      </p>
      <p className="text-[16px] opacity-80 px-5">Soyez le premier à découvrir les dernières tendances technologiques, les offres exclusives et les lancements de produits passionnants en vous abonnant à notre newsletter.</p>
      <form  className="flex flex-col gap-5 md:flex-row my-8 w-full justify-center" onSubmit={handleSubmit}>
        <input type="email" name="email" id="email" placeholder="votre adresse e-mail" className="rounded-full bg-white md:w-[40%] p-3" value={email} onChange={handleChange} />
        <button className="bg-slate-900 text-white rounded-full p-4 cursor-pointer md:w-[20%]">Abonnez-vous</button>
      </form>
    </div>
  );
};

export default Newsletter;
