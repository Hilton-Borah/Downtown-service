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
} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";

const SearchLoc = () => {
  return (
    <HStack spacing="20px" marginLeft="300px" display="flex" flexWrap="wrap" >
      <Popover>
        <PopoverTrigger w="200px">
          <div
            style={{
              height: "50px",
              width: "120px",
              backgroundColor: "white",
              borderRadius: "5px",
            }}
          >
            <Button
              color="black"
              bg="white"
              display="flex"
              gap="10px"
              mt="5px"
            >
              <SlLocationPin />
              Location
            </Button>
          </div>
        </PopoverTrigger>
        <Portal>
          <PopoverContent>
            <PopoverArrow />
            <PopoverHeader display="flex" gap="10px">
              <SlLocationPin />
              Current location
            </PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<BsSearch color="gray.300" />}
                />
                <Input type="text" placeholder="Search for Society/Apartment" />
              </InputGroup>
            </PopoverBody>
          </PopoverContent>
        </Portal>
      </Popover>

      <InputGroup
        color="black"
        w="60%"
        h="50px"
        bg="white"
        borderRadius="5px"
      >
        <InputLeftElement
          pointerEvents="none"
          children={<BsSearch color="gray.300" />}
        />
        <Input
          w="100%"
          h="50px"
          type="text"
          placeholder="Search for Society/Apartment"
        />
      </InputGroup>
    </HStack>
  );
};

// const SearchBox=()=>{
//     return(

//     )
// }

export default SearchLoc;
