import {
  Alert,
  AlertIcon,
  Box,
  AlertTitle,
  AlertDescription,
  CloseButton,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

function Success({setData}) {
  const {
    isOpen: isVisible,
    onClose,
    onOpen,
  } = useDisclosure({ defaultIsOpen: true });

  const onSet=()=>{
    onClose();
    setData(false);
  }

  return (
    isVisible && (
      <Alert
        status="success"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height="200px"
        width="180%"
        ml="-18%"
        mt="-40px"
        bg="#8aff9d"
        border="2px solid"
        borderRadius="10px"
        color="darkgreen"
      >
        <AlertIcon boxSize="40px" color="darkgreen" mr={0} />
        <AlertTitle mt={4} mb={1} fontSize="lg">
          Payment SuccessFull!
        </AlertTitle>
        <AlertDescription maxWidth="sm" color="black">
          Thanks you. Our team will get back to you
          soon.
        </AlertDescription>
        <CloseButton
          alignSelf="flex-end"
          position="relative"
          color="black"
          right={-1}
          top={-130}
          onClick={onSet}
        />
      </Alert>
    )
  );
}

export { Success };

{
  /* <CloseButton
        alignSelf="flex-start"
        position="relative"
        right={-1}
        top={-1}
        onClick={onClose}
      /> */
}

//   <Alert status="success">
//   <AlertIcon />
//   <Box>
//     <AlertTitle>Success!</AlertTitle>
//     <AlertDescription>
//       Your application has been received. We will review your application
//       and respond within the next 48 hours.
//     </AlertDescription>
//   </Box>
//   <CloseButton
//     alignSelf="flex-start"
//     position="relative"
//     right={-1}
//     top={-1}
//     onClick={onClose}
//   />
// </Alert>
