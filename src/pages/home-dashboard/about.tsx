import LinkButton from "@/components/ui/linkButton";
import { aboutImg, services } from "@/constante/constante";

const About = () => {
  return (
    <div className="flex flex-col my-10 gap-5">
      <div className="md:w-[70%] space-y-4">
        <h2 className="tracking-widest leading-normal text-2xl md:text-5xl font-semibold ">
          Excellence accessible : une technologie parfaite pour tous !
        </h2>
        <p className="leading-relaxed text-lg">
          Avec plus de vingt ans d’expertise, nous avons soigneusement élaboré
          des collections qui incarnent la qualité durable et l’innovation
          technologique, répondant aux besoins variés de nos clients.
        </p>
      </div>
      <div>
        <img src={aboutImg[0].img} alt='image de garde' className="rounded-2xl"/>
      </div>
      <div className="flex flex-col  gap-5 items-center md:justify-center md:flex-row md:p-8 rounded-2xl md:space-x-4 my-10">
              {services.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-2 items-center"
                >
                  <div className="flex justify-center items-center p-5">
                    {item.icon}
                  </div>
                  <div>
                    <h2 className="font-normal md:text-xl">{item.titre}</h2>
                    <p className="text-sm opacity-80">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid gap-3 md:grid-cols-3">
              {aboutImg.slice(1, 4).map((item, index)=>(
                <div key={index} className="space-y-3">
                  <img src={item.img} alt={item.titre} className="rounded-2xl"/>
                  <h3 className="font-semibold text-lg tracking-tight">{item.titre}</h3>
                  <p className="opacity-80">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="grid gap-5 my-10">
              {aboutImg.slice(4,6).map((item, index)=>(
                <div key={index} className='flex flex-col md:flex-row  gap-5'>
                  <img src={item.img}alt={item.titre} className={`rounded-2xl md:w-1/2 ${item.order && 'md:order-2'}`}/>
                  <div className={`text-center space-y-3 flex flex-col items-center justify-center gap-3 ${item.order}`}>
                    <h3 className="font-semibold text-xl md:text-2xl">{item.titre}</h3>
                    <p className="opacity-70 leading-relaxed">{item.description}</p>
                    <LinkButton nom={item.lien ?? ''} url={item.url ?? ''} className="border p-4"/>
                  </div>
                </div>
              ))}
            </div>
    </div>
  );
};

export default About;
