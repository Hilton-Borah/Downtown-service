import React, { useState } from "react";
import { VStack, Box, HStack, Button, Heading, Text } from "@chakra-ui/react"
import { AspectRatio } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import styles from "./electricians.module.css"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPlumberData } from "../../Redux/action";
import ProductCard from "./ProductCard";
// import { store } from "../../Redux/store";

const Plumbers = () => {
// const [admin, setAdmin]=useState(false);
const dispatch = useDispatch();
const products = useSelector(store=>store.products);
const [cost, setCost] = useState(0)

useEffect(()=>{
    dispatch(getPlumberData)
},[])

const handleAddPrice=(p)=>{
  setCost((cost)=>cost+Number(p))
}
// console.log(admin)

    return <div>
        <VStack spacing="25px">
            <Box w="75%" h="200px" 
            // border="1px solid green"
            >
                {/* left top heading */}
                <HStack>
                    <Box textAlign="left" w="50%" h="200px" 
                    // border="1px solid grey"
                    >
                        <Button mt="20px" mb="10px" bg="white" color="black" border="1px solid grey">🛡UC safe</Button>
                        <Heading h="30px">Plumbers</Heading>
                        <Text color="grey" mt="20px">★ 4.71 (365K)</Text>
                        <Text color="grey" >🛒168 bookings this year in Kucha Mahajani</Text>
                    </Box>
                </HStack>

                <Box mt="20px" w="100%" h="5px" bg="lightgrey"></Box>

                <Box className={styles.quick}
                // display="flex" flexWrap="wrap" 
                mt="50px" mb="80px" spacing='24px'>
                    <Box w='100px' h='100px'>
                         <Box cursor="pointer" boxSize='100%'>
                            <Image borderRadius="5px" w='80px' h='80px' src='https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/supply/customer-app-supply/1640239360141-0cecd8.png' alt='basin' />
                        </Box>
                        Basin & sink
                    </Box>
                    <Box w='100px' h='100px'>
                    <Box cursor="pointer" boxSize='100%'>
                            <Image borderRadius="5px" w='80px' h='80px' src='https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/supply/customer-app-supply/1642051769505-a39d1f.png' alt='grouting' />
                        </Box>
                        Grouting
                    </Box>
                    <Box w='100px' h='100px'>
                    <Box cursor="pointer" boxSize='100%'>
                            <Image borderRadius="5px" w='80px' h='80px' src='https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/supply/customer-app-supply/1640239370241-517c01.png' alt='drain' />
                        </Box>
                        Drainage pipes
                    </Box>
                    <Box w='100px' h='100px' >
                    <Box cursor="pointer" boxSize='100%'>
                            <Image borderRadius="5px" w='80px' h='80px' src='https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/supply/customer-app-supply/1640239370632-3ccc71.png' alt='fan' />
                        </Box>
                        Bath fitting
                    </Box>
                    <Box w='100px' h='100px'>
                    <Box cursor="pointer" boxSize='100%'>
                            <Image borderRadius="5px" w='80px' h='80px' src='https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/supply/customer-app-supply/1640239381172-222fa5.png' alt='light' />
                        </Box>
                        Toilet
                    </Box>
                    <Box w='100px' h='100px'>
                    <Box cursor="pointer" boxSize='100%'>
                            <Image borderRadius="5px" w='80px' h='80px' src='https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/supply/customer-app-supply/1640239375350-827188.png' alt='MCB & fuse' />
                        </Box>
                        Tap & mixer
                    </Box> 
                    <Box w='100px' h='100px'>
                         <Box cursor="pointer"boxSize='100%'>
                            <Image borderRadius="5px" w='80px' h='80px' src='https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/supply/customer-app-supply/1640239365299-ef8593.png' alt='Inverter & stablizer' />
                        </Box>
                        Water tank
                    </Box>
                   <Box w='100px' h='100px'>
                    <Box cursor="pointer" boxSize='100%'>
                            <Image borderRadius="5px" w='80px' h='80px' src='https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/supply/customer-app-supply/1640239381822-7280b9.png' alt='Appliances' />
                        </Box>
                       Motor
                    </Box>
                     <Box w='100px' h='100px'>
                    <Box cursor="pointer" boxSize='100%'>
                            <Image borderRadius="5px" w='80px' h='80px' src='https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/luminosity/1629115076265-784603.png' alt='Wiring' />
                        </Box>
                        Water pipe connection
                    </Box>
                    
                    <Box w='100px' h='100px'>
                    <Box cursor="pointer" boxSize='100%'>
                            <Image borderRadius="5px" w='80px' h='80px' src='https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/supply/customer-app-supply/1642089389101-b9e130.png' alt='Door bell' />
                        </Box>
                        Water filter
                    </Box>
                    <Box w='100px' h='100px'>
                    <Box cursor="pointer" boxSize='100%'>
                            <Image borderRadius="5px" w='80px' h='80px' src='https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/supply/customer-app-supply/1639719393302-4148b0.png' alt='Looking for something' />
                        </Box>
                        Looking for something
                    </Box> 
                    {/* <Box w='100px' h='100px'>
                    <Box cursor="pointer" boxSize='100%'>
                            <Image borderRadius="5px" w='80px' h='80px' src='https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/supply/customer-app-supply/1647519310586-04dcc7.jpeg' alt='EV charger' />
                        </Box>
                        EV charger
                    </Box>  */}

                </Box>

                <Box mb="10px" mt="20px" w="100%" h="1px" bg="lightgrey"></Box>

                <HStack 
                // border="1px solid red"
                justifyContent="space-between"
                >
                    {/* left side */}
                    <Box w="55%" h="400px">
                            <Heading pt="30px" pb="30px" size="lg" textAlign="left">Quick booking</Heading>
                            <Box className={styles.scroll}
                            // border="1px solid green"
                             textAlign="left">
                               {products.map((item)=>{
                                return <ProductCard {...item} handleAddPrice={handleAddPrice} cost={cost} setCost={setCost}/>
                               })}
                            </Box>
<Box>
    <Button mt="5px" ml="610px" color="white" bgColor="red.500">Next ↓</Button>
</Box>
                    </Box>
                    {/* right side */}
                    <Box w="35%" h="auto"
                    //  border="1px solid blue" 
                     >
                        <VStack className={styles.rightContainer} 
                        >
                            <Box className={styles.offerRightSection}>
                                <Text className={styles.offerHeading} >Save 15% on every order</Text>
                                <Text className={styles.offerText}>Get Plus now</Text>
                            </Box>
                            <Box className={styles.offerRightSection}>
                                <Text className={styles.offerHeading} >Get Min Order Fee off</Text>
                                <Text className={styles.offerText}>On orders above ₹199</Text>
                            </Box>
                            <Box className={styles.offerRightSection}>
                                <Text className={styles.offerHeading} >Mobikwik | ZIP (Pay Later)</Text>
                                <Text className={styles.offerText}>Get 5% assured cashback</Text>
                            </Box>
                            <Box className={styles.offerRightSection}>
                                <Text className={styles.offerHeading} >5% Simple cashback up to ₹750</Text>
                                <Text className={styles.offerText}>Get up to Rs.750 cashback</Text>
                            </Box>
                            <Box className={styles.offerRightSection}>
                                <Text className={styles.offerHeading} >Upto 200 cashback</Text>
                                <Text className={styles.offerText}>on Amazon Pay</Text>
                            </Box>
                        </VStack>
                    </Box>
                </HStack>
                {/* cost */}
                <Box mb="10px" mt="120px" w="28%" 
                  h="100px" ml="68.5%" 
                  // bg="grey"
                  >
                  <Box bg="gray.100">
                    <Text p="5px" color="green">Add ₹62 more to save on Min Order Fee</Text>
                  </Box>
                      <Box display="flex" p="20px" justifyContent="space-between">
                            <Heading fontSize="24px">₹{cost}</Heading>
                            <Button w="150px" h="50px" mt="-10px" color="white" bg="purple.500">View Cart</Button>
                      </Box>
                </Box>
            </Box>
        </VStack>
    </div>
}
export default Plumbers;