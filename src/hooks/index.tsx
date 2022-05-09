import { useState } from "react";
import { useQuery } from "react-query";
import { api } from "../services/api";

interface ContinentProps {
  id: number;
  continente: string;
  info: {
    QtdPaises:  number,
    infoPaís: string,
    QtdLinguas: number;
    infoLígua: string;
    QtdCidades: number,
    infoCidades: string;
  }

}

export async function getData() {

  const { data, isLoading, error } = useQuery('data', async () => {
    const response = await api.get<ContinentProps[]>('AfricaInfos')

    return response
  })

}