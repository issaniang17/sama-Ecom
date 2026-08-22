import type { linkList } from "@/types/footerLink";
import type {IconType} from 'react-icons'
import {FaFacebookF, FaInstagram, FaLinkedin} from 'react-icons/fa'
import {BsTwitterX} from 'react-icons/bs'
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
  ]
};

// Social links
export const socialMediaLinks: {name:IconType; link:string}[] = [
  {
    name:FaFacebookF,
    link:'https://'
  },
  {
    name:FaInstagram,
    link:'https://'
  },
  {
    name:FaLinkedin,
    link:'https://'
  },
  {
    name:BsTwitterX,
    link:'https://'
  },
]