import { Box } from "@mui/material"
import Card from "./components/Card"

const desc = 'A floral, solar and voluptuous interpretation composed by Oliver Polge, Perfumer-Creator for the House of the CHANEL'

function App() {
  return (
    <Box
      bgcolor={"hsl(30, 38%, 92%)"}
      boxSizing={'border-box'}
      height={'100vh'}
      minHeight={'760px'}
      minWidth={'300px'}

      width={'100vw'}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Card
        icon={'./images/icon-cart.svg'}
        actualPrice={'$149.99'} lastPrice={'$169.99'} type={'PERFUME'} description={desc} name={'Gabrielle Essence Eau De Parfum'} image={'./images/image-product-mobile.jpg'} />
    </Box>
  )
}

export default App
