import React from "react";
import { VStack, Box, HStack, Text, Heading } from "@chakra-ui/react"
import { AspectRatio } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import { getData } from "../Redux/action";
import styles from "./women.module.css"



const SaloonPrime = () => {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.products)

    useEffect(() => {
        dispatch(getData)
    }, [])
    console.log(products)
    return <div>
        <VStack spacing="25px">
            <Box w="75%" h="400px" >
                <HStack paddingBottom="17px" borderBottom="3px solid gray">
                    <Box w="50%" h="400px" paddingTop="120px"  >
                        {/* <Button bg="black" color="white">UC safe</Button>
                        <h1 h="30px">Saloon Prime</h1> */}
                        <img src="./video/primesaloon.png" alt=""></img>
                    </Box>
                    <Box w="50%" h="400px" >
                        <AspectRatio maxW='400px' ratio={1.5} textAlign="center" margin="auto" marginTop="70px">
                            <iframe
                                title='naruto'
                                src="./video/women.mp4"
                                allowFullScreen
                            />
                        </AspectRatio>
                    </Box>
                </HStack>
                <HStack spacing='24px' paddingTop="20px" >
                    <Box w='100px' h='100px'>
                        <Box boxSize='100%'>
                            <Image borderRadius="10%" textAlign="center" margin="auto" src='https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/luminosity/1666706468749-ac6e3f.jpeg' alt='Dan Abramov' />
                            Packges
                        </Box>

                    </Box>
                    <Box w='100px' h='100px' >
                        <Box boxSize='100%'>
                            <Image borderRadius="10%" textAlign="center" margin="auto" src='https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/supply/customer-app-supply/1635313403372-16db5c.png' alt='Dan Abramov' />
                            Make your own package
                        </Box>

                    </Box>
                    <Box w='100px' h='100px' >
                        <Box boxSize='100%'>
                            <Image borderRadius="10%" textAlign="center" margin="auto" src='https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/luminosity/1655977998579-8de14b.png' alt='Dan Abramov' />
                            waxing
                        </Box>

                    </Box>
                    <Box w='100px' h='100px' >
                        <Box boxSize='100%'>
                            <Image borderRadius="10%" textAlign="center" margin="auto" src='https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/supply/customer-app-supply/1655287480435-d29c6c.png' alt='Dan Abramov' />
                            facial & cleanup
                        </Box>

                    </Box>
                    <Box w='100px' h='100px' >
                        <Box boxSize='100%'>
                            <Image borderRadius="10%" textAlign="center" margin="auto" src='https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/supply/customer-app-supply/1655287465245-e4dca0.png' alt='Dan Abramov' />
                            Manicure
                        </Box>

                    </Box>
                    <Box w='100px' h='100px' >
                        <Box boxSize='100%'>
                            <Image borderRadius="10%" textAlign="center" margin="auto" src='https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/supply/customer-app-supply/1655287464682-7ab5c1.png' alt='Dan Abramov' />
                            Pedicure
                        </Box>

                    </Box>

                </HStack>
                <HStack spacing="25px" paddingTop="30px" >
                    <Box w="60%" h="600px" borderRight="1px solid gray">
                        <Heading pt="30px" pb="30px" size="lg" textAlign="left">BestSeller Packages</Heading>
                        <Box
                            className={styles.scrolls}
                            // border="1px solid green"
                            textAlign="left">
                            {products && products.map((item) => {
                                return <div>
                                    <Box p="5px" w="100%" h="200px"
                                    // border="1px solid grey"
                                    >
                                        <Heading size="md">{item.name}</Heading>
                                        <Text>★{item.star} ({item.total_rating})</Text>
                                        <Text><b>₹{item.original_price} .</b> {item.duration}</Text>
                                        <Box mb="10px" mt="20px" w="100%" h="1px" bg="lightgrey"></Box>

                                        <li>{item.details1}</li>
                                        <li>{item.details2}</li>
                                    </Box>

                                </div>
                            })}
                        </Box>

                    </Box>
                    <Box w="40%" h="400px" >
                        {/* <AspectRatio maxW='400px' ratio={1}>
                            <iframe
                                title='naruto'
                                src=""
                                allowFullScreen
                            />
                        </AspectRatio> */}
                        <img src="./video/downSide.png" alt=""></img>
                    </Box>
                </HStack>
            </Box>
        </VStack>
    </div>
}
export default SaloonPrime;