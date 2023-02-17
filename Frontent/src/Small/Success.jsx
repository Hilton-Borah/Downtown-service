import {
    Alert,
    AlertIcon,
    Box,
    AlertTitle,
    AlertDescription,
    CloseButton,
  } from "@chakra-ui/react";
  import { useDisclosure } from "@chakra-ui/react";
import { Link } from "react-router-dom";
  import "./Success.css"
  
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
        <Alert className="Alert"
          status="success"
          variant="subtle"
          flexDirection="column"
        >
          <AlertIcon boxSize="40px" color="darkgreen" mr={0} />
          <AlertTitle mt={4} mb={1} fontSize="lg">
            Payment SuccessFull!
          </AlertTitle>
          <AlertDescription maxWidth="sm" color="black">
            Thanks you. Our team will get back to you
            soon.
          </AlertDescription>
          <Link to={"/"}><div style={{
            width:"100%",
            marginTop:"20px",
            borderBottom:"1px solid blue"
          }}>
          Go to Homepage
        </div></Link>
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
  