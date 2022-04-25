import { Box, Grid, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
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
  AfricaInfos?: string;
}

export function InfosAbount({AfricaInfos}: apiDataProps) {
  const [continente, setContinente] = useState<ContinentProps[]>([]);

  useEffect(() => {
    async function loadContinet() {
      const response = await api.get<ContinentProps[]>(AfricaInfos)
      const data = response.data.map(continet => ({
        ...continet,
      }))

      setContinente(data)
    }
    loadContinet()
  }, []); 

  return(
    <>
      {continente.map(rest => (
        <Grid templateColumns={{ sm: "repeat(3, 1fr)", md: "repeat(3, 165px)"}} gap={42} textAlign="center" alignItems="center">
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
  )
}