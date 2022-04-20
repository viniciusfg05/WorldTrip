import { Box, Text, Image, LinkOverlay  as ChakraLink} from "@chakra-ui/react";

interface SwiperProps {
    image: string;
    Continente: string;
    ContinentInfo: string;
  }

export function ComponentSwiper({image, Continente, ContinentInfo}:SwiperProps) {
    return(
        <>  
            <ChakraLink href="/africa">
                <Image src={image} alt='' filter='auto' brightness='40%'/>
            </ChakraLink>
            <Box pos="absolute" color="#fff" >
                <Text fontWeight="bold" fontSize="48px">{Continente}</Text>
                <Text fontWeight="bold" fontSize="24px">{ContinentInfo}</Text>
            </Box>
        </>
    )
}