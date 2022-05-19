import { Box, Flex, Image, Text, Grid, Circle, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { InfosAbount } from "../components/ToolsContinent/InfosAbount";
import { InfosCity } from "../components/ToolsContinent/infosCity";
import { Header } from "../components/Header";
import { api } from "../services/api";
import { getData } from "../hooks";
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
  // const [travelTypes, setTravelTypes] = useState<LinksProps[]>([]);


  const { data, isLoading, error } = useQuery('AfricaInfos', async () => {
      const africa = await api.get<ContinentProps[]>('AfricaInfos')

      return africa
  })



  return(
    <>
      <Header/>
      { isLoading ? (
        <Flex justifyContent="center" alignItems="center" h="100vh">
          <Spinner w={{sm: "50px", md: "200px"}} h={{sm: "50px", md: "200px"}}/>
        </Flex>
      ) : error ? (
        <Flex justifyContent="center">
          <Text>Erro ao carregar dados</Text>
      </Flex>
      ) : (
        <Flex as="div" w={{sm: "100vw", md: "1440px"}} my="0" mx="auto" direction="column">
          
          <Flex as="div" overflow='hidden'>
            <Box w={{sm: "100%", md: "100%"}} h={{sm: "100%", md: "500px"}} justifyContent="center" >
              <Image src='/Continentes/Africa.png' alt='mapa mundi centralizando a africa' />
            </Box>
          </Flex >

          {data.data.map(rest => (
            <>
              <Box mt={{sm: "-35px", md: "-150px"}} color="#fff" w="150px" ml={{sm: "20px", md: "160px"}} mb={{sm: "30px", md: "160px"}} >
                <Text fontWeight="bold" fontSize={{sm: "18px", md: "48px"}} >África</Text>
              </Box>

              <Box w={{sm: "100%", md: "1440px"}}>
                <Grid templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(2, 1fr)"}} gap={{sm: "25", md: "70"}} w={{sm: "360px" , md: "1160px"}} mx={  {sm: "16px", md: "auto"}}>

                    <Box w={{sm: "100%", md: "600px"}} h={{sm: "100%", md: "211px"}}>
                      <Text fontSize={{sm: "16px" ,md: "24px"}} color="gray.600" lineHeight={{sm: "16px", md: "36px"}}>{rest.continente}</Text>
                    </Box>

                    <InfosAbount ContinentProps={"AfricaInfos"}/>
                </Grid>
              </Box>

              <Box mx={{sm: "16px"}}>
                <Text fontSize={{sm: "26px", md: "36px"}} fontWeight="500" color="gray.600" mb={{sm: "20px", md: "40px"}} mt={{sm: "40px", md: "80px"}} >Cidades +100</Text>
              </Box>  

              <Box mx={{sm: "auto"}}>
                <InfosCity infoCity={"europa"}/>
              </Box>
            </>
            ))}
        </Flex>
      )}
    </>
  )
}