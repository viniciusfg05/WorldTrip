import { Flex, Link as ChakraLink, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { api } from "../../../services/api";

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

  return(
    <>
    {travelTypes.map(result => (
      <Link href={result.href} passHref>
        <ChakraLink _hover={{
            textDecoration: "none"
        }}>
            <Flex as="div" align="center" direction="column" w="160px" transform="scale(1.1)">
                <Image src={result.icon} alt={result.alt} />
                <Text fontSize="24" fontWeight="bold" mt="24px" color="gray.600">{result.info}</Text>
            </Flex>
        </ChakraLink>
      </Link>
    ))}
    </>
  )
}