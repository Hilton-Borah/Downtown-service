
import React, { useState } from "react";
import { VStack, Box, HStack, Button, Heading, Text, Spinner, useToast } from "@chakra-ui/react"
import { AspectRatio } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import styles from "./Electrician.module.css"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deletedata, getData, getDatam, getElectricianData } from "../Redux/productReducer/action";
import ProductCard from "../Small/ProductCard";
import { Link, useNavigate } from "react-router-dom";
import { getLocalData, saveLocalData } from "../Utils/LocalStorage";
import { FaLeaf } from "react-icons/fa";
import axios from "axios";
// import { store } from "../../Redux/store";

const SaloonPrime = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const products = useSelector(store => store.ProductReducer.products);
    const isLoading = useSelector(store => store.ProductReducer.isLoading);
    const isLaoding1 = useSelector(store => store.ProductReducer.isLaoding1);
    const [cost, setCost] = useState(0)
    const [count, setCount] = useState(0)
    let [dataStore, setdataStore] = useState([])
    const [kela, setKela] = useState(false)
    const toast = useToast()
    const [datalength, setLength] = useState(0)

    useEffect(() => {
        dispatch(getData)
        
        axios.get("https://tame-gold-cricket-yoke.cyclic.app/cart")
            .then((res) => {
                setLength(res.data.length)
                setCount(1)
            }).catch((err) => {
                console.log(err)
            })
    }, [])

    const handleAddPrice = (item) => {
        axios.post("https://tame-gold-cricket-yoke.cyclic.app/cart/add", item)
            .then((res) => {
                if (res.data==="Item already in your cart"){
                    toast({
                        title: `Item already in your cart`,
                        status: "error",
                        isClosable: true,
                      })
                }else {
                    toast({
                        title: `Service added to cart`,
                        status: "success",
                        isClosable: true,
                      })
                }
            }).catch((err) => {
                console.log(err)
            })

        axios.get("https://tame-gold-cricket-yoke.cyclic.app/cart")
            .then((res) => {
                setLength(res.data.length)
                setCount(1)
            }).catch((err) => {
                console.log(err)
            })
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
            <Box w="90%" h="200px"
            // border="1px solid green"
            >
                {/* left top heading */}
                <HStack>
                    {/* <HStack className={styles.top}  > */}
                        <Box textAlign="left" w="50%" h="200px"
                        // border="1px solid grey"
                        >
                            <Button mt="20px" mb="10px" bg="white" color="black" border="1px solid grey">🛡UC safe</Button>
                            <Heading h="30px">SaloonPrime</Heading>
                            <Text color="grey" mt="20px">★ 4.76 (347K)</Text>
                            <Text color="grey" >🛒144 bookings this year in Kucha Mahajani</Text>
                        </Box>
                    {/* </HStack> */}

                </HStack>
                <Box mt="20px" w="100%" h="5px" bg="lightgrey"></Box>

                <Box className={styles.quick}
                    // display="flex" flexWrap="wrap" 
                    mt="50px" mb="80px" spacing='24px'>

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


                </Box>

                <Box mb="10px" mt="20px" w="100%" h="1px" bg="lightgrey"></Box>
                <Box
                    className={styles.mainBox}

                >
                    {/* left side */}
                    <Box w={{ base: '100%', sm: '90%', md: '80%' }} h="400px">
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
                            <Box w={"100%"} display={"flex"} justifyContent="right" alignItems={"center"} >
                                <Button disabled={isLoading} color="white" bgColor="red.500">Next ↓</Button>
                            </Box>
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
                        <Box className={styles.lastBox}>
                            <Box bg="gray.100">
                                <Text p="5px" color="green">Add ₹62 more to save on Min Order Fee</Text>
                            </Box>
                            <Box display="flex" p="10px" mt={"20px"} justifyContent="space-between">
                                <Text fontSize="16px">{datalength} service is in your cart</Text>
                                <Link to={"/cartpage"} ><Button  w="100px" h="40px" mt="-10px" color="white" bg="purple.500">View Cart</Button></Link>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                {/* cost */}
            </Box>
        </VStack>
        {/* <Box>Next</Box> */}
    </div>
}
export default SaloonPrime;










{/* <Heading h="30px">Salon for Men</Heading>
<Text color="grey" mt="20px">★ 4.76 (974K)</Text>
<Text color="grey" >🛒112 bookings this year. </Text> */}

