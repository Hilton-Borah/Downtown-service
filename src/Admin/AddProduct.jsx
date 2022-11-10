import React, { useState } from 'react'
import { Box, Text, Flex, FormControl, FormLabel, Input, Select, Image, MenuButton, Menu, MenuList, MenuItem, Button, Divider } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { postData } from '../Redux/action'
import { IoIosArrowDown } from "react-icons/io"
// import {AiFillHome} from "react-icons/ai"
import "../Admin/AddProduct.css"

const initialState = {
    name: "",
    star: "",
    total_rating: "",
    discount_price: "",
    original_price: "",
    duration: "",
    details1: "",
    details2: "",
    details3: "",
    image: ""
}

const AddProduct = () => {
    const dispatch = useDispatch()
    const [input, setInput] = useState(initialState);
    const [category, setCategory] = useState("")

    const { name, star, total_rating, discount_price, original_price, duration, details1, details2, details3, image } = input

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(postData(input, category))
        // setInput(initialState)
        alert("Successfully added")
    }


    return (
        <Box>
            <Flex className='hNav'>
                <Image className='hLogo' src='https://user-images.githubusercontent.com/105915325/201094672-f7cd637a-98b8-4f0e-b0f4-78b4890e4976.png' />
                <Menu>
                    <MenuButton variant={"unstyled"} as={Button} rightIcon={<IoIosArrowDown />}>
                        My Profile
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Username</MenuItem>
                        <MenuItem>Logout</MenuItem>
                    </MenuList>
                </Menu>
            </Flex>
            <Divider border={"1px solid lightgray"} width={"95%"} margin={"auto"} />

            <Flex width={"80%"} margin={"auto"} justifyContent={"space-between"} alignItems={"center"}>
                <Text className='hTextAdmin'>Hai User you can control this site from here</Text>
                <Flex className='hFlexButtonHome'>
                    <Button variant={"unstyled"} >Go to edit page</Button>
                    <Button variant={"unstyled"} >Go to Homepage</Button>
                </Flex>
            </Flex>

            <Flex className='hFlexAdmin'>
                <form onSubmit={handleSubmit} className={"hForm"}>
                    <Flex width={"100%"} justifyContent={"space-between"} mb={"20px"}>
                        <Text className='hText2Admin'>Add a new service</Text>
                        <Select w={"250px"} variant={"unstyles"} className='hSelectAdmin' value={category} placeholder='Enter category' onChange={(e) => setCategory(e.target.value)} required>
                            <option value={"men"}>Salon for men</option>
                            <option value={"women"}>Salon for women</option>
                            <option value={"electrician"}>Electricians</option>
                            <option value={"plumber"}>Plumber</option>
                        </Select>
                    </Flex>

                    {/* <FormLabel className='hFormLabel'>Name</FormLabel> */}
                    <Input className='hInputAdmin' variant={"unstyled"} type='text' placeholder='Enter service name' onChange={handleChange} value={name} name={"name"} required />

                    <Flex className='hFlexAdmintwo'>
                        <Box>
                            {/* <FormLabel className='hFormLabel'>Star</FormLabel> */}
                            <Input w={"250px"} className='hInputAdmintwo' variant={"unstyled"} type='text' placeholder='Enter service star' onChange={handleChange} value={star} name={"star"} required />
                        </Box>
                        <Box>
                            {/* <FormLabel className='hFormLabel'>Total Rating</FormLabel> */}
                            <Input w={"250px"} className='hInputAdmintwo' variant={"unstyled"} type='text' placeholder='Enter service total rating' onChange={handleChange} value={total_rating} name={"total_rating"} required />
                        </Box>
                    </Flex>



                    <Flex className='hFlexAdmintwo'>
                        <Box>
                            {/* <FormLabel className='hFormLabel'>Discount price</FormLabel> */}
                            <Input w={"250px"} className='hInputAdmintwo' variant={"unstyled"} type='number' placeholder='Enter service discount price' onChange={handleChange} value={discount_price} name={"discount_price"} required />
                        </Box>
                        <Box>
                            {/* <FormLabel className='hFormLabel'>Original price</FormLabel> */}
                            <Input w={"250px"} className='hInputAdmintwo' variant={"unstyled"} type='number' placeholder='Enter service original price' onChange={handleChange} value={original_price} name={"original_price"} required />
                        </Box>
                    </Flex>

                    {/* <FormLabel className='hFormLabel'>Duration</FormLabel> */}
                    <Input className='hInputAdmin' variant={"unstyled"} type='text' placeholder='Enter service duration' onChange={handleChange} value={duration} name={"duration"} required />
                    {/* <FormLabel className='hFormLabel'>Details</FormLabel> */}
                    <Input className='hInputAdmin' variant={"unstyled"} type='text' placeholder='Enter service details 1' onChange={handleChange} value={details1} name={"details1"} />
                    <Input className='hInputAdmin' variant={"unstyled"} type='text' placeholder='Enter service details 2' onChange={handleChange} value={details2} name={"details2"} />
                    <Input className='hInputAdmin' variant={"unstyled"} type='text' placeholder='Enter service details 3' onChange={handleChange} value={details3} name={"details3"} />
                    {/* <FormLabel className='hFormLabel'>Image</FormLabel> */}
                    <Input className='hInputAdmin' variant={"unstyled"} type='link' placeholder='Enter service image' onChange={handleChange} value={image} name={"image"} /><br />
                    <input className='hButtonInput' type="submit" value="Add service" />
                </form>

                <Box className='hIframeAdmin'  >
                    <iframe src="https://user-images.githubusercontent.com/103739534/201062031-a9f9f8ee-0b9a-42ea-b40d-e794d0bc9964.gif" frameborder="0"></iframe>
                </Box>
            </Flex>
        </Box>
    )
}

export default AddProduct
