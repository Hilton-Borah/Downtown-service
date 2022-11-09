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
import {SlLocationPin} from "react-icons/sl"

const SearchLoc = () => {
  return (
    <HStack spacing="20px" margin="0px 450px">
      <Popover >
        <PopoverTrigger w="200px">
          <Button color="black" bg="white" w="200px">Trigger</Button>
        </PopoverTrigger>
        <Portal>
          <PopoverContent>
            <PopoverArrow />
            <PopoverHeader display="flex" gap="10px"><SlLocationPin/>Current location</PopoverHeader>
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

      <InputGroup color="black" w="400px" h="50px" bg="white" >
        <InputLeftElement
          pointerEvents="none"
          children={<BsSearch color="gray.300" />}
        />
        <Input w="400px" h="50px" type="text" placeholder="Search for Society/Apartment" />
      </InputGroup>
    </HStack>
  );
};

// const SearchBox=()=>{
//     return(

//     )
// }

export default SearchLoc;
