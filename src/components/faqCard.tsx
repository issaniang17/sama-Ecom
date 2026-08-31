import { useState } from "react"
import type { JSX } from "react/jsx-runtime"

type cardProps = {
    question:string,
    icon:JSX.Element,
    reponse:string
}

const FaqCard = ({question, icon, reponse}:cardProps) => {
    const [responseView, setResponseView] = useState(false)
  return (
    <div className=" flex flex-col cursor-pointer" onClick={()=>setResponseView(!responseView)}>
        <div className={`flex justify-between items-center bg-gray-300 px-4 py-5 ${responseView ?"rounded-t-xl" : "rounded-2xl"}`}>
            <h2 className="w-[80%] font-light text-lg">{question}</h2>
            <div className={`${responseView ? 'rotate-60 duration-150 ease-in' : 'rotate-0 duration-150 ease-in'}`}>
                {icon}
            </div>
        </div>
        <div className={`bg-gray-300 px-4 py-5 rounded-b-xl ${responseView ? 'animate-[ToptoBottom_1s]':' hidden duration-150 transition-all ease-in '}`}>
            <p className="font-light tracking-tight leading-relaxed opacity-80">{reponse}</p>
        </div>
    </div>
  )
}

export default FaqCard