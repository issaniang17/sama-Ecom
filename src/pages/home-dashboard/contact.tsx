import ContactForm from "@/components/formulaire/contactForm";

const Contact = () => {
  return (
    <div className="flex flex-col gap-8 py-10">
      <div className="md:w-1/2 leading-relaxed">
        <h1 className="text-2xl md:text-5xl font-semibold tracking-tight my-4">
          Contactez-nous
        </h1>
        <p className="font-light text-lg tracking-tight leading-relaxed opacity-90">
          Nous sommes là pour vous aider pour toutes les questions, retours ou
          assistance dont vous pourriez avoir besoin. Que vous ayez des
          questions concernant des produits, des commandes ou des questions
          générales, notre équipe de service client dédiée est prête à vous
          aider.
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-[400px_1fr]">
        <div className="flex flex-col gap-5">
          <div className="flex justify-between flex-col px-6 py-8 bg-gray-200 rounded-2xl h-1/2">
            <div className="font-light text-xl">
              <h2>Numéro de téléphone</h2>
              <p>+ 123 456 789</p>
            </div>
            <div className="font-light leading-relaxed tracking-tight text-lg">
              <p>
                Appelez directement notre équipe. Nous fournirons des
                informations, répondrons à des questions techniques ou prendrons
                rendez-vous.
              </p>
            </div>
          </div>
          <div className="flex justify-between flex-col px-6 py-8 bg-gray-200 rounded-2xl h-1/2">
            <div className="font-light text-xl">
              <h2>E-mail</h2>
              <p>example@gmail.com</p>
            </div>
            <div className="font-light leading-relaxed tracking-tight text-lg">
              <p>
               Utilisez l’e-mail pour fournir des informations sur le projet. Nous répondrons dès que possible, en fournissant un soutien complet.
              </p>
            </div>
          </div>
        </div>
        <ContactForm/>
      </div>
    </div>
  );
};

export default Contact;
