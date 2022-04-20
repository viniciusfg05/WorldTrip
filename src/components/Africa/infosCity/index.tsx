import { Box, Flex, Image, Text, Grid, Circle } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import { PopoverComponents } from "../../Popover";

interface AfricaProps {
  id: number;
  image: string;
  país: string;
  cidade: string;
  Bandeira: string;
  sobre: string;
}

export function InfosCity() {
  const [paisesTheContinente, setPaisesTheContinente] = useState<AfricaProps[]>([]);

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
    <Grid templateColumns='repeat(4, 1fr)' h="279px" gap={45}>
    {paisesTheContinente.map(result => (
      <Box bg="white">
        <Box h="210px" overflow='hidden' >
          <Image  src={result.image}  alt='' />
        </Box>
        <Flex as="div"  p="16x" justifyContent="space-between" padding="24px" >
          <Box>
            <Box display="flex" alignItems="center" >
              <Text fontSize="24px" fontWeight="600" color="gray.600" mr="10px" >{result.cidade}</Text>
              <PopoverComponents 
              title={"Sobre"}
              about={result.sobre.slice(0, 150)}
              pontinhos={"..."}
              />
            </Box>
            <Text fontSize="16px" fontWeight="500" color="gray.400">{result.país}</Text>
          </Box>

          <Box>
            <Circle  size='45px' color='white' overflow='hidden'>
              <Image  w="45px" h="45px" src={result.Bandeira} alt='' />
            </Circle >
          </Box>
        </Flex>
      </Box>
      ))}
    </Grid>
  )
}