import type { NextPage } from 'next'
import { Text, Divider, Flex, Stack, Box  } from '@chakra-ui/react'
import { Header } from '../components/Header'
import { Banner } from '../components/Banner'
import { TravelTypes } from '../components/TravelTypes'
import { CompSwiper } from '../components/Swiper'
import { Divide } from '../components/Divide/Index'

const Home: NextPage = () => {
  return (
    <>
      <Header/>
      <Banner/>
      <Flex as="main" direction="column" my="0" w="1440px" mx="auto">
        <TravelTypes/>
        <Divide/>

        <Box color="gray.600" fontSize="36px" fontWeight="500" textAlign='center' mb="52px">
          <Text>Vamos nessa?</Text>
          <Text>Então escolha seu continente</Text>
        </Box>
        
        <CompSwiper />

        
          

      </Flex>

    </>
  )
}

export default Home
