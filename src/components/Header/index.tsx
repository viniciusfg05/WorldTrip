import { Box, Center, Flex, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex w="1440px" h="100px" justify="center" align="center">
      <Box>
        <Image src='Logo.svg' alt='Dan Abramov' />
      </Box>
    </Flex>
  )
}