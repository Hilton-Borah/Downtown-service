import { Box, Button, Input } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'

const ini={
    email:"",
    paswdd:""
}

const Login = () => {
    const [text,setText] = useState("")
    const [second,setSecond] = useState("")

    const handleClick=()=>{
        axios.get(`https://verify-email.herokuapp.com/generate/otp/${text}`)
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const handleChange=(e)=>{
        setText(e.target.value)
    }

    const handleClickTwo=()=>{
        console.log(second)
        axios.get(`https://verify-email.herokuapp.com/validate/otp/${text}/${second}`)
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const handleChangeTwo=(e)=>{
        setSecond(e.target.value)
    }



  return (
    <Box>
      <Input type="email" placeholder='Enter signup' onChange={handleChange}/>
      <Button onClick={handleClick}>Signup</Button>
    <Input placeholder='Enter Otp'onChange={handleChangeTwo}/>
    <Button onClick={handleClickTwo}>verify</Button>
    </Box>
  )
}

export default Login
