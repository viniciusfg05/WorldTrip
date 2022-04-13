import type { NextPage } from 'next'
import { Flex  } from '@chakra-ui/react'
import { Header } from '../components/Header'
import { Banner } from '../components/Banner'

const Home: NextPage = () => {
  return (
    <>
      <Header/>
      <Banner/>
    </>
  )
}

export default Home
