// import React from "react"
// import {
//     HStack, Box, Stack, useDisclosure,
// } from '@chakra-ui/react'
// import { Input } from '@chakra-ui/react'
// import { Button} from '@chakra-ui/react'
// import { useState } from "react"
// import {
//     Modal,
//     ModalOverlay,
//     ModalContent,
//     ModalHeader,
//     ModalFooter,
//     ModalBody,
//     ModalCloseButton,
// } from '@chakra-ui/react'


// function Mappop() {
//     const { isOpen, onOpen, onClose } = useDisclosure()
//     const [size, setSize] = React.useState('xl')
//     const [text, setText] = useState("")

//     const handleSizeClick = (newSize) => {
//         setSize(newSize)
//         onOpen()
//     }
//     const handleChange = (e) => {
//         setText(e.target.value)
//     }
//     let url = `https://maps.google.com/maps?q=${text}&t=&z=13&ie=UTF8&iwloc=&output=embed`
//     const sizes = ['xl']

//     return (
//         <>
//             {sizes.map((size) => (
//                 <Button
//                     onClick={() => handleSizeClick(size)}
//                     key={size}
//                     m={4}
//                 >{`Open ${size} Modal`}</Button>
//             ))}

//             <Modal onClose={onClose} size={size} isOpen={isOpen}>
//                 <ModalOverlay />
//                 <ModalContent>
//                     <ModalHeader>Address</ModalHeader>
//                     <ModalCloseButton />
//                     <ModalBody>
//                         <Stack>
//                             <Box w="100%" h="400px" margin="auto" text-align="center">
//                                 <HStack>
//                                     <Box w={["50%,30%,15%"]} h="500px" border="0-moz-border-radius:15px">
//                                         <iframe width="100%"  height="74%" border-radius="50px" src={url} />
//                                     </Box>
//                                     <Box h="500px">
//                                         <Stack spacing={3} paddingBottom="20px"  >
//                                             <Input placeholder='Name' size='lg' />
//                                             <Input placeholder='House/Flat Number' size='lg' />
//                                             <Input placeholder='Landmark' size='lg' />
//                                             <Input placeholder="City" onChange={handleChange} />

//                                         </Stack>
//                                         <h1 >Save as</h1>
//                                         <Stack direction='row' spacing={1} align='center' margin="auto" paddingBottom="10px">
//                                             <Button colorScheme="teal" variant='ghost' >
//                                                 Home
//                                             </Button>
//                                             <Button colorScheme='red' variant='ghost'>
//                                                 Other
//                                             </Button>
//                                         </Stack>
//                                         {/* <Button w="100%" colorScheme='blue' variant="solid">Save & Proceed</Button> */}
//                                     </Box>
//                                 </HStack>
//                             </Box>
//                         </Stack>
//                     </ModalBody>
//                     <ModalFooter>
//                         <Button colorScheme='blue' onClick={onClose}>Save & Proceed</Button>
//                     </ModalFooter>
//                 </ModalContent>
//             </Modal>
//         </>
//     )
// }

// export default Mappop;