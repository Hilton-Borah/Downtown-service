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

const SearchLoc = () => {
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
            >
              <SlLocationPin />
              Location
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
                <InputLeftAddon children={<SlLocationPin color="black"/>} />
                <Input  bg={"white"} type='text' placeholder='City name' />
              </InputGroup>

            </PopoverBody>
          </PopoverContent>
        </Portal>
      </Popover>

      <InputGroup w={"50%"} color={"black"} bg={"white"} borderRadius={"7px"}>
                {/* <InputLeftAddon children={<Box><BsSearch color="black" /></Box>} /> */}
                <Input type='tel' placeholder='Search for Society/Apartment' />
              </InputGroup>
    </HStack>
  );
};


export default SearchLoc;
