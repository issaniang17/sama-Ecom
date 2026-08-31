

type cardProps ={
    question:string;
    reponse:string;
    
}
export type faqQuestionProps= {
    infoAchat:{titre:string, card:cardProps[]},
    infoPay:{titre:string, card:cardProps[]},
    ordre:{titre:string, card:cardProps[]}
}
