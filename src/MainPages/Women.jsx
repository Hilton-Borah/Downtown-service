import React from "react";
import { VStack, Box, HStack, Text, Heading, Button, Spinner } from "@chakra-ui/react"
import { AspectRatio } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import { getData } from "../Redux/productReducer/action";
import styles from "./WomenPage.module.css"
// import styles from 'styled-components'




const SaloonPrime = () => {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.ProductReducer.products)
    const isLoading = useSelector(store => store.ProductReducer.isLoading);

    useEffect(() => {
        dispatch(getData)
    }, [])
    console.log(products)
    return <div>
        <VStack spacing="25px" >
            {/* <Flex maxW="1000px" w={["100vw"]} direction={["column", "column", "row", "row"]} justify="center" p="4"
                textAlign="center" margin="auto">
                <Flex mx="4" marginLeft="30px">
                    <Image src="./video/primesaloon.png" alt="" />
                </Flex>
                <Flex align="center" mx="4" textAlign="center" margin="auto">
                    <iframe
                        title='naruto'
                        src="./video/women.mp4"
                        allowFullScreen
                    />
                </Flex>
            </Flex>
            <Flex maxW="1000px" w={["100vw"]} direction={["column", "column", "column", "column"]} justify="center" p="4">
                <Box boxSize='100%'>
                    <Image borderRadius="10%" textAlign="center" margin="auto" src='https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/luminosity/1666706468749-ac6e3f.jpeg' alt='Dan Abramov' />
                    Packges
                </Box>

                <Box boxSize='100%'>
                    <Image borderRadius="10%" textAlign="center" margin="auto" src='https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/supply/customer-app-supply/1635313403372-16db5c.png' alt='Dan Abramov' />
                    Make your own package
                </Box>
                <Box boxSize='100%'>
                    <Image borderRadius="10%" textAlign="center" margin="auto" src='https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/luminosity/1655977998579-8de14b.png' alt='Dan Abramov' />
                    waxing
                </Box>

                <Box boxSize='100%'>
                    <Image borderRadius="10%" textAlign="center" margin="auto" src='https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/supply/customer-app-supply/1655287480435-d29c6c.png' alt='Dan Abramov' />
                    facial & cleanup
                </Box>
                <Box boxSize='100%'>
                    <Image borderRadius="10%" textAlign="center" margin="auto" src='https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/supply/customer-app-supply/1655287465245-e4dca0.png' alt='Dan Abramov' />
                    Manicure
                </Box>
                <Box boxSize='100%'>
                    <Image borderRadius="10%" textAlign="center" margin="auto" src='https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/supply/customer-app-supply/1655287464682-7ab5c1.png' alt='Dan Abramov' />
                    Pedicure
                </Box>
            </Flex> */}
            <Box className="fbox">
                <HStack className={styles.top}  >
                    <Box className="saloontitle"  >
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
                <HStack className={styles.quic} spacing='24px'>
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
                <HStack className={styles.best} spacing="25px">
                    <Box w="60%" h="600px" borderRight="1px solid gray" >
                        <Heading pt="30px" pb="30px" size="lg" textAlign="left">BestSeller Packages</Heading>
                        <Box w={["100%", "120%", "135%"]}
                            className={styles.scrolls}
                            // border="1px solid green"
                            textAlign="left">
                                                                {isLoading ? <Box display={"flex"} justifyContent="center" alignItems={"center"} marginTop={"50px"}><Spinner
                                    thickness='4px'
                                    speed='0.65s'
                                    emptyColor='gray.200'
                                    color='blue.500'
                                    size='xl'
                                  /></Box>:null}
                            {products && products.map((item) => {
                                return <div>
                                    <Box className="prod"
                                    // border="1px solid grey"
                                    >
                                        <Heading size="md">{item.name}</Heading>
                                        <Text>★{item.star} ({item.total_rating})</Text>
                                        <Box gap="15px" display="flex" p="5px" w="20%" h="30px" paddingLeft="500px" >
                                            <Button>Add</Button>
                                            <Button>Edit</Button>
                                        </Box>
                                        <Text><b>₹{item.original_price} .</b> {item.duration}</Text>
                                        <li>{item.details1}</li>
                                        <li>{item.details2}</li>
                                        <Box mb="10px" mt="20px" w="74%" h="1px" bg="lightgrey"></Box>
                                    </Box>

                                </div>
                            })}
                        </Box>

                    </Box>
                    <Box className={styles.downside} w="40%" h="400px"  >
                        <img src="./video/downSide.png" alt=""></img>
                    </Box>
                </HStack>
                <Box mb="10px" mt="120px" w="28%" 
                  h="100px" ml="68.5%" 
                  // bg="grey"
                  >
                  <Box bg="gray.100">
                    <Text p="5px" color="green">Add ₹62 more to save on Min Order Fee</Text>
                  </Box>
                      <Box display="flex" p="20px" justifyContent="space-between">
                            <Heading fontSize="24px"></Heading>
                            <Button w="150px" h="50px" mt="-10px" color="white" bg="purple.500">View Cart</Button>
                      </Box>
                </Box>
            </Box>
        </VStack>
    </div>
}
export default SaloonPrime;