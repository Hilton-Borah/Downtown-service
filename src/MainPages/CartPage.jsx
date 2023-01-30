import { Box, Button, Flex, Heading, Image, Text, useToast } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaCity } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import BasicUsage1 from '../Small/AddressModal'
import BasicUsage from '../Small/SlotModal'
import { getLocalData, saveLocalData } from '../Utils/LocalStorage'
import styles from "./CartPage.module.css"

const CartSummary = () => {
    const toast = useToast()
    const [alldata,setAlldata] = useState("")
    const [total, setTotal] = useState(false)
    const [dummy, setDummy] = useState(false)
    const [dummy1, setDummy1] = useState(false)
    const [count, setCount] = useState(0)
    const [datalength, setLength] = useState(0)
    let storeData = getLocalData("allProducts")
    // console.log(storeData)

    useEffect(()=>{
        axios.get("https://tame-gold-cricket-yoke.cyclic.app/cart")
        .then((res)=>{
            setAlldata(res.data)
            setLength(res.data.length)
        }).catch((err)=>{
            console.log(err)
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
                    setLength(res.data.length)
                }).catch((err) => {
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


    return (
        <div>
            {/* summary div */}
            <Box className={styles.summaryBox} >
                {/* <Button bgColor="white" fontSize="32px" size="md" mt="15px" textAlign="left" ml="1%"></Button> */}
                <Heading size="md" mt="23px" textAlign="left" fontWeight="600"> ← Summary </Heading>
                <Heading size="md" mt="23px" textAlign="left" fontWeight="600">  Total services:- {datalength} </Heading>

            </Box>
            {/* left side & right side*/}
            <Box className={styles.leftandRightBox}>
                {/* left */}
                <Box className={styles.eachSideBox} w="55%">
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
                        datalength==0 ? <Heading size="md" mt="50px" mb="30px" textAlign="center" fontWeight="600"> Your cart empty </Heading> : null
                    }
                    <Image ml="10px" p="1%" h="340px" w="100%" src="https://user-images.githubusercontent.com/101567851/201468415-6ed5f903-e9f2-4424-96e9-0aa920c47555.png" />
                </Box>
                {/* right */}
                <Box className={styles.eachSideBox} w="40%">
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
                        <Image ml="10px" w="90%" h="80px" src="https://user-images.githubusercontent.com/101567851/201476636-de8d2140-4d48-436e-8e03-3e150cd8bdef.png" />
                        <Box mb="10px" mt="20px" w="100%" h="10px" bg="gray.100"></Box>

                        <Flex gap={"10px"} border={"1px solid lightgray"} mt={"20px"} mb={"20px"}>
                            {/* <Flex> */}
                            {addressLocal !== {} ? <Box w={"50%"} p={"5px"} h={"100px"} border={"1px solid lightgray"}>
                                <Box><b>Name:-</b> {addressLocal.name}</Box>
                                <Box><b>Address:-</b> {addressLocal.House}, {addressLocal.LandMark}, {CityName}</Box>
                            </Box> : null}
                            {date.length !== 0 && slot.length !== 0 ? <Box w={"50%"} p={"10px"} h={"100px"} border={"1px solid lightgray"}>
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
        </div>
    )
}

export default CartSummary