import type { GetServerSideProps, GetStaticProps, NextPage } from 'next'
import { Text, Divider, Flex, Stack, Box  } from '@chakra-ui/react'
import { Header } from '../components/Header'
import { Banner } from '../components/Banner'
import { TravelTypes } from '../components/TravelTypes'
import { CompSwiper } from '../components/Swiper'
import { Divide } from '../components/Divide/Index'
import { useEffect, useState } from 'react'
import { api } from '../services/api'
import { useQuery } from 'react-query'



const Home: NextPage = () => {
  const { data, isLoading, error } = useQuery('AfricaInfos', async () => {
    const africa = await api.get('AfricaInfos')

    return africa
})

  return (
    <>
      <Header/>
      <Banner/>
      <Flex as="main" direction="column" my="0" w={{sm: "375px", md: "1440px"}} mx="auto">
        <TravelTypes/>
        <Divide />

        <Box cursor="disabled" color="gray.600" fontSize={{sm: "20px", md: "36px"}} fontWeight="500" textAlign='center' mb={{sm: "20px", md: "52px"}}>
          <Text>Vamos nessa?</Text>
          <Text>Então escolha seu continente</Text>
        </Box>
        
        <CompSwiper />

      </Flex>

    </>
  )
}

export default Home

// interface AfricaProps {
//   id: number;
//   image: string;
//   país: string;
//   cidade: string;
//   Bandeira: string;
//   sobre: string;
// }

// interface apiDataProps {
//   infoCity: string;
// }

// //gera a pagina static confirme as pessoas acessão
// export const getStaticPaths = () => {
//   return {
//     paths: [],
//     fallback: 'blocking'
//   }
// }

// export const  getStaticProps: GetStaticProps = async () => {

  
//   const [paisesTheContinente, setPaisesTheContinente] = useState<AfricaProps[]>([]);

//   useEffect(() => {
//     async function loadContinet() {
//       const response = await api.get<AfricaProps[]>("infoCity")
//       const data = response.data.map(continet => ({
//         ...continet,
//       }))

//       setPaisesTheContinente(data)
//     }
//     loadContinet()
//   }, []);

//   return {
//     props: {
//       paisesTheContinente
//     },
//     revalidate: 60 * 30, //30 min
//   }
// }
