import type { footerLinkProps, linkList } from "@/types/footerLink";
import type { IconType } from "react-icons";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import type { SupportProps } from "@/types/support";
import { FaArrowRight } from "react-icons/fa";
import {
  CreditCard,
  Headset,
  Package,
  
  ShieldCheck,
  Undo2,
  Van,
  X,
} from "lucide-react";
import SupportForm from "@/components/formulaire/supportForm";
import type { JSX } from "react/jsx-runtime";
import imageGarde from "@/assets/aboutPage/baume.png";
import boutiques from "@/assets/aboutPage/boutiques.png";
import parfum from "@/assets/aboutPage/parfums.png";
import parfumerie from "@/assets/aboutPage/parfumerie.png";
import collection from "@/assets/aboutPage/collections.png";
import meuble from "@/assets/aboutPage/meubles.png";
import type { faqQuestionProps } from "@/types/faqQuestion";
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
    { nom: "Produit", url: "/boutique/beauty/essencemascaralashprincess" },
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
const apparence = "leading-relaxed space-y-4";
export const support: SupportProps[] = [
  {
    titre: "Garantie",
    iconTitre: <ShieldCheck />,
    iconArrow: FaArrowRight,
    iconX: <X />,
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
    iconX: <X />,
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
    titre: "Soutien",
    iconArrow: FaArrowRight,
    iconTitre: <Headset />,
    iconX: <X />,
    description: (
      <div className={`${apparence}`}>
        <h2>Contactez notre équipe dés aujourd'hui</h2>
        <p>
          Besoin d'aide ? Envoyez nous votre message via le formulaire
          ci-dessous et nous vous répondrons le plus vite possible !
        </p>
        <SupportForm />
      </div>
    ),
  },
];

export const services: {
  icon: JSX.Element;
  titre: string;
  description: string;
}[] = [
  {
    icon: <Van />,
    titre: "Livraison gratuite",
    description: "24 $+ commandes expédiée",
  },
  {
    icon: <CreditCard />,
    titre: "Paiements sécurisés",
    description: "Options de paiement fiables",
  },
  {
    icon: <Undo2 />,
    titre: "45 jours de retour gratuit",
    description: "Rendements simples et sans risque",
  },
];

// Image de About
export const aboutImg: {
  img: string;
  titre?: string;
  description?: string;
  url?: string;
  lien?: string;
  order?: string;
}[] = [
  {
    img: imageGarde,
  },
  {
    img: meuble,
    description:
      "Plongez dans notre sélection méticuleusement sélectionnée, soutenue par plus de 20 ans d’expérience dans le secteur.",
    titre: "Gamme Exclusive",
  },
  {
    img: parfum,
    description:
      "Nos produits transcendent les tendances éphémères, incarnant une innovation intemporelle qui leur garantit leur pertinence et leur avant-garde pendant des années.",
    titre: "Innovation durable",
  },
  {
    img: collection,
    description:
      "Achetez en toute confiance en sachant que nos produits proviennent d’usines réputées à travers le monde, respectant des normes de conformité strictes",
    titre: "Approvisionnement éthique",
  },
  {
    img: parfumerie,
    description:
      "Notre quête d’excellence implique une exploration approfondie des usines de premier plan à l’échelle mondiale, afin de garantir que notre gamme  reflète les standards des marques renommées. Nous nouons des partenariats solides avec ces installations, en privilégiant des facteurs tels que la durabilité et les pratiques de production éthiques.",
    titre: "Sélection  Premium",
    url: "/boutique",
    lien: "Vérifiez notre boutique",
  },
  {
    img: boutiques,
    description:
      "Chez Etec, nous évitons les tendances de passage au profit d’une valeur et d’une utilité durables. Notre engagement ? Offrir des produits  qui s’intègrent parfaitement à votre vie, promettant des années de performance fiable et un attrait intemporel.",
    titre: "Produits intemporelles",
    url: "/blog",
    lien: "Consultez notre blog",
    order: "md:order-1",
  },
];

