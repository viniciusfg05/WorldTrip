import { Box, Center, Flex, Image } from "@chakra-ui/react";
import {ChevronLeftIcon} from "@chakra-ui/icons"
import Link from "next/link";
import { useRouter } from "next/router";

export function Header() {
  const { asPath } = useRouter()
  const notHomePage = asPath !== '/'

  return (
    <Flex w="100vw" h={{sm: "50px", md: "100px"}} justify="center" align="center">
      <Box w={{md: "627px"}} >
        {notHomePage && (
          <Link href="/" passHref >
            <ChevronLeftIcon ml={{sm: "-70px" ,md: "150px"}} fontSize={{sm: "24px", md: "32px"}} cursor='pointer'/>
          </Link>
        )}
      </Box>

      <Box w={{md: "812px"}} >
        <Image cursor="pointer"  src='Logo.svg' alt='WorldTrip' />
      </Box>
    </Flex>
  )
}
