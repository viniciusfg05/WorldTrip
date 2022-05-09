import { Flex, Grid, SimpleGrid } from "@chakra-ui/react";
import { Links } from "./Links";


export function TravelTypes() {
  return (
    <Flex as="div" w={{sm: "375px", md: "1160px"}} h={{sm: "120px", md: "100%"}} my="0" mx="auto" mt={{sm: "36px", md: "80px"}}>
        <Grid templateColumns={{ sm: "repeat(2, 1fr)", md: "repeat(5, 1fr )"}} w="100%">
            <Links/>
        </Grid>
    </Flex>
  )
} 