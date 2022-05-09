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

interface apiDataProps {
  infoCity: string;
}

export function InfosCity({infoCity}: apiDataProps) {
  const [paisesTheContinente, setPaisesTheContinente] = useState<AfricaProps[]>([]);

  useEffect(() => {
    async function loadContinet() {
      const response = await api.get<AfricaProps[]>(infoCity)
      const data = response.data.map(continet => ({
        ...continet,
      }))

      setPaisesTheContinente(data)
    }
    loadContinet()
  }, []);
  
  return(
    <Grid templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(4, 1fr)"}} h="279px" gap={{sm: "15", md: "45"}} >
    {paisesTheContinente.map(result => (
      
      <Box bg="white" w={{sm: "256px"}}>
        <Box h={{sm: "176px", md: "210px"}} overflow='hidden' >
          <Image  src={result.image}  alt='' />
        </Box>

        <Flex as="div"  p={{sm: "14px", md: "16x"}} justifyContent="space-between" padding="24px" >
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