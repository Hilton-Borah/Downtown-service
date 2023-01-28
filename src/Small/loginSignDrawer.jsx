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
  PinInput, PinInputField, HStack, Box, useToast, Spinner, Text, Flex, Divider
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import axios from "axios";
import { getLocalData, saveLocalData } from "../Utils/LocalStorage";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginAuth } from "../Redux/productReducer/action";
import { getRegistration, resendOtp, verifyOtp } from "../Redux/Authreducer/action";
import {CgNametag} from "react-icons/cg";
import {MdAlternateEmail} from "react-icons/md";
import {CgPassword} from "react-icons/cg";
import {MdDateRange} from "react-icons/md";
import {BiPhoneCall} from "react-icons/bi"


const initialState = {
  name: "",
  email: "",
}

function DrawerExample1() {
  const isAuth = useSelector((state) => state.isAuth)

  const navigate = useNavigate()
  const [formState, setFormState] = React.useState(initialState);
  // const [isLoading, setIsloading] = useState(false)
  const [isLoading1, setIsloading1] = useState(false)
  const [check, setCheck] = useState(false);
  const [response1check, setResponse1Check] = useState(1)
  const [data, setData] = useState(initialState);
  const [pin, setPin] = useState(false);
  const [verify, setVerify] = useState(false);
  const [submit, setSubmit] = useState(false)
  const statuses = ['success', 'error', 'warning', 'info']

  const dispatch = useDispatch()
  const toast = useToast()
  const { otpDetail, massage, isLoading, isError } = useSelector((state) => {
    return {
      otpDetail: state.AuthReducer.otpDetail,
      massage: state.AuthReducer.massage,
      isLoading: state.AuthReducer.isLoading,
      isError: state.AuthReducer.isError
    }
  });
  // second modal

  // const { isOpen1, onOpen1, onClose1 } = useDisclosure();
  // const initialRef1 = React.useRef(null)
  // const finalRef1 = React.useRef(null)

  const { name, email } = data

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data)
    dispatch(getRegistration(data))
      .then((res) => {
        console.log(res)
        if (res.payload.status === "PENDING") {
          saveLocalData("userID", res.payload.data.userID)
          toast({
            title: 'Otp sent successfully',
            description: "Please check your email",
            status: "success",
            duration: 9000,
            isClosable: true,
          })
          setPin(true)
        }
      }).catch((err) => {
        console.log(err)
      })
    setSubmit(!submit)
  }

  const [otp, setOtp] = useState("")
  let [bag, setBag] = useState(false)

  const handlePinChange = (e) => {
    // bag+=e.target.value
    setOtp(bag => bag + e.target.value)
  }

  const handleClick = () => {
    console.log(otp)
    dispatch(verifyOtp({
      userID: getLocalData("userID"),
      otp: otp
    }))
      .then((res) => {
        console.log(res)
        if (res.payload.status === "VERIFIED") {
          saveLocalData("name",name)
          saveLocalData("token",res.payload.token)
          toast({
            title: 'Acount verified successfully',
            status: "success",
            duration: 9000,
            isClosable: true,
          })
          setBag(true)
          setPin(false)
          navigate("/")
        }
      }).catch((err) => {
        console.log(err)
      })
    setOtp("")
  }


  const handleResendOtp = () => {
    console.log(data)
    dispatch(resendOtp({
      userID: getLocalData("userID"),
      email: email
    }))
      .then((res) => {
        console.log(res)
        saveLocalData("userID", res.payload.data.userID)
        if (res.payload.status === "PENDING") {
          toast({
            title: 'Otp sent successfully',
            description: "Please check you email",
            status: statuses[0],
            duration: 9000,
            isClosable: true,
          })
          setPin(true)
        }
      }).catch((err) => {
        console.log(err)
      })
  }


  const handleLogout=()=>{
    localStorage.clear();
    setVerify(true)
    setTimeout(() => {
      toast({
        title: 'Logout successfully',
        status: "success",
        duration: 9000,
        isClosable: true,
      })
    }, 2000);
    navigate("/")
  }




  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button ref={btnRef} colorScheme="trasparent" onClick={() => onOpen()} mt="-8px">
        {getLocalData("name") ? getLocalData("name") : "Login/Sign Up"}
      </Button>
      {/* {isAuth ? <b onClick={handleLogout} style={{ cursor: "pointer" }}>Logout</b> : null} */}
      {/* {emailId==="hiltonborah123@gmail.com"?<b onClick={handleAdmin} style={{ cursor: "pointer" }}>Admin dashboard</b> : null} */}
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
          <DrawerCloseButton mt="10px" onClick={()=>setData("")}/>
          <DrawerHeader>Fill the details</DrawerHeader>
          <DrawerHeader fontSize={"14px"} mt={"-20px"}>This is mandatory for providing you any service.</DrawerHeader>
          <Divider border={"1px solid lightgray"}/>
          {
            getLocalData("token")? <Text mt={"10px"} textAlign={"center"} color={"green"}>You are verified.</Text> : null
          }
          <DrawerBody>
            <InputGroup display="flex" flexDirection="column" gap="10px">
              <form onSubmit={handleSubmit}>
              
              <Text marginTop={"10px"} marginBottom={"5px"}>Username</Text>
              <InputGroup >
                  <InputLeftAddon children={<CgNametag/>} />
                <Input type="text" name="name" value={name} onChange={handleChange} placeholder={"Username"} required />
                </InputGroup>
                <Text className='errorText' color={"red"} textAlign={"center"} fontSize={"12px"}>{massage && massage.message === "Your name shouldnot be contain any number." ? massage.message : null}</Text>

              <Text marginTop={"10px"} marginBottom={"5px"}>Email</Text>
                <InputGroup >
                  <InputLeftAddon children={<MdAlternateEmail/>} />
                <Input type="email" name="email" value={email} placeholder={"Email"} onChange={handleChange} required />
                </InputGroup>
                <Text className='errorText' color={"red"} textAlign={"center"} fontSize={"12px"}>{massage && massage.message === "You have entered a invalid email." ? massage.message : null}</Text>

              {/* <Text marginTop={"10px"} marginBottom={"5px"}>Password</Text>
                <InputGroup >
                  <InputLeftAddon children={<CgPassword/>} />
                <Input type="password" name="password" value={password} placeholder={"Password"} onChange={handleChange} required />
                <Text className='errorText'>{massage && massage.message === "Password should be alphanumeric and contain one uppercase letter." ? massage.message : null}</Text>
                </InputGroup> */}
{/* 
              <Text marginTop={"10px"} marginBottom={"5px"}>Date of birth</Text>
                <InputGroup >
                  <InputLeftAddon children={<MdDateRange/>} />
                <Input type="Date" placeholder={"Date of birth"} required />
                </InputGroup> */}

              <Text marginTop={"10px"} marginBottom={"5px"}>Contact No. </Text>
                <InputGroup >
                  <InputLeftAddon children={<BiPhoneCall/>} />
                  <Input
                    name="mobile"
                    type="number"
                    placeholder="phone number"
                    required
                  />
                </InputGroup>
                {/* <Text fontSize={"13px"} marginTop={"5px"} marginBottom={'5px'}>Already have an account ? <Link to={"/login"}><b className='b' onClick={() => <Login />}>Login here</b></Link></Text> */}

                {
                  isLoading ? <Box width={"100%"} display={"flex"} justifyContent={"center"} alignItems={"center"} mt={"15px"}><Spinner /> </Box> : null
                }

                {
                  pin ? <Box color={"green"} textAlign={"center"} fontSize={"14px"}><Text>A one time password sent on your email id.</Text>
                    <Text>Verify for go further.</Text>
                  </Box> : null
                }



                <Box className='buttonBox' w={"100%"} display={"flex"} justifyContent="center" alignItems={"center"}>
                  <Button mt={"15px"} colorScheme="blue" w={"150px"}  type="submit" disabled={getLocalData("token")}>Submit</Button>
                  {/* <input type={"submit"} value={"Register"} /> */}
                </Box>

              </form>
              <DrawerBody width="320px">
              </DrawerBody>
            </InputGroup>
            {/* <Box>{isLoading ? <Box w={"100%"} ml={"43%"} mt={"20px"}><Spinner /></Box> : null}</Box> */}
            {/* <Button ml={"30%"} mt={"10px"} colorScheme="blue">
              Continue
            </Button> */}
            {
              pin ? <Box width={"300px"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                <Box>
                  <HStack marginTop={"7px"}>
                    <PinInput >
                      <PinInputField value={otp} onChange={handlePinChange} />
                      <PinInputField value={otp} onChange={handlePinChange} />
                      <PinInputField value={otp} onChange={handlePinChange} />
                      <PinInputField value={otp} onChange={handlePinChange} />
                    </PinInput>
                  </HStack>

                  {otpDetail && otpDetail.status === "FAILED" ? <Box className='errorText' marginBottom={"5px"} marginTop={"10px"}><Text>{otpDetail.message}</Text><Text width={"90px"} cursor={"pointer"} display={"flex"} margin={"auto"} justifyContent={"center"} alignItems={"center"} color={"green"} borderBottom={"1px solid green"} fontSize={"16px"} onClick={handleResendOtp}>Resend otp</Text></Box> : null}

                  <Input w={"80px"} cursor={"pointer"} display={"flex"} margin={"auto"} justifyContent={"center"} alignItems={"center"} marginTop={"10px"} bgColor={'#3182ce'} color={"white"} onClick={handleClick} value={"Verify"} />
                </Box>
              </Box> : null
            }
            {
              bag ? <Box textAlign={"center"} marginTop={"10px"} color={"green"}><Text marginBottom={"-10px"}>Account verified successfully.</Text></Box> : null
            }

            <Flex justifyContent={"center"}><Button position={"fixed"} top={"660px"} w={"90%"} colorScheme="blue" disabled={!getLocalData("name")} onClick={handleLogout} onClose={onClose}>Log Out</Button></Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export { DrawerExample1 };
