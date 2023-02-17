import React, { useState } from 'react'
import { VStack, Box, HStack, Button, Heading, Text } from "@chakra-ui/react"
import { Image } from '@chakra-ui/react'

const ProductCard = (item,cost,handleAddPrice, setCost) => {
    const [admin, setAdmin]=useState(false);
    // const [cost, setCost] = useState(0)
    const [count, setCount] = useState(0)

    const money=localStorage.getItem("totalCost")
    const [total, setTotal] = useState(cost)
    
    // console.log(admin);
    console.log("cost:",cost);

    // const handleAddPrice=(p)=>{
    //     setCost(cost=>cost+Number(p))
    //     setCount(count+1)
    //     // setTotal(total+Number(p))
    //     // localStorage.setItem("totalCost",cost)
    //     // handleAddTotal(p)
    //   }
    // const handleAddTotal=(p)=>{
    //     // setCost(()=>cost+Number(p))
    //     // setCount(count+1)
    //     setTotal(total+Number(p))
    //   }
console.log("total:",money)
  return (
    <div style={{display:"flex"}}>
        
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
                                    <Box>
                                        <Image h="100px" w="100px" src={item.image}/>
                                        {admin ? 
                                        <Box display="flex" mt="10px" gap="5px">
                                            <Button fontSize="14px" h="30px" w="30px" color="white" bg="green.500" >Add</Button>
                                            <Button fontSize="14px" h="30px" w="30px" color="white" bg="blue.500" >Edit</Button>
                                            {/* <Button bgColor="red.500" h="30px" w="50px"> */}
                                                <Image cursor="pointer" h="30px" w="50px" 
                                                src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/lg/307/wastebasket_1f5d1-fe0f.png"/>
                                            {/* </Button>  */}
                                        </Box> :
                                        <Box display="flex" mt="10px" gap="5px">
                                        {count === 0 ? <Button ml="25px" fontSize="14px" h="30px" w="30px" color="white" bg="green.500"
                                         onClick={handleAddPrice(item.original_price)}
                                         >Add</Button>
                                        : <Button >{count}</Button>}
                                        
                                    </Box> }
                                       
                                    </Box>
                                    
                                    
                                </div>
  )
}

export default ProductCard