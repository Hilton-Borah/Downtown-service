import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  InputLeftAddon,
  InputGroup,
} from "@chakra-ui/react";
import React from "react";
import { useDisclosure } from "@chakra-ui/react";

function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button ref={btnRef} colorScheme="trasparent" onClick={onOpen} mt="-8px">
        Login/Sign Up
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton mt="10px"/>
          <DrawerHeader>Please login to continue</DrawerHeader>

          <DrawerBody>
            {/* <InputLeftAddon children='+234' />
              <Input placeholder='Your mobile number' /> */}
            <InputGroup>
              <InputLeftAddon children="+91" />
              <Input type="tel" placeholder="phone number" />
            </InputGroup>
          </DrawerBody>

          <DrawerFooter >
            <Button variant="outline" mr={9} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Continue</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DrawerExample;