// FAQ question-reponse
export const faqQuestion: faqQuestionProps = {
  infoAchat: {
    titre: "Informations sur les achats",
    
    card: [
      {
        
        question: "Comment puis-je suivre ma commande ?",
        reponse:
          "Une fois votre commande traitée et expédiée, vous recevrez un e-mail de confirmation contenant un numéro de suivi et un lien pour suivre votre colis. Il suffit de cliquer sur le lien fourni ou d’entrer le numéro de suivi sur la page de suivi de la commande de notre site web pour surveiller en temps réel le statut et l’emplacement de votre expédition.",
      },
      {
        
        question: "Quels modes de paiement acceptez-vous ?",
        reponse:
         " Nous acceptons différents modes de paiement pour garantir une expérience d’achat pratique à nos clients. Cela inclut les principales cartes de crédit et de débit telles que Visa, Mastercard, American Express, ainsi que des options de paiement numériques comme PayPal, Apple Pay, Google Pay, et d’autres. Rassurez-vous, toutes les transactions sont traitées de manière sécurisée afin de protéger vos informations financières.",
      },
      {
        
        question: "Puis-je modifier ou annuler ma commande après qu’elle ait été passée ?",
        reponse:
          "Nous comprenons que les circonstances peuvent changer après avoir passé une commande. Bien que nous nous efforçions de traiter les commandes rapidement, vous pouvez encore avoir une fenêtre d’opportunité pour modifier ou annuler votre commande. Pour cela, veuillez contacter notre service client dès que possible avec les détails de votre commande. Nous ferons de notre mieux pour répondre à votre demande, mais veuillez noter qu’une fois la commande traitée pour l’expédition, les modifications ou annulations peuvent ne plus être possibles.",
      },
      {
        
        question: "Proposez-vous la livraison internationale ?",
        reponse:
          "Oui, nous proposons des frais de livraison internationaux vers certains pays à travers le monde. Lors du processus de paiement, vous aurez la possibilité de choisir votre méthode d’expédition préférée et de consulter les délais et coûts de livraison estimés pour les commandes internationales. Veuillez noter que des droits de douane ou des taxes supplémentaires peuvent s’appliquer selon les réglementations d’importation de votre pays, qui relèvent du destinataire. Pour plus d’informations sur l’expédition internationale, veuillez consulter notre page Expédition &amp; Livraison.",
      },
      {
        
        question: "Comment puis-je contacter le service client ?",
        reponse:
          "Nous sommes là pour vous accompagner à chaque étape. Si vous avez des questions, des préoccupations ou besoin d’aide pour votre commande, notre équipe dédiée au service client est disponible pour vous aider. Vous pouvez nous contacter par email à support@example.com ou via la fonction de chat en direct de notre site pendant les heures d’ouverture. Nous nous efforçons de répondre rapidement afin d’assurer une expérience d’achat fluide pour nos précieux clients.",
      },
    ],
  },
  infoPay: {
    titre: "Informations de paiement",
    
    card: [
      {
        
        question: "Est-il sûr d’entrer mes informations de carte bancaire sur votre site web ?",
        reponse:
          "Absolument. Nous prenons très au sérieux la sécurité de vos informations personnelles et financières. Notre site web est équipé d’une technologie de chiffrement avancée et de protocoles de sécurité pour garantir que vos données sont protégées contre tout accès ou interception non autorisés. Lorsque vous saisissez vos informations de carte bancaire lors du paiement, elles sont chiffrées et transmises de manière sécurisée afin d’éviter toute violation potentielle. Vous pouvez acheter en toute confiance en sachant que vos informations sont protégées chez nous.",
      },
      {
        
        question: "Quand ma carte de crédit sera-t-elle débitée pour ma commande ?",
        reponse:
          "Votre carte bancaire sera débitée au moment où votre commande sera passée. Une fois le processus de paiement terminé et soumis votre commande, le paiement sera traité immédiatement. Vous recevrez un e-mail de confirmation une fois la transaction réussie, et votre commande sera traitée pour l’expédition selon nos délais de traitement standard.",
      },
    ],
  },

  ordre: {
    titre: "Ordre et retours",
    
    card: [
      {
        
        question: "Comment puis-je suivre ma commande ?",
        reponse:
          "Une fois votre commande traitée et expédiée, vous recevrez un e-mail de confirmation contenant un numéro de suivi et des instructions pour suivre votre colis. Il vous suffit de cliquer sur le lien de suivi fourni ou d’entrer le numéro de suivi sur la page de suivi de notre commande pour surveiller en temps réel le statut et la localisation de votre expédition.",
      },
      {
        
        question: "Quelle est votre politique de retour ?",
        reponse:
          "Nous voulons que vous soyez entièrement satisfait de votre achat. Si ce n’est pas le cas pour une raison quelconque, nous proposons une politique de retour sans tracas. Les articles éligibles peuvent être retournés dans les 30 jours suivant la livraison pour un remboursement ou un échange. Il vous suffit d’initier le processus de retour via la page Returns &amp; Exchanges de notre site web, et de suivre les instructions fournies. Veuillez vous assurer que l’article est dans son état d’origine, avec toutes les plaques et emballages intacts.",
      },
    ],
  },
};
