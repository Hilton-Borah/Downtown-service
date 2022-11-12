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

// function DrawerExample() {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const btnRef = React.useRef();

//   return (
//     <>
//       <Button ref={btnRef} colorScheme="trasparent" onClick={onOpen} mt="-8px">
//         Login/Sign Up
//       </Button>
//       <Drawer
//         isOpen={isOpen}
//         placement="right"
//         onClose={onClose}
//         finalFocusRef={btnRef}
//         display="flex"
//         flexDirection="column"
//       >
//         <DrawerOverlay />
//         <DrawerContent>
//           <DrawerCloseButton mt="10px" />
//           <DrawerHeader>Please login to continue</DrawerHeader>

//           <DrawerBody>
//             <InputGroup>
//               <InputLeftAddon children="+91" />
//               <Input type="number" placeholder="phone number" />
//             </InputGroup>
//             <Button colorScheme="blue" mt="25px">
//               Continue
//             </Button>
//             {/* <DrawerExample1/>/ */}
//           </DrawerBody>

//           {/* <DrawerFooter >
//             <Button variant="outline" mr={9} onClick={onClose}>
//               Cancel
//             </Button>
//             <Button colorScheme="blue">Continue</Button>
//           </DrawerFooter> */}
//         </DrawerContent>
//       </Drawer>
//     </>
//   );
// }

function DrawerExample1() {
  const [formState, setFormState] = React.useState({
    username: "",
    email: "",
    mobile: "",
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const val = type === "number" ? Number(value) : value;
    setFormState({
      ...formState,
      [name]: val,
    });
  };

  const submitData=()=>{
    console.log(formState)
  }

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
          <DrawerCloseButton mt="10px" />
          <DrawerHeader>Please login to continue</DrawerHeader>

          <DrawerBody>
            <InputGroup display="flex" flexDirection="column" gap="10px">
              <Input
                name="username"
                value={formState.username}
                type="text"
                placeholder="Username"
                onChange={handleChange}
              />
              <Input
                name="email"
                value={formState.email}
                type="email"
                placeholder="Email"
                onChange={handleChange}
              />
              <DrawerBody width="320px">
                <InputGroup ml="-22px">
                  <InputLeftAddon children="+91" />
                  <Input
                    name="mobile"
                    value={formState.mobile}
                    type="number"
                    placeholder="phone number"
                    onChange={handleChange}
                  />
                </InputGroup>
              </DrawerBody>
            </InputGroup>
            <Button colorScheme="blue" mt="25px" onClick={submitData}>
              Continue
            </Button>
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

export { DrawerExample1 };
