import { Box, Center, Flex, Image } from "@chakra-ui/react";
import {ArrowLeftIcon, ChevronLeftIcon} from "@chakra-ui/icons"

export function Header() {
  return (
    <Flex w="100vw" alignItems="center" >
      <Box>
        <Image cursor="pointer" mr="auto" pos="absolute" w="32px" src='chevron-left.svg' alt='back' />
      </Box>
      
      <Flex w="100%" h={{sm: "50px", md: "100px"}} justify="center" align="center">
          <Image cursor="pointer"  src='Logo.svg' alt='WorldTrip' />
      </Flex>
    </Flex>
  )
}
