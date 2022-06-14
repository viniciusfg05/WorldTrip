import type { NextPage } from 'next'
import { Text, Flex, Box, Spinner  } from '@chakra-ui/react'
import { Header } from '../components/Header'
import { Banner } from '../components/Banner'
import { TravelTypes } from '../components/TravelTypes'
import { CompSwiper } from '../components/Swiper'
import { Divide } from '../components/Divide/Index'
import { useQuery } from 'react-query'
import { api } from '../services/api'


const Home: NextPage = () => {
  const { data , isLoading, error } = useQuery('TravelTypes', async () => {
    const result = await api.get('TravelTypes')
    

    return result
})

  return (
    <>
      <Header/>
      { isLoading ? (
        <Flex justifyContent="center" alignItems="center" h="100vh">
          <Spinner w={{sm: "50px", md: "200px"}} h={{sm: "50px", md: "200px"}}/>
        </Flex>
        ): (
        <>
          <Banner/>
          
          <Flex as="main" direction="column" my="0" w={{sm: "375px", md: "1440px"}} mx="auto">
            <TravelTypes/>
            <Divide />
          
            <Box cursor="disabled" color="gray.600" fontSize={{sm: "20px", md: "36px"}} fontWeight="500" textAlign='center' mb={{sm: "20px", md: "52px"}  }>
              <Text>Vamos nessa?</Text>
              <Text>Então escolha seu continente</Text>
            </Box>
            
            <CompSwiper />
          
          </Flex>
        </>
      )}

    </>
  )
}

export default Home

