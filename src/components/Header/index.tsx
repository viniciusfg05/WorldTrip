import { Box, Center, Flex, Image } from "@chakra-ui/react";
import {ChevronLeftIcon} from "@chakra-ui/icons"

export function Header() {
  return (
    <Flex w="100vw" h={{sm: "50px", md: "100px"}} justify="center" align="center">
        <Image cursor="pointer"  src='Logo.svg' alt='WorldTrip' />
    </Flex>
  )
}