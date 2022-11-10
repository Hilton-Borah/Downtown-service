import { Box, Button, Container, Heading, HStack } from '@chakra-ui/react'
import React from 'react'
import styles from "./plumber.module.css"
const Plumber = () => {


  return (
    <Container maxW='80%' className={styles.outerBox}>Plumber
      <HStack className={styles.topSection}>

        {/* left box */}
        <Box className={styles.EachTopSection}>
          <Box>
            
            <Button  bg="white" id={styles.ucSafe}>UC Safe</Button>
          </Box>
          <Heading id={styles.heading1}>Plumbers</Heading>
        </Box>

        {/* right image */}
        <Box className={styles.EachTopSection}> div 2</Box>
      </HStack>
    </Container>
  )
}

export default Plumber