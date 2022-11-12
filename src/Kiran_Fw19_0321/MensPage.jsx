import React, { useEffect } from "react";
import { VStack, Box, HStack, Button, Stack, Text, Heading } from "@chakra-ui/react"
import { AspectRatio } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import styles from "./mensPage.module.css"
import { getDatam } from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";


const MensSaloon = () => {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.products)

    useEffect(() => {
        dispatch(getDatam)
    }, [])
    console.log(products)
    return <div>
        <VStack spacing="25px" >
            <Box w="75%" h="500px"    >
                <HStack paddingBottom="17px" borderBottom="3px solid gray">
                    <Box
                        w="50%"
                        h="500px"

                        pt="170px"
                    >

                        {/* <Button
                            bg="white"
                            color="black"
                            height="auto"
                            w="150px"
                            fontSize="25px"
                            margin="auto"
                            padding="8px"
                            font-weight="500"
                            text-align="start"
                            border="1px solid gray"
                        ># UC Safe
                        </Button>
                        <h1 w="300px">Saloon for Men</h1>
                        <p >4.75(974k)</p> */}
                        <img src="./video/saloonmen.png" alt=""></img>
                    </Box>

                    <Box w="50%" h="500px" >
                        <AspectRatio maxW='full' ratio={1.5} alignContent="center" margin="auto" pt="130px" >
                            <iframe
                                title='naruto'
                                src="./video/men.mp4"
                                allowFullScreen
                            />
                        </AspectRatio>
                    </Box>
                </HStack>
                <HStack spacing='10px' marginTop="30px" marginBottom="30px" >
                    <Box w='100px' h='100px' >
                        <Box boxSize='100%'>
                            <Image borderRadius="10%" textAlign="center" margin="auto" src='https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/luminosity/1646814042922-25f8f1.jpeg' alt='Dan Abramov' />
                            Packges
                        </Box>

                    </Box>
                    <Box w='100px' h='100px' >
                        <Box boxSize='100%'>
                            <Image borderRadius="10%" textAlign="center" margin="auto" src='https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/home-screen/1631190374864-78f3e8.jpeg' alt='Dan Abramov' />
                            Haircut for Men & Kid's
                        </Box>

                    </Box>
                    <Box w='100px' h='100px' >
                        <Box boxSize='100%'>
                            <Image borderRadius="10%" textAlign="center" margin="auto" src='https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/home-screen/1631189933595-01692d.png' alt='Dan Abramov' />
                            Hair Color
                        </Box>

                    </Box>
                    <Box w='100px' h='100px' >
                        <Box boxSize='100%'>
                            <Image borderRadius="10%" textAlign="center" margin="auto" src='https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/home-screen/1631189957304-ea2a7b.png' alt='Dan Abramov' />
                            Shave/Beard Grooming
                        </Box>

                    </Box>
                    <Box w='100px' h='100px' >
                        <Box boxSize='100%'>
                            <Image borderRadius="10%" textAlign="center" margin="auto" src='https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/home-screen/1631189857376-d49e47.png' alt='Dan Abramov' />
                            Detan & Facials
                        </Box>

                    </Box>
                    <Box w='100px' h='100px'  >
                        <Box boxSize='100%'>
                            <Image borderRadius="10%" textAlign="center" margin="auto" src='https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/home-screen/1631189905841-237b37.png' alt='Dan Abramov' />
                            Massage Therapy
                        </Box>

                    </Box>

                </HStack>
                <HStack spacing="25px" borderTop="2px solid gray">
                    <Box w="60%" h="600px" borderRight="1px solid gray">
                        <Heading pt="30px" pb="30px" size="lg" textAlign="left">BestSeller Packages</Heading>
                        <Box
                            className={styles.scrols}
                            // border="1px solid green"
                            textAlign="left">
                            {products && products.map((item) => {
                                return <div>
                                    <Box p="5px" w="100%" h="200px"
                                    // border="1px solid grey"
                                    >
                                        <Heading size="md">{item.name}</Heading>
                                        <Text>★{item.star} ({item.total_rating})</Text>
                                        <Box gap="15px" display="flex" p="5px" w="20%" h="30px" paddingLeft="500px" >
                                            <Button>Add</Button>
                                            <Button>Edit</Button>
                                        </Box>
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
                        {/* <Stack h="400px"  direction='column' align='center'> */}
                        {/* <AspectRatio maxW='full' ratio={1.5} alignContent="center" margin="auto" pt="130px" > */}
                        {/* <iframe
                                // title='naruto'
                                src="./video/downSide.png"
                                allowFullScreen
                            /> */}
                        <img margin="auto" textAlign="center" src="./video/downSide.png" alt=""></img>
                        {/* </AspectRatio> */}

                        {/* <HStack>
                                <Image src="IoIosPricetag" alt="" />
                                <Text>Save 15% on every order</Text>
                                <br />
                                <Text>Get Plus Now</Text>
                            </HStack>
                            <Button colorScheme='gray' size='lg'>
                                Save 15% on every order
                            </Button>
                            <Button colorScheme='gray' size="lg">
                                Mobikwik | ZIP (Pay Later)
                            </Button>
                            <Button colorScheme='gray' size='lg'>
                                5% Simple cashback up to Rs.750
                            </Button>
                            <Button colorScheme='gray' size='lg'>
                                Upto 200 cashback
                            </Button> */}
                        {/* </Stack> */}
                    </Box>
                </HStack>
            </Box>
        </VStack>
    </div>
}
export default MensSaloon;