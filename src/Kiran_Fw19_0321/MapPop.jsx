import React from "react"
import {
    HStack, Box, Stack,
} from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { useState } from "react"


const Mappop = () => {
    const [text, setText] = useState("")

    const handleChange = (e) => {
        setText(e.target.value)
    }
    let url = `https://maps.google.com/maps?q=${text}&t=&z=13&ie=UTF8&iwloc=&output=embed`
    return <div>
        <Stack direction={["row", "row", "column"]} paddingTop="100px">
            <Box w="38%" h="400px" margin="auto" text-align="center" border="1px solid" >
                <HStack>
                    <Box w={["50%,30%,15%"]} h="500px" borderRadius="20px 20px 0px 20px"
                    // paddingTop="150px"
                    >
                        {/* <img h="400px" src="./video/map.png" alt="" /> */}
                        <iframe width="100%" height="74%" src={url} />
                    </Box>
                    <Box w={["50%,30%,15%"]} h="500px">
                        <Stack spacing={3} paddingBottom="20px"  >
                            <h1>Address</h1>
                            <Input placeholder='Name' size='lg' />
                            <Input placeholder='House/Flat Number' size='lg' />
                            <Input placeholder='Landmark' size='lg' />
                            <Input placeholder="City" onChange={handleChange} />

                        </Stack>
                        <h1 >Save as</h1>
                        <Stack direction='row' spacing={1} align='center' margin="auto" paddingLeft="40px" paddingBottom="10px">
                            <Button colorScheme="teal" variant='ghost' >
                                Home
                            </Button>
                            <Button colorScheme='red' variant='ghost'>
                                Other
                            </Button>
                        </Stack>
                        <Button w="100%" colorScheme='blue' variant="solid">Save & Proceed</Button>
                    </Box>
                </HStack>
            </Box>
        </Stack>


    </div>
}
export default Mappop;