import { GetStaticProps } from "next";
import { useEffect, useState } from "react";
import { api } from "../services/api";

interface apiDataProps {
  infoCity: string;
}


interface AfricaProps {
  id: number;
  image: string;
  país: string;
  cidade: string;
  Bandeira: string;
  sobre: string;
}

interface ContiProps {
  paisesTheContinente: {
    id: number;
    image: string;
    país: string;
    cidade: string;
    Bandeira: string;
    sobre: string;
  }
}

export function ApiData({paisesTheContinente}: ContiProps) {

  return (
    <>
    <p>{paisesTheContinente.sobre}</p>
    {/* {paisesTheContinente.map(result => (
      <p>{result.cidade}</p>
    ))} */}
    </>
  )
}

//gera a pagina static confirme as pessoas acessão
export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const  getStaticProps: GetStaticProps = async () => {

  
  const [paisesTheContinente, setPaisesTheContinente] = useState<AfricaProps[]>([]);

  useEffect(() => {
    async function loadContinet() {
      const response = await api.get<AfricaProps[]>("infoCity")
      const data = response.data.map(continet => ({
        ...continet,
      }))

      setPaisesTheContinente(data)
    }
    loadContinet()
  }, []);

  return {
    props: {
      paisesTheContinente
    },
    revalidate: 60 * 30, //30 min
  }
}
