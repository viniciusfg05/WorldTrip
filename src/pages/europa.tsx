import { Box, Flex, Image, Text, Grid, Circle } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { InfosAbount } from "../components/ToolsContinent/InfosAbount";
import { InfosCity } from "../components/ToolsContinent/infosCity";
import { Header } from "../components/Header";
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

export default function Africa() {
  const [continente, setContinente] = useState<ContinentProps[]>([]);

  useEffect(() => {
    async function loadContinet() {
      const response = await api.get<ContinentProps[]>('EuropaInfos')
      const data = response.data.map(continet => ({
        ...continet,
      }))

      setContinente(data)
    }
    loadContinet()
  }, []); 

  return(
    <>
      <Header/>
      <Flex as="div" w="1440px" my="0" mx="auto" direction="column">
        <Flex as="div" w="100%" h="500px" justifyContent="center" >
          <Image src='/Continentes/Europa.png' alt='mapa mundi centralizando a africa' />

        </Flex>
        {continente.map(rest => (
          <>
            <Box color="#fff" w="1160px" mx="auto">
              <Text mt="-160px" fontWeight="bold" fontSize="48px" >Europa</Text>
            </Box>
            <Grid templateColumns='repeat(2, 1fr)' gap={70} w="1160px" my="80px" mx="auto">

                <Box w="600px" h="211px">
                  <Text fontSize="24px" color="gray.600" lineHeight="36px">{rest.continente}</Text>
                </Box>

                <InfosAbount AfricaInfos={"EuropaInfos"}/>
            </Grid>

            <Box>
                <Box>
                  <Text fontSize="36px" fontWeight="500" color="gray.600" mb="40px" mt="80px">Cidades +100</Text>
                </Box>

                <InfosCity infoCity={"Europa"}/>
            </Box>
          </>
          ))}
      </Flex>
    </>
  )
}
