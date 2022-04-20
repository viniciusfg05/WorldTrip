import { Box, Flex, Image, Text, Grid, Circle } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { api } from "../services/api";

interface ContinentProps {
  id: number;
  Africa: string;
}

interface AfricaProps {
  id: number;
  image: string;
  país: string;
  cidade: string;
  Bandeira: string;
  sobre: string;
}

export default function Africa() {
  const [continente, setContinente] = useState<ContinentProps[]>([]);
  const [paisesTheContinente, setPaisesTheContinente] = useState<AfricaProps[]>([]);

  useEffect(() => {
    async function loadContinet() {
      const response = await api.get<ContinentProps[]>('continente')
      const data = response.data.map(continet => ({
        ...continet,
      }))

      setContinente(data)
    }
    loadContinet()
  }, []); 

  useEffect(() => {
    async function loadContinet() {
      const response = await api.get<AfricaProps[]>('africa')
      const data = response.data.map(continet => ({
        ...continet,
      }))

      setPaisesTheContinente(data)
    }
    loadContinet()
  }, []); 


  return(
    <>
      <Header/>
      <Flex as="div" w="1440px" my="0" mx="auto" direction="column">
        <Flex as="div" w="100%" h="500px" justifyContent="center" >
          <Image src='/Continentes/Africa.png' alt='mapa mundi centralizando a africa' />

        </Flex>
        {continente.map(rest => (
          <>
            <Box color="#fff" w="1160px" mx="auto">
              <Text mt="-160px" fontWeight="bold" fontSize="48px" >África</Text>
            </Box>
            <Grid templateColumns='repeat(2, 1fr)' gap={70} w="1160px" my="80px" mx="auto">

                <Box w="600px" h="211px">
                  <Text fontSize="24px" color="gray.600" lineHeight="36px">{rest.Africa}</Text>
                </Box>

                <Grid templateColumns='repeat(3, 165px)' gap={42} textAlign="center" alignItems="center">
                  <Box lineHeight="40px">
                    <Text color="yellow.500" fontWeight="600" fontSize="48px">50</Text>
                    <Text fontSize="24px" color="gray.600" fontWeight="600">paises</Text>
                  </Box>

                  <Box lineHeight="40px">
                    <Text color="yellow.500" fontWeight="600" fontSize="48px">60</Text>
                    <Text fontSize="24px" color="gray.600" fontWeight="600">Línguas</Text>
                  </Box>

                  <Box lineHeight="40px">
                    <Text color="yellow.500" fontWeight="600" fontSize="48px">27</Text>
                    <Text fontSize="24px" color="gray.600" fontWeight="600">Cidades +100</Text>
                  </Box>
                </Grid>
            </Grid>

            <Box>
                <Box>
                  <Text fontSize="36px" fontWeight="500" color="gray.600" mb="40px" mt="80px">Cidades +100</Text>
                </Box>
                  <Grid templateColumns='repeat(4, 1fr)' h="279px" gap={45}>
                  {paisesTheContinente.map(result => (
                    <Box bg="white">
                      <Box h="210px" overflow='hidden' >
                        <Image  src={result.image}  alt='' />
                      </Box>
                      <Flex as="div"  p="16x" justifyContent="space-between" padding="24px" >
                        <Box>
                          <Text fontSize="24px" fontWeight="600" color="gray.600">{result.cidade}</Text>
                          <Text fontSize="16px" fontWeight="500" color="gray.400">{result.país}</Text>
                        </Box>

                        <Circle  size='45px' color='white' overflow='hidden'>
                          <Image  w="45px" h="45px" src={result.Bandeira} alt='' />
                        </Circle >
                      </Flex>
                    </Box>
                    ))}
                  </Grid>
            </Box>
          </>
          ))}


      </Flex>
    </>
  )
}

// useEffect(() => {
//   async function loadProducts() {
//    const response =  await api.get<Product[]>('products');

//    const data = response.data.map(product => ({
//     ...product,
//     priceFormatted: formatPrice(product.price) //formatação
//    }))

//    setProducts(data);
//   }

//   loadProducts();
// }, []);
