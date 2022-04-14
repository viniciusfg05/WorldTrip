import { Box, Text, Flex, Image, SimpleGrid, Link, LinkOverlay  as ChakraLink, useBoolean } from "@chakra-ui/react";


export function TravelTypes() {
  return (
    <Flex as="div" w="1160px" my="0" mx="auto">
        <SimpleGrid w="100%" columns={5}>

            <ChakraLink href="#" >
                <Flex as="div" align="center" direction="column" w="160px" transform="scale(1.1)">
                    <Image src="/drink.svg" alt="Vida notura - Imagem de um drink, simbolizando a vida noturna" />
                    <Text fontSize="24" fontWeight="bold" mt="24px" color="gray.600">vida notura</Text>
                </Flex>
            </ChakraLink>

            <ChakraLink href="#" textDecoration="none">
                <Flex as="div" align="center" direction="column" >
                    <Image src="/surf.svg" alt="Praia - Imagem de um prancha de surf, simbolizando a prai" />
                    <Text fontSize="24" fontWeight="bold" mt="24px" color="gray.600">praia</Text>
                </Flex>
            </ChakraLink>

            <ChakraLink href="#" textDecoration="none">
                <Flex as="div" align="center" direction="column" >
                    <Image src="/Predio.svg" alt="Moderno - Imagem de um predio, simbolizando a modernidade" />
                    <Text fontSize="24" fontWeight="bold" mt="24px" color="gray.600">moderno</Text>
                </Flex>
            </ChakraLink>

            <ChakraLink href="#" textDecoration="none">
                <Flex as="div" align="center" direction="column" >
                    <Image src="/museum.svg" alt="Clássico - Imagem de um museu, simbolizando a antiguidade" />
                    <Text fontSize="24" fontWeight="bold" mt="24px" color="gray.600">Clássico</Text>
                </Flex>
            </ChakraLink>

            <ChakraLink href="#" textDecoration="none">
                <Flex as="div" align="center" direction="column" >
                    <Image src="/earth.svg" alt="e mais - Imagem da terra" />
                    <Text fontSize="24" fontWeight="bold" mt="24px" color="gray.600">e mais...</Text>
                </Flex>
            </ChakraLink>
        </SimpleGrid>
    </Flex>
  )
}