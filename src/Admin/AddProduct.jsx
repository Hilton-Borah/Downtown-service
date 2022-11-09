import React, { useState } from 'react'
import { Box, Button, Flex, FormControl, FormLabel, Input, Select,Form } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { postData } from '../Redux/action'
// import {AiFillHome} from "react-icons/ai"

const initialState={
    name:"",
    star:"",
    total_rating:"",
    discount_price:"",
    original_price:"",
    duration:"",
    details1:"",
    details2:"",
    details3:"",
    image:""
}

const AddProduct = () => {
    const dispatch = useDispatch()
    const [input,setInput] = useState(initialState);
    const [category,setCategory] = useState("")

    const {name,star,total_rating,discount_price,original_price,duration,details1,details2,details3,image} = input

    const handleChange=(e)=>{
        const {name,value} = e.target;
        setInput({...input,[name]:value})
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        dispatch(postData(input,category))
        // setInput(initialState)
        alert("Successfully added")
    }


    return (
        <Box>
            <Flex>
                {/* <AiFillHome/> */}
            <Select value={category} placeholder='Enter category' onChange={(e)=>setCategory(e.target.value)}>
                    <option value={"men"}>Salon for men</option>
                    <option value={"women"}>Salon for women</option>
                    <option value={"electrician"}>Electricians</option>
                    <option value={"plumber"}>Plumber</option>
                </Select>
            </Flex>
            <form onSubmit={handleSubmit}>
                <FormLabel>Name</FormLabel>
                <Input type='text' placeholder='Enter service name' onChange={handleChange} value={name} name={"name"} required/>
                <FormLabel>Star</FormLabel>
                <Input type='text' placeholder='Enter service star' onChange={handleChange} value={star} name={"star"}required/>
                <FormLabel>Total Rating</FormLabel>
                <Input type='text' placeholder='Enter service total rating' onChange={handleChange} value={total_rating} name={"total_rating"}required/>
                <FormLabel>Discount price</FormLabel>
                <Input type='number' placeholder='Enter service discount price' onChange={handleChange} value={discount_price} name={"discount_price"}required/>
                <FormLabel>Original price</FormLabel>
                <Input type='number' placeholder='Enter service original price' onChange={handleChange} value={original_price} name={"original_price"}required/>
                <FormLabel>Duration</FormLabel>
                <Input type='text' placeholder='Enter service duration' onChange={handleChange} value={duration} name={"duration"}required/>
                <FormLabel>Details</FormLabel>
                <Input type='text' placeholder='Enter service details 1' onChange={handleChange} value={details1} name={"details1"}/>
                <Input type='text' placeholder='Enter service details 2' onChange={handleChange} value={details2} name={"details2"}/>
                <Input type='text' placeholder='Enter service details 3' onChange={handleChange} value={details3} name={"details3"}/>
                <Input type='link' placeholder='Enter service image' onChange={handleChange} value={image} name={"image"}/>
                <input type="submit" value="Add service"/>
            </form>
        </Box>
    )
}

export default AddProduct
