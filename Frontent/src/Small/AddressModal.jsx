import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Box,
    HStack, Stack,Input
} from '@chakra-ui/react'
import SelectSlot from './SelectSlot'
import Mappop from './Addressmap'
import React, { useState } from 'react'
import { saveLocalData } from '../Utils/LocalStorage'

const initialState = {
    name: "",
    House: "",
    LandMark: "",
  }
  

function BasicUsage1({setDummy}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    //     const { isOpen, onOpen, onClose } = useDisclosure()
    const [size, setSize] = React.useState('xl')
    const [text, setText] = useState("")
    const [formState, setFormState] = React.useState(initialState);


    const handleSizeClick = (newSize) => {
        setSize(newSize)
        onOpen()
    }
    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleChangetwo=(e)=>{
        const { name, value } = e.target;
        // const val = type === "number" ? Number(value) : value;
        setFormState({
          ...formState,
          [name]: value,
        });
    }

    const handleClick=()=>{
        console.log(formState)
        saveLocalData("city",text)
        saveLocalData("addressFromcart",formState)
        setDummy(true)
        onClose()
    }

    let url = `https://maps.google.com/maps?q=${text}&t=&z=13&ie=UTF8&iwloc=&output=embed`
    const sizes = ['xl']
    return (
        <Box>
            <Button onClick={onOpen}>Add a Address</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent className='hModelContent'>
                    <Stack>
                        <Box w="100%" h="400px" margin="auto" text-align="center">
                            <HStack>
                                <Box w={["50%,30%,15%"]} h="500px" border="0-moz-border-radius:15px">
                                    <iframe width="100%" height="74%" border-radius="50px" src={url} />
                                </Box>
                                <Box h="500px">
                                    <Stack spacing={3} paddingBottom="20px"  >
                                        <Input placeholder='Name' name='name' size='lg'  onChange={handleChangetwo}/>
                                        <Input placeholder='House/Flat Number' name='House' size='lg'  onChange={handleChangetwo}/>
                                        <Input placeholder='Landmark' name='LandMark' size='lg' onChange={handleChangetwo} />
                                        <Input placeholder="City" name='City' onChange={handleChange} />

                                    </Stack>
                                    <h1 >Save as</h1>
                                    <Stack direction='row' spacing={1} align='center' margin="auto" paddingBottom="10px">
                                        <Button colorScheme="teal" variant='ghost' >
                                            Home
                                        </Button>
                                        <Button colorScheme='red' variant='ghost'>
                                            Other
                                        </Button>
                                    </Stack>
                                    {/* <Button w="100%" colorScheme='blue' variant="solid">Save & Proceed</Button> */}
                                </Box>
                            </HStack>
                        </Box>
                    </Stack>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant='ghost' onClick={handleClick}>Continue</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    )
}

export default BasicUsage1