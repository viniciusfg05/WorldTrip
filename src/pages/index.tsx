import type { NextPage } from 'next'
import { Flex  } from '@chakra-ui/react'
import { Header } from '../components/Header'
import { Banner } from '../components/Banner'
import { TravelTypes } from '../components/TravelTypes'

const Home: NextPage = () => {
  return (
    <>
      <Header/>
      <Banner/>
      <Flex as="main" direction="column" my="0" w="1160px" mx="auto">
        <TravelTypes/>
      </Flex>
    </>
  )
}

export default Home
