import { Flex, SimpleGrid } from "@chakra-ui/react";
import { Links } from "./Links";


export function TravelTypes() {
  return (
    <Flex as="div" w={{sm: "375px", md: "1160px"}} my="0" mx="auto" mt="80px">
        <SimpleGrid w="100%" columns={5}>
            <Links/>
        </SimpleGrid>
    </Flex>
  )
}