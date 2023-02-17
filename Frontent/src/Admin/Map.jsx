import { Box, Button, Input } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Map = () => {
    const [text,setText] = useState("")

    const handleChange=(e)=>{
        setText(e.target.value) 
    }

    let url = `https://maps.google.com/maps?q=${text}&t=&z=13&ie=UTF8&iwloc=&output=embed`

  return (
    <Box>
      <Input placeholder='city' onChange={handleChange}/>
      {/* <Button onClick={handleClick}>Search</Button> */}
      <iframe src={url}/>
    </Box>
  )
}

export default Map
