import { Box, Text, Flex, Image, SimpleGrid, Link as ChakraLink, useBoolean } from "@chakra-ui/react";
import Link  from 'next/link'
import { Links } from "./Links";


export function TravelTypes() {
  return (
    <Flex as="div" w="1160px" my="0" mx="auto" mt="80px">
        <SimpleGrid w="100%" columns={5}>
            <Links/>
        </SimpleGrid>
    </Flex>
  )
}