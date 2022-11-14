import React, { useState } from "react";
import { VStack, Box, HStack, Button, Heading, Text, Spinner } from "@chakra-ui/react"
import { AspectRatio } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import styles from "./Electrician.module.css"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deletedata, getElectricianData } from "../Redux/action.js";
import ProductCard from "../Small/ProductCard";
import { Link, useNavigate } from "react-router-dom";
import { getLocalData, saveLocalData } from "../Utils/LocalStorage";
import { FaLeaf } from "react-icons/fa";
// import { store } from "../../Redux/store";

const Electricians = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const products = useSelector(store => store.products);
    const isLoading = useSelector(store => store.isLoading);
    const isLaoding1 = useSelector(store => store.isLaoding1);
    const [cost, setCost] = useState(0)
    const [count, setCount] = useState(0)
    let [dataStore, setdataStore] = useState([])

    useEffect(() => {
        dispatch(getElectricianData)
    }, [])

    const handleAddPrice = (item) => {
        setCount(count + 1)
        if (dataStore === []) {
            setdataStore([item])
        } else {
            setdataStore([...dataStore, item])
        }

        saveLocalData("allProducts", dataStore)
    }

    let checkStorage = getLocalData("allProducts")
    let emailId = getLocalData("emailId")


    const handleDelete = (id) => {
        dispatch(deletedata(id))
        // dispatch(getElectricianData)
        window.location.reload()
    }

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
                        <Heading h="30px">Electricians</Heading>
                        <Text color="grey" mt="20px">★ 4.76 (347K)</Text>
                        <Text color="grey" >🛒144 bookings this year in Kucha Mahajani</Text>
                    </Box>
                </HStack>
                <Box mt="20px" w="100%" h="5px" bg="lightgrey"></Box>

                <Box className={styles.quick}
                    // display="flex" flexWrap="wrap" 
                    mt="50px" mb="80px" spacing='24px'>
                    <Box w='100px' h='100px'>
                        <Box cursor="pointer" boxSize='100%'>
                            <Image borderRadius="5px" w='80px' h='80px' src='https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/luminosity/1645807122813-2f3e65.jpeg' alt='1' />
                        </Box>
                        Quick booking
                    </Box>
                    <Box w='100px' h='100px'>
                        <Box cursor="pointer" boxSize='100%'>
                            <Image borderRadius="5px" w='80px' h='80px' src='https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/luminosity/1635493186511-de1c28.png' alt='2' />
                        </Box>
                        Diwali Lights
                    </Box>
                    <Box w='100px' h='100px'>
                        <Box cursor="pointer" boxSize='100%'>
                            <Image borderRadius="5px" w='80px' h='80px' src='https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/supply/customer-app-supply/1639719676156-240dd2.png' alt='3' />
                        </Box>
                        Switch and socket
                    </Box>
                    <Box w='100px' h='100px' >
                        <Box cursor="pointer" boxSize='100%'>
                            <Image borderRadius="5px" w='80px' h='80px' src='https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/supply/customer-app-supply/1639719395804-a998b1.png' alt='fan' />
                        </Box>
                        Fan
                    </Box>
                    <Box w='100px' h='100px'>
                        <Box cursor="pointer" boxSize='100%'>
                            <Image borderRadius="5px" w='80px' h='80px' src='https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/supply/customer-app-supply/1639719407259-633488.png' alt='light' />
                        </Box>
                        Light
                    </Box>
                    <Box w='100px' h='100px'>
                        <Box cursor="pointer" boxSize='100%'>
                            <Image borderRadius="5px" w='80px' h='80px' src='https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/supply/customer-app-supply/1639719402389-9ed486.png' alt='MCB & fuse' />
                        </Box>
                        MCB & fuse
                    </Box>
                    <Box w='100px' h='100px'>
                        <Box cursor="pointer" boxSize='100%'>
                            <Image borderRadius="5px" w='80px' h='80px' src='https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/supply/customer-app-supply/1639719395465-4f0855.png' alt='Inverter & stablizer' />
                        </Box>
                        Inverter & stablizer
                    </Box>
                    <Box w='100px' h='100px'>
                        <Box cursor="pointer" boxSize='100%'>
                            <Image borderRadius="5px" w='80px' h='80px' src='https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/supply/customer-app-supply/1639719396997-85e940.png' alt='Appliances' />
                        </Box>
                        Appliance
                    </Box>
                    <Box w='100px' h='100px'>
                        <Box cursor="pointer" boxSize='100%'>
                            <Image borderRadius="5px" w='80px' h='80px' src='https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/supply/customer-app-supply/1639719388389-c252d9.png' alt='Wiring' />
                        </Box>
                        Wiring
                    </Box>

                    <Box w='100px' h='100px'>
                        <Box cursor="pointer" boxSize='100%'>
                            <Image borderRadius="5px" w='80px' h='80px' src='https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/supply/customer-app-supply/1639719397464-5e3c72.png' alt='Door bell' />
                        </Box>
                        Door bell
                    </Box>
                    <Box w='100px' h='100px'>
                        <Box cursor="pointer" boxSize='100%'>
                            <Image borderRadius="5px" w='80px' h='80px' src='https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/supply/customer-app-supply/1639719393302-4148b0.png' alt='Looking for something' />
                        </Box>
                        Looking for something
                    </Box>
                    <Box w='100px' h='100px'>
                        <Box cursor="pointer" boxSize='100%'>
                            <Image borderRadius="5px" w='80px' h='80px' src='https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/supply/customer-app-supply/1647519310586-04dcc7.jpeg' alt='EV charger' />
                        </Box>
                        EV charger
                    </Box>

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
                            {isLoading ? <Box display={"flex"} justifyContent="center" alignItems={"center"} marginTop={"50px"}><Spinner
                                thickness='4px'
                                speed='0.65s'
                                emptyColor='gray.200'
                                color='blue.500'
                                size='xl'
                            /></Box> : null}
                            {products && products.map((item) => {
                                return <div
                                    // <ProductCard {...item}/>
                                    style={{ display: "flex" }}>
                                    <Box p="5px" w="100%" h="200px"
                                        // border="1px solid grey"
                                        mb="10px"
                                        key={item.id}
                                    // borderLeft="none" borderRight="none"
                                    >
                                        <Heading size="md">{item.name}</Heading>
                                        <Text>★{item.star} ({item.total_rating})</Text>
                                        <Text><b>₹{item.original_price} .</b> {item.duration}</Text>
                                        <Box mb="10px" mt="20px" w="100%" h="1px" bg="lightgrey"></Box>

                                        <li>{item.details1}</li>
                                        <li>{item.details2}</li>
                                    </Box>
                                    <VStack>
                                        <Box>
                                            <Image h="100px" w="120px" src={item.image} />
                                            {emailId === "hiltonborah123@gmail.com" ?
                                                <Box display="flex" mt="10px" gap="5px">
                                                    <Link to={`/adminpage/editService`}><Button fontSize="14px" h="30px" w="30px" color="white" bg="blue.500" >Edit</Button></Link>
                                                    <Button onClick={() => handleDelete(item.id)} fontSize="14px" h="30px" w="30px" color="white" bg="blue.500" >Delete</Button></Box> : <Box display="flex" mt="10px">
                                                    <Button ml="25px" fontSize="14px" h="30px" w="30px" color="white" bg="green.500" onClick={() => handleAddPrice(item)}>Add</Button>
                                                </Box>}

                                        </Box>

                                    </VStack>
                                </div>
                            })}
                        </Box>
                        <Box>
                            <Button mt="5px" ml="530px" color="white" bgColor="red.500">Next ↓</Button>
                        </Box>
                    </Box>
                    {/* right side */}
                    <Box w="35%" h="auto"
                    //  border="1px solid blue" 
                    >
                        <VStack className={styles.rightContainer}
                        >
                            <Box className={styles.offerRightSection}>
                                {/* <Image w="10px" h="10px" src="https://s3.amazonaws.com/freestock-prod/450/freestock_565266637.jpg"></Image> */}
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
                    <Box display="flex" p="10px" mt={"20px"} justifyContent="space-between">
                        <Text fontSize="16px">{count} item added to your cart</Text>
                        <Link to={"/cartpage"} ><Button disabled={count === 0} w="100px" h="40px" mt="-10px" color="white" bg="purple.500">View Cart</Button></Link>
                    </Box>
                </Box>
            </Box>
        </VStack>
        {/* <Box>Next</Box> */}
    </div>
}
export default Electricians;