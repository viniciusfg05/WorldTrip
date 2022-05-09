import { Box, Text, Image, LinkOverlay  as ChakraLink} from "@chakra-ui/react";

interface SwiperProps {
    href?: string;
    image: string;
    Continente: string;
    ContinentInfo: string;
  }

export function ComponentSwiper({href, image, Continente, ContinentInfo}:SwiperProps) {
    return(
        <>  
            <ChakraLink href={href} >
                <Image src={image} alt='' filter='auto' brightness='40%'/>
            </ChakraLink>
            <Box pos="absolute" color="#fff" >
                <Text fontWeight="bold" fontSize={{sm: "24px", md: "48px"}}>{Continente}</Text>
                <Text fontWeight="bold" fontSize={{sm: "12px", md: "24px"}}>{ContinentInfo}</Text>
            </Box>
        </>
    )
}