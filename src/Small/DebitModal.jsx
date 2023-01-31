import React from "react";
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
  Checkbox,
  PinInput,
  PinInputField,
  HStack,
  Flex,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { Success } from "./Success";
import { useState } from "react";

//   import "../payment.css"

function DebitModal({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = React.useState(false);

  const [cardNum, setCardNum] = React.useState("");
  const [expiry, setExpiry] = React.useState("");
  const [cvv, setCvv] = React.useState("");
  const [pin,setPin] = useState("")
  const [otp, setOtp] = React.useState("");

  let x;

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const getOtp = () => {
    if(cvv.length!==3 || cardNum.length!==16){
      alert("You filled invalid details")
    } else if (cvv != "" && expiry != "" && cardNum != "") {
      setTimeout(() => {
        x = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
        alert(`Your OTP is ${x}`);
        setOtp(x);
      }, 2000);
    } else {
      alert("Please fill all required details !");
    }
  };

  const handlePin=(e)=>{
    setPin(bag=>bag+e.target.value)
  }

  const payDone = () => {
    console.log(otp,pin)
    if (otp!="" && otp===Number(pin)) {
      setTimeout(() => {
        console.log(otp);
        onClose();
        // CompExample();
        setData(true);
      }, 2000);
    }
    else{
        alert("Please fill correct OTP !")
        setPin(otp)
    }
  };




  return (
    <>
      <div onClick={onOpen}>{children}</div>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add new card</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Card Details</FormLabel>
              <Input
                ref={initialRef}
                type="card"
                value={cardNum}
                placeholder="0000-0000-0000-0000"
                onChange={(e) => setCardNum(e.target.value)}
              />
            </FormControl>
            {/* <Flex w={"500px"}>
              <FormLabel>Expiry Date</FormLabel>
              <FormLabel>CVV</FormLabel>
            </Flex> */}
            <FormControl mt={4} display={"flex"}>
              <Input
                w="160px"
                mr="10px"
                type="Date"
                value={expiry}
                placeholder="MM/YY"
                onChange={(e) => setExpiry(e.target.value)}
              />
              <Input
                w="160px"
                type="number"
                value={cvv}
                placeholder="CVV"
                onChange={(e) => setCvv(e.target.value)}
              />
            </FormControl>
            <Checkbox colorScheme="green" mt="5px" defaultChecked>
              <p style={{ fontSize: "13px" }}>
                Save the card details securely for future use except CVV
              </p>
            </Checkbox>
            <Button colorScheme="blue" m="10px 0" onClick={getOtp}>
              Submit
            </Button>
            <HStack mt="10px">
              <PinInput type="number">
                <PinInputField value={pin} onChange={handlePin}/>
                <PinInputField  value={pin} onChange={handlePin}/>
                <PinInputField  value={pin} onChange={handlePin}/>
                <PinInputField  value={pin} onChange={handlePin}/>
              </PinInput>
            </HStack>
          </ModalBody>

          <ModalFooter m="-20px 53% 20px 0px">
            <Button colorScheme="blue" onClick={payDone}>
              Save and Proceed
            </Button>
            {/* <Button onClick={onClose}>Cancel</Button> */}
          </ModalFooter>
          {/* otp box */}
        </ModalContent>
      </Modal>
      <div style={{ position: "fixed" }}>
        {data && <Success setData={setData} />}
      </div>
    </>
  );
}

export { DebitModal };