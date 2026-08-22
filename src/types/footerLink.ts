

 export type footerLinkProps = {
    nom:string;
    url:string;
    className?: string
}
export type linkList = {
    pages:footerLinkProps[],
    support:footerLinkProps[],
    liensFinaux:footerLinkProps[]

}
