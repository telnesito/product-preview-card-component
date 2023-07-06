import { Box, Button, Typography } from '@mui/material'
import React from 'react'
// font-family: 'Montserrat', sans-serif;
const Card = ({ icon, description, image, type, name, actualPrice, lastPrice }) => {
  return (
    <Box
      width={'90%'}
      bgcolor={'white'}

      borderRadius={'15px'}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      gap={'20px'}

      sx={{


        width: {
          xl: '40%',
          lg: '40%',
          md: '55%',
          sm: '50%',
          xs: '85%'
        },

        flexDirection: {
          xl: 'row',
          lg: 'row',
          md: 'row',
          sm: 'column',
          xs: 'column'
        },
        paddingBottom: {
          xl: '0',
          lg: '0',
          md: '0',
          sm: '20px',
          xs: '20px'
        },

        height: {
          xl: '420px',
          lg: '420px',
          md: '420px',
          sm: '90%',
          xs: '90%'
        },

      }}
    >
      <Box
        sx={{

          display: {
            xl: 'none',
            lg: 'none',
            md: 'none',
            sm: 'block',
            xs: 'block'
          },
          width: {
            xl: '50%',
            lg: '50%',
            md: '50%',
            sm: '100%',
            xs: '100%'
          },
          height: {
            xl: '100%',
            lg: '100%',
            md: '100%',
            sm: '50%',
            xs: '50%'
          },
        }}
      >
        <img
          width={'100%'}
          height={'100%'}
          style={{
            borderTopLeftRadius: '12px',
            borderTopRightRadius: '12px'

          }}
          src={'./images/image-product-mobile.jpg'} />
      </Box>

      <Box
        sx={{
          display: {
            xl: 'block',
            lg: 'block',
            md: 'block',
            sm: 'none',
            xs: 'none'
          },
          width: {
            xl: '50%',
            lg: '50%',
            md: '50%',
            sm: '100%',
            xs: '100%'
          },
          height: {
            xl: '100%',
            lg: '100%',
            md: '100%',
            sm: '100%',
            xs: '500%'
          },
        }}
      >
        <img
          width={'100%'}
          height={'100%'}
          style={{
            borderTopLeftRadius: '12px',
            borderTopRightRadius: '12px'

          }}

          src={'./images/image-product-desktop.jpg'} />
      </Box>


      <Box
        sx={{
          width: {
            xl: '50%',
            lg: '50%',
            md: '50%',
            sm: '90%',
            xs: '90%'
          },

        }}

        display={'flex'}
        gap={'20px'}
        flexDirection={'column'}
      >
        <Typography
          fontFamily={'Montserrat'}
          letterSpacing={'4px'}
          fontWeight={'500'}
          color={'hsl(228, 12%, 48%)'}

          variant='body2'
          textAlign={'left'}
        >{type}</Typography>

        <Typography
          width={'90%'}

          fontFamily={'Fraunces'}
          sx={{
            lineHeight: '1'
          }}
          fontSize={'30px'}
          fontWeight={'700'}
        >{name}</Typography>

        <Typography
          color={'hsl(228, 12%, 48%)'}
          fontSize={'14px'}
          fontWeight={'500'}
          width={'90%'}
          fontFamily={'Montserrat'}
        >

          {description}
        </Typography>
        <Box
          display={'flex'}
          gap={'20px'}
          alignItems={'center'}
        >
          <Typography
            variant='h4'
            fontFamily={'Fraunces'}

            color={'hsl(158, 36%, 37%)'}
          >
            {actualPrice}

          </Typography>

          <Typography
            component={'s'}
            variant='body2'
            fontFamily={'Montserrat'}


            color={'hsl(228, 12%, 48%)'}
          >
            {lastPrice}

          </Typography>
        </Box>
        <Button
          sx={{
            width: '90%',
            padding: '15px',
            fontFamily: 'Montserrat',
            fontWeight: '700',
            borderRadius: '12px',
            bgcolor: 'hsl(158, 36%, 37%)',
            textTransform: 'capitalize',
            "&:hover": {
              bgcolor: 'hsl(158, 36%, 22%)'
            }
          }}
          variant='contained'> <img style={{
            marginRight: '10px'
          }} src={icon} /> Add to Cart</Button>
      </Box>


    </Box>
  )
}

export default Card