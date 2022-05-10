import { Flex, Link as ChakraLink, Image, Text, Spinner } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import { useBreakpointValue } from '@chakra-ui/react'
import { useQuery } from "react-query";

interface LinksProps {
  href?: string;
  icon?: string;
  alt?: string;
  info?: string;
}

export function Links() {
  const [travelTypes, setTravelTypes] = useState<LinksProps[]>([]);

  const isWideVersion = useBreakpointValue({
    sm: false,
    md: true
  })

  const { data, isLoading, error } = useQuery('TravelTypes', async () => {
    const response = await api.get<LinksProps[]>('TravelTypes')

    return response
  }, {
      staleTime: 1000 * 60 * 10 //10min
  })

  return(
    
    <>
    { isLoading ? (
      <Flex justifyContent="center" alignItems="center">
        <Spinner w="100px" h="100px"/>
      </Flex>
    ) : (
      <>
        {data.data.map(result => (
        <Link key={result.href} href={result.href} passHref>
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
    )}

    
    </>
  )
}