import { useState } from "react";
import { toast } from "sonner"

interface messageProps {
    nom:string;
    email:string;
    message:string
}
const SupportForm = () => {
    const [supportMessage, setSupportMessage] = useState<messageProps>({nom:'', email:'', message:''})

    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        const {name, value} = e.target
        setSupportMessage((prev) =>({
            ...prev,
            [name]: value,
        }))
    }
    const handleSubmit = (e:React.SubmitEvent<HTMLFormElement>)=>{
        e.preventDefault()
        toast.success('Nous vous répondrons dans les plus bref délais')
        setSupportMessage({nom:'', email:'', message:''})
    }

  return (
    <form className="flex gap-2 flex-wrap" onSubmit={handleSubmit}>
        <input required type="text"  className="bg-gray-300 p-4 rounded-2xl w-[50%]"placeholder="Nom" name="nom" value={supportMessage.nom} onChange={handleChange}/>
        <input required type="email"  className="bg-gray-300 p-4 rounded-2xl w-[48%]" placeholder="Email" name="email" value={supportMessage.email} onChange={handleChange}/>
        <textarea required name="message" id="message" placeholder="message" className="bg-gray-300 p-4 rounded-2xl w-full"  value={supportMessage.message} onChange={handleChange}></textarea>
        <button className="inline-flex justify-center items-center p-4 w-full rounded-full bg-slate-900 text-white cursor-pointer">Envoyer le message</button>
    </form>
  )
}

export default SupportForm