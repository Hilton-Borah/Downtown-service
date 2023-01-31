import { Box, Button, Divider, Flex, Heading, Image, Menu, MenuButton, MenuItem, MenuList, Spinner, Text, useToast } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaCity } from 'react-icons/fa'
import { IoIosArrowDown } from 'react-icons/io'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import BasicUsage1 from '../Small/AddressModal'
import BasicUsage from '../Small/SlotModal'
import { getLocalData, saveLocalData } from '../Utils/LocalStorage'
import styles from "./CartPage.module.css"
import Footer from './Footer'

const CartSummary = () => {
    const navigate = useNavigate()
    const toast = useToast()
    const [alldata, setAlldata] = useState("")
    const [loading, setLoading] = useState(false)
    const [dummy, setDummy] = useState(false)
    const [dummy1, setDummy1] = useState(false)
    const [count, setCount] = useState(0)
    const [datalength, setLength] = useState(0);

    let storeData = getLocalData("allProducts")
    // console.log(storeData)

    useEffect(() => {
        // setLoading(true)
        axios.get("https://tame-gold-cricket-yoke.cyclic.app/cart")
            .then((res) => {
                setLoading(false)
                setAlldata(res.data)
                setLength(res.data.length)
            }).catch((err) => {
                console.log(err)
                setLoading(false)
            })
    })

    const handleDelete = (id) => {
        console.log(id)
        axios.delete(`https://tame-gold-cricket-yoke.cyclic.app/cart/delete/${id}`)
            .then((res) => {
                setLength(res.data.length)
                toast({
                    title: `Deleted succesfully`,
                    status: "success",
                    isClosable: true,
                })
            }).catch((err) => {
                console.log(err)
            })

        axios.get("https://tame-gold-cricket-yoke.cyclic.app/cart")
            .then((res) => {
                setLoading(false)
                setLength(res.data.length)
            }).catch((err) => {
                setLoading(false)
                console.log(err)
            })
    }


    const FlexClick = () => {
        setCount(count + 1)
    }

    let addressLocal = getLocalData("addressFromcart") || {}
    let CityName = getLocalData("city") || ""
    let slot = getLocalData("slot") || []
    let date = getLocalData("date") || []

    const totalPrice = alldata && alldata.reduce(
        (prevValue, currentValue) => prevValue + Number(currentValue.original_price),
        0
    );

    useEffect(() => {
        saveLocalData("totalPrice", totalPrice)
    }, [handleDelete])


    const handleLogout = () => {
        localStorage.clear()
        navigate("/")
    }

    const username = getLocalData("name")

    return (
        <div>
            <Flex className='hNav'>
               <Link to={"/"}> <Image className='hLogo' src='https://user-images.githubusercontent.com/105915325/201094672-f7cd637a-98b8-4f0e-b0f4-78b4890e4976.png' /></Link>
                <Menu>
                    <MenuButton variant={"unstyled"} as={Button} rightIcon={<IoIosArrowDown />}>
                        My Profile
                    </MenuButton>
                    <MenuList>
                        <MenuItem>{username}</MenuItem>
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </MenuList>
                </Menu>
            </Flex>
            <Divider border={"1px solid lightgray"} width={"95%"} margin={"auto"} />
            {/* summary div */}
            <Box className={styles.summaryBox} >
                {/* <Button bgColor="white" fontSize="32px" size="md" mt="15px" textAlign="left" ml="1%"></Button> */}
                <Heading size="md" mt="23px" textAlign="left" fontWeight="600"> ← Summary </Heading>
                <Heading size="md" mt="23px" textAlign="left" fontWeight="600">  Total services:- {datalength} </Heading>
            </Box>
            {/* left side & right side*/}
            <Box className={styles.leftandRightBox}>
                {/* left */}
                <Box className={styles.eachSideBox} >
                    {loading ? <Box display={"flex"} justifyContent="center" alignItems={"center"} marginTop={"50px"}><Spinner
                        thickness='4px'
                        speed='0.65s'
                        emptyColor='gray.200'
                        color='blue.500'
                        size='xl'
                    /></Box> : null}
                    {/* {storeData.length===0 ? <Box><Text fontSize={"2xl"} mt={"20px"}>Your cart is empty</Text><Text fontSize={"1xl"} mt={"10px"}>Please add something</Text></Box> : null} */}
                    {/* <Box className={styles.leftPriceBox}>
                        <Box>
                            <Flex justifyContent={"space-between"}>
                                <Text mb="30px" fontSize="lg" ml="20px">Ceiling fan regulator replacement</Text>
                            </Flex>
                            <Box textAlign={"left"} ml={"20px"} mt={"-20px"} mb={"20px"}>
                                <li>Replacement of one ceiling fan regulator</li>
                                <li>Price does not include repair or spare part charges</li>
                                <li>Installation of 1 heavy switchboard (15+ amp)</li>
                            </Box>
                        </Box>
                        <Box>
                            <Image src={"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_96,dpr_1,fl_progressive:steep,q_auto,c_limit/images/supply/customer-app-supply/1639995505867-8b32bd.png"} w={"70%"} margin={"auto"} />
                            <Box>
                                <Text mr="20px" margin={"auto"} mt="10px">Rs. 329</Text>
                                <Button variant={"unstyled"}>Remove</Button>
                            </Box>
                        </Box>
                    </Box> */}
                    {
                        alldata && alldata.map((el) => {
                            // setTotal(total+el.original_price)
                            return (
                                <Box className={styles.leftPriceBox}>
                                    <Box>
                                        <Flex justifyContent={"space-between"}>
                                            <Text mb="30px" fontSize="lg" ml="20px">{el.name}</Text>
                                        </Flex>
                                        <Box textAlign={"left"} ml={"20px"} mt={"-20px"} mb={"20px"}>
                                            <li>{el.details1}</li>
                                            <li>{el.details2}</li>
                                            <li>{el.details3}</li>
                                        </Box>
                                    </Box>
                                    <Box>
                                        <Image src={el.image} w={"70%"} margin={"auto"} />
                                        <Box>
                                            <Text mr="20px" margin={"auto"} mt="10px">Rs. {el.original_price}</Text>
                                            <Button variant={"unstyled"} onClick={() => handleDelete(el._id)}>Remove</Button>
                                        </Box>
                                    </Box>
                                </Box>
                            )
                        })
                    }

                    {
                        datalength == 0 ? <Heading size="md" mt="50px" mb="30px" textAlign="center" fontWeight="600"> Your cart empty </Heading> : null
                    }
                    {/* <Image className={styles.Image} ml="10px" p="1%" h="340px" w="100%" src="https://user-images.githubusercontent.com/101567851/201468415-6ed5f903-e9f2-4424-96e9-0aa920c47555.png" /> */}
                </Box>
                {/* right */}
                <Box className={styles.eachSideBox}>
                    <Box>
                        <Heading size="md" fontWeight="600" textAlign="left" p="30px 20px 10px 20px">Payment summary</Heading>
                        <Box className={styles.priceDetails}>
                            <Text>Item total</Text>
                            <Text>₹ {totalPrice ? totalPrice : 0}</Text>
                        </Box>

                        <Box className={styles.priceDetails}>
                            <Text>Minimum Order Fee</Text>
                            <Text>{`₹${60}`}</Text>
                        </Box>

                        <Box className={styles.priceDetails}>
                            <Text>Taxes and Fee</Text>
                            <Text>₹39</Text>
                        </Box>

                        <Box w="100%" h="2px" bg="lightgrey"></Box>
                        <Box className={styles.priceDetails}>
                            <Heading fontSize="16px" textAlign="left">Total</Heading>
                            <Heading fontSize="16px" textAlign="left">₹ {totalPrice + 60 + 39}</Heading>
                        </Box>

                        <Box mb="10px" mt="20px" w="100%" h="10px" bg="gray.100"></Box>
                        <Image className={styles.Image} ml="10px" w="90%" h="80px" src="https://user-images.githubusercontent.com/101567851/201476636-de8d2140-4d48-436e-8e03-3e150cd8bdef.png" />
                        <Box mb="10px" mt="20px" w="100%" h="10px" bg="gray.100"></Box>

                        <Flex gap={"10px"} border={"1px solid lightgray"} mt={"20px"} mb={"20px"}>
                            {/* <Flex> */}
                            {addressLocal !== {} ? <Box w={"50%"} p={"5px"} border={"1px solid lightgray"}>
                                <Box><b>Name:-</b> {addressLocal.name}</Box>
                                <Box><b>Address:-</b> {addressLocal.House}, {addressLocal.LandMark}, {CityName}</Box>
                            </Box> : null}
                            {date.length !== 0 && slot.length !== 0 ? <Box w={"50%"} p={"10px"} border={"1px solid lightgray"}>
                                <b>Your Slot :-</b> {`${date[0]} at ${slot[0]} and ${date[1]} at ${slot[1]}`}
                            </Box> : null}
                        </Flex>

                        <Flex justifyContent={"space-around"}>
                            <Button onClick={FlexClick}><BasicUsage1 setDummy={setDummy} /></Button>
                            <Button onClick={FlexClick}><BasicUsage setDummy1={setDummy1} dummy1={dummy1} /></Button>
                        </Flex>
                        {!getLocalData("token") ? <Text color={"red"} mt={"20px"} mb={"-10px"}>You are not login, Please login first</Text> : null}
                        <Box mt="30px">
                            {!getLocalData("token") ? <Link to={"/"}><Button w="90%" h="50px" bgColor="purple.500" color="white">Login/Sign up to proceed</Button></Link> :
                                <Link to={"/paymentpage"}><Button w="90%" h="50px" bgColor="purple.500" color="white" >Go for payment</Button></Link>}
                        </Box>
                    </Box>
                </Box>
            </Box>  

{/* <Box mt={"200px"}>
<Footer/>
</Box> */}
     

            
        </div>
    )
}

export default CartSummary