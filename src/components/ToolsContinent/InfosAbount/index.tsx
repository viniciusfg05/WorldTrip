import { Box, Grid, Spinner, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { api } from "../../../services/api";

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

interface apiDataProps{
  ContinentProps?: string;
}

export function InfosAbount({ContinentProps}: apiDataProps) {
  const { data, isLoading, error } = useQuery('AfricaInfosType', async () => {
    const reponse = await api.get<ContinentProps[]>(ContinentProps)
    const data = reponse.data.map((data) => {
      return data
    })

    return data
  })

  return(
    <>
      {isLoading ? (
        <Spinner/>
      ) : error ? (
        <Text>Erro</Text>
      ): (
        <>
          {data.map(rest => (
            <Grid key={rest.id} templateColumns={{ sm: "repeat(3, 1fr)", md: "repeat(3, 165px)"}} gap={{md: "42"}} textAlign="center"   alignItems="center">
              <Box lineHeight={{sm: "20px", md: "40px"}}>
                <Text color="yellow.500" fontWeight="600" fontSize={{sm: "24px", md: "48px"}}>{rest.info.QtdPaises}</Text>
                <Text fontSize={{sm: "18px", md: "24px"}} color="gray.600" fontWeight="600">{rest.info.infoPaís}</Text>
              </Box>
          
              <Box lineHeight={{sm: "20px", md: "40px"}}>
                <Text color="yellow.500" fontWeight="600" fontSize={{sm: "24px", md: "48px"}}>{rest.info.QtdLinguas}</Text>
                <Text fontSize={{sm: "18px", md: "24px"}} color="gray.600" fontWeight="600">{rest.info.infoLígua}</Text>
              </Box>
          
              <Box lineHeight={{sm: "20px", md: "40px"}}>
                <Text color="yellow.500" fontWeight="600" fontSize={{sm: "24px", md: "48px"}}>{rest.info.QtdCidades}</Text>
                <Text fontSize={{sm: "18px", md: "24px"}} color="gray.600" fontWeight="600">{rest.info.infoCidades}</Text>
              </Box>
            </Grid>
          ))}
        </>
      )}
    </>
  )
}
