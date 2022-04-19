import { Box, Flex, Image } from "@chakra-ui/react";
import { useEffect } from "react";
import { Header } from "../components/Header";
import { api } from "../services/api";

interface ContAfrica {
  id: number;
  image: string;
  país: string;
  Sobre: string;
}

export default function Africa() {
  useEffect(() => {

    fetch('http://localhost:3000/africa') //rota possivelmente criariamos no futuro
    .then(response => console.log(JSON.stringify(response)))

  }, [])

  return(
    <Box w="1440px">
      <Header/>

      {/* <Flex w="1440px" h="300px">
        <Image src='/Continentes/MapaAfrica.jpg' alt='mapa mundi centralizando a africa' />
      </Flex> */}
    </Box>
  )
}

// useEffect(() => {
//   async function loadProducts() {
//    const response =  await api.get<Product[]>('products');

//    const data = response.data.map(product => ({
//     ...product,
//     priceFormatted: formatPrice(product.price) //formatação
//    }))

//    setProducts(data);
//   }

//   loadProducts();
// }, []);
