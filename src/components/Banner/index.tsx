import { Box, Center, Flex, Image } from "@chakra-ui/react";

export function Banner() {
  return (
    <Flex w="100vw" my="0" mx="auto">
        <Image src='Banner.svg' w="100vw" alt='5 Continentes, infinitas possibilidades. Chegou a hora de tirar do papel a viagem que você sempre sonhou. ' />
    </Flex>
  )
}