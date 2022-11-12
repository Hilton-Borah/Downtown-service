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
import "../Admin/DummyModal.css"


function BasicUsage() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <Box>
        <Button onClick={onOpen}>Open Modal</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent className='hModelContent'>
            <SelectSlot/>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='ghost'>Secondary Action</Button>
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