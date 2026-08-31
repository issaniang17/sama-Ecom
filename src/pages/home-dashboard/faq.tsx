import FaqCard from "@/components/faqCard";
import LinkButton from "@/components/ui/linkButton";
import { faqQuestion } from "@/constante/constante";
import { Plus } from "lucide-react";

const Faq = () => {
  return (
    <div className="flex flex-col gap-8 py-10">
      <div className="space-y-5 md:w-1/2">
        <h1 className="text-2xl md:text-6xl font-semibold tracking-widest">FAQ</h1>
        <p className="leading-relaxed text-lg">
          Découvrez notre sélection soigneusement sélectionnée de produits
          premium, conçus pour sublimer vos expériences quotidiennes
        </p>
      </div>
      <div className="flex flex-col gap-5 divide-y md:flex-row divide-gray-200 md:divide-y-0 md:divide-x-2 my-5">
        <div className="md:order-1 order-2 space-y-6 md:w-1/2 leading-loose flex flex-col gap-6 my-3 py-8">
          <h2 className="text-2xl md:text-4xl font-light">Besoin d’aide ?</h2>
          <p className="text-lg opacity-70 leading-relaxed font-light">Si vous avez un problème ou une question nécessitant une assistance immédiate, vous pouvez cliquer sur le bouton ci-dessous pour contacter un représentant du service client.</p>
          <p className="text-lg opacity-70 leading-relaxed font-light">Veuillez prévoir entre 6 et 12 jours ouvrables à compter de la réception de votre colis pour qu’un remboursement soit émis.</p>
          <LinkButton nom="Contactez-nous" url="/contact" className="border p-4 w-[90%] hover:bg-gray-200 transition-colors duration-150 ease-in"/>
        </div>
        <div className="md:order-2 order-1 md:overflow-y-scroll scrollbar-none md:overscroll-x-none space-y-8 md:w-1/2 my-3 md:h-screen">
          <div className="space-y-3 my-3">
            <h2 className="font-light text-2xl md:text-4xl">{faqQuestion.infoAchat.titre}</h2>
            {faqQuestion.infoAchat.card.map((item, index)=>(
              <FaqCard key={index} icon={<Plus/>} question={item.question} reponse={item.reponse}/>
            ))}
          </div>
          <div className="space-y-3 my-3">
            <h2 className="font-light text-2xl md:text-4xl">{faqQuestion.infoPay.titre}</h2>
            {faqQuestion.infoPay.card.map((item, index)=>(
              <FaqCard key={index} icon={<Plus/>} question={item.question} reponse={item.reponse}/>
            ))}
          </div>
          <div className="space-y-3 my-3">
            <h2 className="font-light text-2xl md:text-4xl">{faqQuestion.ordre.titre}</h2>
            {faqQuestion.ordre.card.map((item, index)=>(
              <FaqCard key={index} icon={<Plus/>} question={item.question} reponse={item.reponse}/>
            ))}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Faq;
