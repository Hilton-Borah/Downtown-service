import {
  Popover,
  PopoverTrigger,
  Button,
  Portal,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  InputGroup,
  InputLeftElement,
  Input,
  PopoverHeader,
  HStack,
  Box,
  InputLeftAddon,
} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { AiOutlinePhone } from "react-icons/ai"
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const SearchLoc = () => {
  const [location, setLocation] = useState("")
  const [text, setText] = useState("")

  const handleChange = (e) => {
    setText(e.target.value)
  }

  function getLocation() {
    navigator.geolocation.getCurrentPosition(success);
    function success(pos) {
      const crd = pos.coords;

      // console.log('Your current position is:');
      // console.log(`Latitude : ${crd.latitude}`);
      // console.log(`Longitude: ${crd.longitude}`);
      // console.log(`More or less ${crd.accuracy} meters.`);

      getCityName(crd.latitude, crd.longitude);
      // forecastWeather(crd.latitude, crd.longitude)
    }
  }


  const getCityName = async (lat, lon) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=e81000c73aede87affc03976d2a3a5a4`
    const res = await fetch(url)
    const resJson = await res.json()
    setLocation(resJson)
  }


  useEffect(() => {
    getLocation()
  }, [])


  let map = `https://maps.google.com/maps?q=${text ? text : location.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`

  return (
    <HStack display="flex" justifyContent={"center"} flexWrap="wrap" >
      <Popover>
        <PopoverTrigger w="200px">
          <div
          // style={{
          //   height: "50px",
          //   width: "120px",
          //   backgroundColor: "white",
          //   borderRadius: "5px",
          // }}
          >
            <Button
              color="black"
              bg="white"
              display="flex"
              gap="10px"
              w={"200px"}
            >
              <SlLocationPin />
              {
                location && location.name ? location.name : "Location"
              }
            </Button>
          </div>
        </PopoverTrigger>
        <Portal>
          <PopoverContent>
            <PopoverArrow />
            {/* <PopoverHeader display="flex" gap="10px">
              <SlLocationPin />
              Current location
            </PopoverHeader> */}
            <PopoverCloseButton />
            <PopoverBody>
              <InputGroup w={"100%"}>
                <InputLeftAddon children={<SlLocationPin color="black" />} />
                <Input bg={"white"} type='text' placeholder='City name' onChange={handleChange} />
              </InputGroup>
                <iframe className='firstIframe' src={map}></iframe>
            </PopoverBody>
          </PopoverContent>
        </Portal>
      </Popover>

      {/* <InputGroup w={"50%"} color={"black"} bg={"white"} borderRadius={"7px"}>
                <Input type='tel' placeholder='Search for Society/Apartment' />
              </InputGroup> */}
    </HStack>
  );
};


export default SearchLoc;
