import type { footerLinkProps, linkList } from "@/types/footerLink";
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
    link:'#'
  },
  {
    name:FaInstagram,
    link:'#'
  },
  {
    name:FaLinkedin,
    link:'#'
  },
  {
    name:BsTwitterX,
    link:'#'
  },
]

export const categoryNav: footerLinkProps[] = [
  {nom:'Tous les produits', url:'/boutique'},
  {nom:'Beauté', url:'beauty'},
  {nom:'Parfums', url:'fragrances'},
  {nom:'Meubles', url:'furniture'},
  {nom:'Groceries', url:'groceries'}
]