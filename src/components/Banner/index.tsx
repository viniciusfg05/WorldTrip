import { Box, Center, Flex, Image, useBreakpointValue } from "@chakra-ui/react";


export function Banner() {
  const isWideVersion = useBreakpointValue({
    sm: false,
    md: true
  })

  return (
    <Flex as="div" w={{sm: "375px", md: "1440px"}} h={{sm: "100%", md: "368px"}} my="0" mx={{md: "auto"}}>
      {!isWideVersion ? (
        <Image src='BannerMobile.svg' w="100%" alt='5 Continentes, infinitas possibilidades. Chegou a hora de tirar do papel a viagem que você sempre sonhou. ' />
        ) : (
        <Image src='Banner.svg' w="100%" alt='5 Continentes, infinitas possibilidades. Chegou a hora de tirar do papel a viagem que vsempre sonhou. ' />
      )}

    </Flex>
  )
}