import { Box, Flex, Image, Text, Grid, Circle, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { InfosAbount } from "../components/ToolsContinent/InfosAbount";
import { InfosCity } from "../components/ToolsContinent/infosCity";
import { Header } from "../components/Header";
import { api } from "../services/api";
import { useQuery } from "react-query";

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
  const { data, isLoading, error } = useQuery('EuropaInfos', async () => {
    const response = await api.get<ContinentProps[]>('EuropaInfos')

    return response
  })

  return(
    <>
      <Header/>

      { isLoading ? (
        <Flex justifyContent="center" alignItems="center" h="100vh">
          <Spinner w="200px" h="200px"/>
        </Flex>
      ) : (
        <Flex as="div" w="1440px" my="0" mx="auto" direction="column">
          <Flex as="div" w="100%" h="500px" justifyContent="center" >
            <Image src='/Continentes/Europa.png' alt='mapa mundi centralizando a africa' />

          </Flex>
          {data.data.map(rest => (
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

      )}

    </>
  )
}
