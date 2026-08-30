import type { footerLinkProps, linkList } from "@/types/footerLink";
import type { IconType } from "react-icons";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import type { SupportProps } from "@/types/support";
import { FaArrowRight} from "react-icons/fa";
import { CreditCard, Headset, Package, ShieldCheck, Undo2, Van, X } from "lucide-react";
import SupportForm from "@/components/formulaire/supportForm";
import type { JSX } from "react/jsx-runtime";
import imageGarde from '@/assets/aboutPage/baume.png'
import boutiques from '@/assets/aboutPage/boutiques.png'
import parfum from '@/assets/aboutPage/parfums.png'
import parfumerie from '@/assets/aboutPage/parfumerie.png'
import collection from '@/assets/aboutPage/collections.png'
import meuble from '@/assets/aboutPage/meubles.png'
// Footer model link
export const footerLink: linkList = {
  pages: [
    { nom: "Acceuil", url: "/" },
    { nom: "Boutique", url: "/boutique" },
    { nom: "A Propos", url: "/a-propos" },
    { nom: "Blog", url: "/blog" },
  ],
  support: [
    { nom: "FAQ", url: "/faq" },
    { nom: "Contact", url: "/contact" },
    { nom: "Produit", url: "/boutique/produit" },
    { nom: "404", url: "/404" },
  ],
  liensFinaux: [
    { nom: "tolv.studio", url: "#" },
    { nom: "Conditions générales", url: "/faq/term-condition" },
    { nom: "Produit", url: "/boutique/produit" },
    { nom: "Politique de Confidentialité", url: "/faq/privacy-policy" },
  ],
};

// Social links
export const socialMediaLinks: { name: IconType; link: string }[] = [
  {
    name: FaFacebookF,
    link: "#",
  },
  {
    name: FaInstagram,
    link: "#",
  },
  {
    name: FaLinkedin,
    link: "#",
  },
  {
    name: BsTwitterX,
    link: "#",
  },
];

export const categoryNav: footerLinkProps[] = [
  { nom: "Tous les produits", url: "/boutique" },
  { nom: "Beauté", url: "beauty" },
  { nom: "Parfums", url: "fragrances" },
  { nom: "Meubles", url: "furniture" },
  { nom: "Groceries", url: "groceries" },
];

// Garantie support et livraison
const apparence = 'leading-relaxed space-y-4'
export const support: SupportProps[] = [
  {
    titre: "Garantie",
    iconTitre: <ShieldCheck />,
    iconArrow: FaArrowRight,
    iconX: <X/>,
    description: (
      <div className={`${apparence}`}>
        <p>
          Si vous pensez que votre produit est défectueux et qu’il est dans la
          période de garantie, veuillez remplir ce formulaire pour déposer une
          réclamation de garantie ici.
        </p>
        <p>
          Après avoir rempli et soumis le formulaire de réclamation de garantie,
          notre service client poursuivra votre demande dans un délai de deux
          jours ouvrables. Si vous devez retourner votre produit avant
          l’approbation, vous recevrez un e-mail avec une étiquette de retour
          prépayée. Merci de ne pas poster votre produit à etec sans une
          étiquette de retour prépayée fournie par Etec, car cela retarderait le
          processus de réclamation.
        </p>
        <p>
          Si aucune information supplémentaire n’est nécessaire, vous recevrez
          un e-mail de confirmation d’approbation, suivi d’un e-mail de
          confirmation d’expédition avec un numéro de suivi pour votre casque de
          remplacement une fois expédié. Merci de ne pas jeter vos casques
          défectueux tant que vous n’en avez pas reçu un de remplacement.
        </p>
      </div>
    ),
  },
  {
    titre: "Expédition et livraison",
    iconTitre: <Package />,
    iconArrow: FaArrowRight,
    iconX: <X/>,
    description: (
      <div className={`${apparence}`}>
        <p>
          Pour toutes les commandes dépassant 100 USD, la livraison est offerte
          gratuitement.
        </p>

        <p>
          Les retours seront acceptés jusqu’à 10 jours à compter de la réception
          ou du numéro de suivi du client sur les articles non portés. Vous, en
          tant que client, êtes tenu de nous informer par e-mail avant de
          retourner l’article.
        </p>

        <p>
          Sinon, des frais de port standards s’appliquent. Consultez nos
          Conditions générales de livraison pour plus de détails.
        </p>
      </div>
    ),
  },
  {
    titre:'Soutien',
    iconArrow:FaArrowRight,
    iconTitre:<Headset />,
    iconX:<X/>,
    description:<div className={`${apparence}`}>
      <h2>Contactez notre équipe dés aujourd'hui</h2>
      <p>Besoin d'aide ? Envoyez nous votre message via le formulaire ci-dessous et nous vous répondrons le plus vite possible !</p>
      <SupportForm/>
    </div>
  }
];

export const services :{icon:JSX.Element,titre:string, description:string}[] =[
  {
    icon:<Van />,
    titre:'Livraison gratuite',
    description:'24 $+ commandes expédiée'
  },
  {
    icon:<CreditCard />,
    titre:'Paiements sécurisés',
    description:'Options de paiement fiables'
  },
  {
    icon:<Undo2 />,
    titre:'45 jours de retour gratuit',
    description:'Rendements simples et sans risque'
  },
]

// Image de About
export const aboutImg : {img:string, titre?:string, description?:string, url?:string, lien?:string, order?:string}[] =[
  {
    img:imageGarde,
    
  },
  {
    img:meuble,
    description:'Plongez dans notre sélection méticuleusement sélectionnée, soutenue par plus de 20 ans d’expérience dans le secteur.',
    titre:'Gamme Exclusive'
  },
  {
    img:parfum,
    description:'Nos produits transcendent les tendances éphémères, incarnant une innovation intemporelle qui leur garantit leur pertinence et leur avant-garde pendant des années.',
    titre:'Innovation durable'
  },
  {
    img:collection,
    description:'Achetez en toute confiance en sachant que nos produits proviennent d’usines réputées à travers le monde, respectant des normes de conformité strictes',
    titre:'Approvisionnement éthique'
  },
  {
    img:parfumerie,
    description:'Notre quête d’excellence implique une exploration approfondie des usines de premier plan à l’échelle mondiale, afin de garantir que notre gamme  reflète les standards des marques renommées. Nous nouons des partenariats solides avec ces installations, en privilégiant des facteurs tels que la durabilité et les pratiques de production éthiques.',
    titre:'Sélection  Premium',
    url:'/boutique',
    lien:'Vérifiez notre boutique'

  },
  {
    img:boutiques,
    description:'Chez Etec, nous évitons les tendances de passage au profit d’une valeur et d’une utilité durables. Notre engagement ? Offrir des produits  qui s’intègrent parfaitement à votre vie, promettant des années de performance fiable et un attrait intemporel.',
    titre:'Produits intemporelles',
    url:'/blog',
    lien:'Consultez notre blog',
    order:'md:order-1'
  }
]