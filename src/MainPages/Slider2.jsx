import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// import "../Styles/FirstSlider.css"
import { Link } from 'react-router-dom';

const Slider2 = () => {
  return (
    <Box>
        <Carousel infiniteLoop autoPlay>
           <Link to="/mens"> <Box className='Image'>
                <Image src='https://user-images.githubusercontent.com/103739534/215291555-c3f18172-a31e-4b49-aa7f-13f88b33f22d.png' />
            </Box> </Link>
            <Box className='Image'>
                <Image src='https://user-images.githubusercontent.com/103739534/215291586-e12b04dc-9571-4a8b-ad46-5ca242169b9d.png' />
            </Box>
            <Box className='Image'>
                <Image src='https://user-images.githubusercontent.com/103739534/215291533-7a4ba3cc-6361-461b-b469-29f1f03fb351.png' />
            </Box>
            <Box className='Image'>
                <Image src='https://user-images.githubusercontent.com/103739534/215291537-0daeb9b1-8c0a-457e-aa57-09b278b5c00e.png' />
            </Box>
            <Box className='Image'>
                <Image src='https://user-images.githubusercontent.com/103739534/215291540-9e63e2d4-18e1-4b34-9110-1b64e1e89288.png' />
            </Box>
            <Box className='Image'>
                <Image src='https://user-images.githubusercontent.com/103739534/215291545-e06efcbf-0b41-48cc-ac71-1d8a185c882e.png' />
            </Box>
        </Carousel>
    </Box>
  )
}

export default Slider2
