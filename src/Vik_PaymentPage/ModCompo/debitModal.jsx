import React from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Input,
    FormControl,
    FormLabel,
  } from '@chakra-ui/react';
  import { useDisclosure } from "@chakra-ui/react";
//   import "../payment.css"


function DebitModal({children}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  
    return (
      <>
        <div  onClick={onOpen}>{children}</div>
  
        <Modal 
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add new card</ModalHeader>
            <ModalCloseButton/>
            <ModalBody pb={6}>
              <FormControl>
                {/* <FormLabel>First name</FormLabel> */}
                <Input ref={initialRef} type="number" placeholder='card number' />
              </FormControl>
  
              <FormControl mt={4}>
                {/* <FormLabel>Last name</FormLabel> */}
                <Input w="100px" mr="10px" type="number" placeholder='MM/YY' />
                <Input w="100px" type="number" placeholder='CVV' />
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3}> 
                Save and Proceed
              </Button>
              {/* <Button onClick={onClose}>Cancel</Button> */}
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default DebitModal;