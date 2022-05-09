import { Box, Center, Flex, Image } from "@chakra-ui/react";

export function Banner() {
  return (
    <Flex as="div" w={{sm: "375px", md: "1440px"}} h={{sm: "100%", md: "368px"}} my="0" mx={{md: "auto"}}>
        <Image src='Banner.svg' w="100%" alt='5 Continentes, infinitas possibilidades. Chegou a hora de tirar do papel a viagem que você sempre sonhou. ' />
    </Flex>
  )
}