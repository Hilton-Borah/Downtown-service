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
  } from '@chakra-ui/react'
import SelectSlot from './SelectSlot'



function BasicUsage( {setDummy1,dummy1}) {
  // const handleClick
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <Box>
        <Button onClick={onOpen}>Book a slot</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent className='hModelContent'>
            <SelectSlot setDummy1={setDummy1} dummy1={dummy1}/>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='ghost' onClick={onClose}>continue</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    )
  }

  export default BasicUsage

// import { Button, useToast, Wrap, WrapItem } from '@chakra-ui/react'

// function ToastStatusExample() {
//   const toast = useToast()
//   const statuses = ['success']
//   // const status="hai"

//   const handleclickButton=()=>{
//     toast({
//       title: `haiii toast`,
//       // status: status,
//       isClosable: true,
//     })
//   }

//   return (
//     <Box>
//       {statuses.map(( i) => (
//         // <WrapItem key={i}>
//           <Button
//             onClick={handleclickButton}
//           >
//             Show toast
//           </Button>
//         // </WrapItem>
//   ))}
//    </Box>
//   )
// }

// export default ToastStatusExample