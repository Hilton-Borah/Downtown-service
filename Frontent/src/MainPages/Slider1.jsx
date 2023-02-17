import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// import "../Styles/FirstSlider.css"
import { Link } from 'react-router-dom';

const Slider1 = () => {
  return (
    <Box>
        <Carousel infiniteLoop autoPlay>
           <Link to="/mens"> <Box className='Image'>
                <Image src='https://user-images.githubusercontent.com/103739534/215290476-0db24715-b8c0-4cfa-87ec-2c3cc3b34310.png' />
            </Box> </Link>
            <Box className='Image'>
                <Image src='https://user-images.githubusercontent.com/103739534/215290495-7a935f9f-f01e-4d57-ab93-924877722622.png' />
            </Box>
            <Box className='Image'>
                <Image src='https://user-images.githubusercontent.com/103739534/215290499-cbd4d5a7-9b0f-4450-a8b9-30d693137f41.png' />
            </Box>
            <Box className='Image'>
                <Image src='https://user-images.githubusercontent.com/103739534/215290505-a2758b03-9dc5-491d-a637-275b919e8e51.png' />
            </Box>
            <Box className='Image'>
                <Image src='https://user-images.githubusercontent.com/103739534/215290509-8b7f60b1-b230-4426-b847-262ea0835aec.png' />
            </Box>
            <Box className='Image'>
                <Image src='https://user-images.githubusercontent.com/103739534/215290524-04a63864-d7ee-4efc-bd9a-70ffa8c85b38.png' />
            </Box>
        </Carousel>
    </Box>
  )
}

export default Slider1
