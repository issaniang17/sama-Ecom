import { useState } from "react";

type messageProps = {
    nom:string;
    email:string;
    message:string
}
const ContactForm = () => {
    const [infoMessage, setInfoMessage] = useState<messageProps>({email:'', message:"", nom:""})

    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        const {name, value} = e.target
        setInfoMessage((prev)=>({
            ...prev,
            [name]: value
        }))
    }
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInfoMessage({email:'', message:"", nom:""})
  };
  return (
    <div className="bg-gray-200 rounded-2xl py-8 px-6">
      <div className="space-y-5 my-4 md:w-[70%]">
        <h2 className="text-xl font-light tracking-normal">Envoyez-nous un message</h2>
        <p className="font-light leading-relaxed opacity-90 text-lg">
          Nous sommes toujours là pour vous assister chez Etec. Notre équipe de
          service client est dédiée à répondre à vos questions.
        </p>
      </div>
      <form className="flex justify-center flex-wrap gap-5" onSubmit={handleSubmit}>
        <input type="text" placeholder="Nom" className="bg-white p-4 rounded-full w-[50%]" name="nom" value={infoMessage.nom} onChange={handleChange}/>
        <input type="email" placeholder="Email" className="bg-white p-4 rounded-full w-[45%]" name="email" value={infoMessage.email} onChange={handleChange} />
        <textarea name="message" id="message" placeholder="Message" className="bg-white h-80 w-full rounded-2xl p-4" onChange={handleChange} value={infoMessage.message}></textarea>
        <button className="w-full bg-slate-900 text-white p-4 rounded-full hover:bg-slate-800 duration-150 ease-in transition-colors cursor-pointer">Envoyer le message</button>
      </form>
    </div>
  );
};

export default ContactForm;
