import { useEffect, useState } from "react";

import axios from "axios";

type fetchResult<T> = {
  data: T | null,
  loading: boolean;
  erreur: string | null
}

const FiltreProducts = <T>(url : string): fetchResult<T> => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<T | null>(null);
  const [erreur, setErreur] = useState<string | null>(null);

  useEffect(()=>{
    const allProducts = async () => {
      try {
        setLoading(true);
        setErreur(null)
        const response = await axios.get<T>(url);
        setData(response.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setErreur(error.message);
        }else{
          return setErreur('Une Erreur est survenue')
        }
      } finally {
        setLoading(false);
      }
    };
    allProducts();
  }, [url])
  
  return {erreur, loading, data};
};

export default FiltreProducts;
