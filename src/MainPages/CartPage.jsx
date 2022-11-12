import { Box, Button, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import styles from "./CartPage.module.css"
const CartSummary = () => {
  return (
    <div>
        {/* summary div */}
        <Box className={styles.summaryBox} >
            <Button bgColor="white" fontSize="32px" size="md" mt="15px" textAlign="left" ml="1%">←</Button>
            <Heading size="md" mt="23px" textAlign="left" fontWeight="600">  Summary</Heading>

        </Box>
        {/* left side & right side*/}
        <Box className={styles.leftandRightBox}>
            {/* left */}
            <Box className={styles.eachSideBox} w="55%">
                <Box className={styles.leftPriceBox}>
                    <Text mb="30px" fontSize="lg" ml="20px">Waste pipe leakage</Text>
                    <Box display="flex" justifyContent="space-between">
                        <Button mr="20px">- 1 +</Button>
                        <Text mt="5px" mr="20px">₹139</Text>
                    </Box>
                    
                </Box>
                <Image ml="10px" p="1%" h="380px" w="95%" src="https://user-images.githubusercontent.com/101567851/201468415-6ed5f903-e9f2-4424-96e9-0aa920c47555.png" />
            </Box>
            {/* right */}
            <Box className={styles.eachSideBox} w="40%">
                <Box>
                    <Heading size="md" fontWeight="600" textAlign="left" p="30px 20px 10px 20px">Payment summary</Heading>
                   <Box className={styles.priceDetails}>
                    <Text>Item total</Text>
                    <Text>₹139</Text>
                   </Box> 

                   <Box className={styles.priceDetails}>
                    <Text>Minimum Order Fee</Text>
                    <Text>₹60</Text>
                   </Box> 

                   <Box className={styles.priceDetails}>
                    <Text>Taxes and Fee</Text>
                    <Text>₹39</Text>
                   </Box> 

                    <Box   w="100%" h="2px" bg="lightgrey"></Box>
                   <Box className={styles.priceDetails}>
                    <Heading fontSize="16px" textAlign="left">Total</Heading>
                    <Heading fontSize="16px" textAlign="left">₹238</Heading>
                    </Box> 

                    <Box mb="10px" mt="20px" w="100%" h="10px" bg="gray.100"></Box>
                    <Image ml="10px" w="90%" h="80px" src="https://user-images.githubusercontent.com/101567851/201476636-de8d2140-4d48-436e-8e03-3e150cd8bdef.png"/>
                    <Box mb="10px" mt="20px" w="100%" h="10px" bg="gray.100"></Box>
                
                    <Box mt="300px">
                    <Button w="90%" h="50px" bgColor="purple.500" color="white" >Login/Sign up to proceed</Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    </div>
  )
}

export default CartSummary