import React from "react";
import { VStack, Box, HStack, Button } from "@chakra-ui/react"
import { AspectRatio } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'


const MensSaloon = () => {
    return <div>
        <VStack spacing="25px">
            <Box w="75%" h="400px" border="1px solid">
                <HStack>
                    <Box w="50%" h="400px" border="1px solid red">
                        <Button bg="black" color="white">UC safe</Button>
                        <h1 h="30px">Saloon for Men</h1>
                    </Box>
                    <Box w="50%" h="400px" border="1px solid blue">
                        <AspectRatio maxW='400px' ratio={1}>
                            <iframe
                                title='naruto'
                                src="./video/men.mp4"
                                allowFullScreen
                            />
                        </AspectRatio>
                    </Box>
                </HStack>
                <HStack spacing='24px'>
                    <Box w='100px' h='100px' bg='yellow.200'>
                        <Box boxSize='100%'>
                            <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
                        </Box>
                        Packges
                    </Box>
                    <Box w='100px' h='100px' bg='tomato'>
                    <Box boxSize='100%'>
                            <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
                        </Box>
                        Haircut for Men & Kid's
                    </Box>
                    <Box w='100px' h='100px' bg='pink.100'>
                    <Box boxSize='100%'>
                            <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
                        </Box>
                        Hair Color
                    </Box>
                    <Box w='100px' h='100px' bg='yellow.200'>
                    <Box boxSize='100%'>
                            <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
                        </Box>
                        Shave/Beard Grooming
                    </Box>
                    <Box w='100px' h='100px' bg='tomato'>
                    <Box boxSize='100%'>
                            <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
                        </Box>
                        Detan & Facials
                    </Box>
                    <Box w='100px' h='100px' bg='pink.100'>
                    <Box boxSize='100%'>
                            <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
                        </Box>
                        Massage Therapy
                    </Box>

                </HStack>
                <HStack spacing="25px">
                    <Box w="70%" h="400px" border="1px solid red">

                    </Box>
                    <Box w="30%" h="400px" border="1px solid blue">
                        <AspectRatio maxW='400px' ratio={1}>
                            <iframe
                                title='naruto'
                                src=""
                                allowFullScreen
                            />
                        </AspectRatio>
                    </Box>
                </HStack>
            </Box>
        </VStack>
    </div>
}
export default MensSaloon;