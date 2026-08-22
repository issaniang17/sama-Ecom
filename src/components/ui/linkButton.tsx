import type { footerLinkProps } from "@/types/footerLink"
import { Link } from "react-router-dom"


const LinkButton = ({url, nom, className}: footerLinkProps) => {
  return (
    <Link to={url} className={`rounded-full  inline-flex items-center justify-center hover:-translate-y-0.5 transition-transform duration-150 ease-in ${className}`}>
        {nom}
    </Link>
  )
}

export default LinkButton