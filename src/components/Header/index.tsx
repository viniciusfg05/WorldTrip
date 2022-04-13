import { Box, Center, Flex, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex w="100vw" h="100px" justify="center" align="center">
        <Image src='Logo.svg' alt='WorldTrip' />
    </Flex>
  )
}