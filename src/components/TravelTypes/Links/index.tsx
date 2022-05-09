import { Flex, Link as ChakraLink, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import { useBreakpointValue } from '@chakra-ui/react'

interface LinksProps {
  href?: string;
  icon?: string;
  alt?: string;
  info?: string;
}

interface TravelTypesProps {
  
}

export function Links() {
  const [travelTypes, setTravelTypes] = useState<LinksProps[]>([]);

  const isWideVersion = useBreakpointValue({
    sm: false,
    md: true
  })


  useEffect(() => {
    async function loadContinet() {
      const response = await api.get<LinksProps[]>('TravelTypes')
      const data = response.data.map(travelTypes => ({
        ...travelTypes,

      }))

      setTravelTypes(data)
    }
    loadContinet()
  }, []); 

  travelTypes.map(result => ({
    ...result
  }))

  return(
    <>

    {travelTypes.map(result => (
      <Link href={result.href} passHref>
        <ChakraLink _hover={{
          textDecoration: "none"
        }}>
            <Flex as="div" align="center" direction={{sm: "row", md: "column"}} w="158px" justifyContent={{sm: "center"}} >
              
              { isWideVersion ? (
                <Image w={{sm: "16px", md: "100%"}} src={result.icon} alt={result.alt} />
              ) : (
                <Image w={{sm: "8px"}} alignItems="center" src="/TravelTypes/ellipse.svg" alt={result.alt} />
              )}

                <Text fontSize={{sm: "14px", md: "24"}} fontWeight="bold" mt={{md: "24px"}} ml={{sm: "8px"}} color="gray.600">{result.info}</Text>
            </Flex>
        </ChakraLink>
      </Link>
    ))}
    </>
  )
}