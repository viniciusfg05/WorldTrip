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
      const response = await api.get<ContinentProps[]>('AfricaInfos')
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
      <Flex as="div" w={{sm: "375px", md: "1440px"}} my="0" mx="auto" direction="column">
        <Flex as="div" w={{sm: "100vw", md: "100%"}} h={{sm: "150px", md: "500px"}} justifyContent="center" >
          <Image src='/Continentes/Africa.png' alt='mapa mundi centralizando a africa' />

        </Flex >
        {continente.map(rest => (
          <Box w={{sm: "375px", md: "1440px"}}>
            {/* <Box color="#fff" w="1160px" mx="auto">
              <Text mt="-160px" fontWeight="bold" fontSize="48px" >África</Text>
            </Box> */}
            <Grid templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(2, 1fr)"}} gap={70} w={{sm: "343px" ,md: "1160px"}} my="80px" mx="auto">

                <Box w={{sm: "343px" ,md: "600px"}} h="211px">
                  <Text fontSize={{sm: "16px" ,md: "24px"}} color="gray.600" lineHeight={{sm: "16px", md: "36px"}}>{rest.continente}</Text>
                </Box>

                <InfosAbount AfricaInfos={"AfricaInfos"}/>
            </Grid>

            <Box>
                <Box>
                  <Text fontSize="36px" fontWeight="500" color="gray.600" mb="40px" mt="80px">Cidades +100</Text>
                </Box>

                <InfosCity infoCity={"africa"}/>
            </Box>
          </Box>
          ))}
      </Flex>
    </>
  )
}
