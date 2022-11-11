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
        display="flex"
        flexDirection="column"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton mt="10px"/>
          <DrawerHeader>Please login to continue</DrawerHeader>

          <DrawerBody>
            <InputGroup>
              <InputLeftAddon children="+91" />
              <Input type="number" placeholder="phone number" />
            </InputGroup>
            <Button colorScheme="blue" mt="25px">Continue</Button>
            <DrawerExample1/>
          </DrawerBody>

          {/* <DrawerFooter >
            <Button variant="outline" mr={9} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Continue</Button>
          </DrawerFooter> */}
        </DrawerContent>       
      </Drawer>
    </>
  );
}



function DrawerExample1() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button ref={btnRef} colorScheme="trasparent" onClick={onOpen} mt="-8px">
        Admin
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        display="flex"
        flexDirection="column"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton mt="10px"/>
          <DrawerHeader>Please login to continue</DrawerHeader>

          <DrawerBody>
            <InputGroup display="flex" flexDirection="column" gap="10px">
              <Input type="email" placeholder="Email" />
              <Input type="password" placeholder="Password" />
            </InputGroup>
            <Button colorScheme="blue" mt="25px">Continue</Button>
          </DrawerBody>

          {/* <DrawerFooter >
            <Button variant="outline" mr={9} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Continue</Button>
          </DrawerFooter> */}
        </DrawerContent>       
      </Drawer>
    </>
  );
}

export  {DrawerExample,DrawerExample1};
