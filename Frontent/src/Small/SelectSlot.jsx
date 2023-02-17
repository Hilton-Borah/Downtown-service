import { Box, Button, Divider, Flex, Grid, Text,useToast, Wrap, WrapItem } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { BsCreditCard2Front } from "react-icons/bs"
import "../Admin/SelectSlot.css"
import { saveLocalData } from '../Utils/LocalStorage'

const SelectSlot = ({setDummy1,dummy1}) => {
    const [one, setOne] = useState(true);
    const [two, setTwo] = useState(false);
    const [three, setThree] = useState(false);
    const [count,setCount] = useState(1)
    const [state,setState] = useState(false)
    const [slot,setSlot] = useState([]);
    const [date,setDate] = useState([]);


    const handleOne = (e) => {
        setDate([...date,e.target.value])
        setTwo(false)
        setOne(true)
        setThree(false)
        updateLocalStoragedate()
    }

    const handleTwo = (e) => {
        setDate([...date,e.target.value])
        setTwo(true)
        setOne(false)
        setThree(false)
        updateLocalStoragedate()
    }

    const handleThree = (e) => {
        setDate([...date,e.target.value])
        setTwo(false)
        setOne(false)
        setThree(true)
        updateLocalStoragedate()
    }

    // for date

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    let dayName = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]

    //  today= Number(mm)
    let today1 = Number(dd) + 1
    let today2 = Number(dd) + 2
    let today3 = Number(dd) + 3
    console.log(today1)

    // for toast

    const toast = useToast()
    const statuses = ['success']
    // const status="hai"
  
    let handleclickButton=(e)=>{
        setSlot([...slot,e.target.value])
        // updateLocalStorageSlot()

        setDummy1(!dummy1)
        setState(true)
        setCount(count+1)
        if (count===1){
            toast({
                title: `${count} slot is booked.`,
                description: "But you cann't book multiple slot in one day",
                status: 'success',
                duration: 9000,
                isClosable: true,
            })
        } else if (count===2){
            toast({
                title: `${count} slot is booked.`,
                description: "But you cann't book more than two slots. Wait for two days",
                status: 'success',
                duration: 9000,
                isClosable: true,
            })
        }

        

    }
    
    const updateLocalStorageSlot=()=>{
        saveLocalData("slot",slot)
    }

    const updateLocalStoragedate=()=>{
        saveLocalData("date",date)
    }

    useEffect(()=>{
        updateLocalStorageSlot()
    },[updateLocalStorageSlot])


    return (
        <Box className='hMainBody'>
            <Box className='hFirstText'>
                <Text>Select a date of service</Text>
                <Text>Your service will take approx. 12 hrs </Text>
            </Box>
            <Flex className='hFlexFirst'>
                <Button variant={"unstyled"} value={`${today1}${dayName[mm - 1]}`} onClick={handleOne}>{`${today1}${dayName[mm - 1]}`}</Button>
                <Button variant={"unstyled"} value={`${today2}${dayName[mm - 1]}`} onClick={handleTwo}>{`${today2}${dayName[mm - 1]}`}</Button>
                <Button variant={"unstyled"} value={`${today3}${dayName[mm - 1]}`} onClick={handleThree}>{`${today3}${dayName[mm - 1]}`}</Button>
            </Flex>
            <Divider w={"28%"} m={"auto"} border1={"0.5px solid lightgray"} />
            <Flex className="hSecondFlex"><Box mt={"-20px"} fontSize={"16px"}><BsCreditCard2Front /></Box> Free cancellation till 3 hrs before the booked slot, post that ₹200 chargeable.</Flex>
            <Text mb={"10px"}>Select start time of service</Text>
            <Box>
                {one ? 
                // {statuses.map((i) => (
                            <Grid className='hFirstGrid'>
                                <Button onClick={handleclickButton} variant={"unstyled"} value={"09.00 AM"} disabled>09.00 AM</Button>
                                <Button onClick={handleclickButton} variant={"unstyled"} value={"09.30 AM"} disabled>09.30 AM</Button>
                                <Button onClick={handleclickButton} variant={"unstyled"} value={"10.00 AM"} disabled>10.00 AM</Button>
                                <Button onClick={handleclickButton} variant={"unstyled"} value={""} disabled>10.30 AM</Button>
                                <Button onClick={handleclickButton} variant={"unstyled"} value={""} disabled>11.00 PM</Button>
                                <Button onClick={handleclickButton} variant={"unstyled"} value={""} disabled>12.00 PM</Button>
                                <Button onClick={handleclickButton} variant={"unstyled"} value={""} disabled>01.00 PM</Button>
                                <Button onClick={handleclickButton} variant={"unstyled"} value={""} disabled>01.30 PM</Button>
                                <Button onClick={handleclickButton} variant={"unstyled"} value={""} disabled>02.00 PM</Button>
                                <Button onClick={handleclickButton} variant={"unstyled"} value={""} disabled>02.30 PM</Button>
                                <Button onClick={handleclickButton} variant={"unstyled"} disabled>03.00 PM</Button>
                                <Button onClick={handleclickButton} disabled={count===3 ? true : state ? true : false} value={"04.00 PM"} variant={"unstyled"}>04.00 PM</Button>
                                <Button onClick={handleclickButton} variant={"unstyled"} value={"04.30 PM"} disabled>04.30 PM</Button>
                                <Button onClick={handleclickButton} disabled={count===3 || state} value={"05.00 PM"} variant={"unstyled"}>05.00 PM</Button>
                                <Button onClick={handleclickButton} disabled={count===3 || state} value={"05.30 PM"} variant={"unstyled"}>05.30 PM</Button>
                                <Button onClick={handleclickButton} variant={"unstyled"} disabled>06.00 PM</Button>
                                <Button onClick={handleclickButton} disabled={count===3 || state} value={"06.30 PM"} variant={"unstyled"}>06.30 PM</Button>
                                <Button onClick={handleclickButton} disabled={count===3 || state} value={"07.00 PM"} variant={"unstyled"}>07.00 PM</Button>
                                </Grid>
                        // ))}
                 : null}

                {two ? <Grid className='hFirstGrid'>
                    <Button onClick={handleclickButton} variant={"unstyled"} value={""} disabled>09.00 AM</Button>
                    <Button onClick={handleclickButton} variant={"unstyled"} value={"09.30 AM"} disabled={count===3 && state}>09.30 AM</Button>
                    <Button onClick={handleclickButton} variant={"unstyled"} value={"10.00 AM"} disabled={count===3 && state}>10.00 AM</Button>
                    <Button onClick={handleclickButton} variant={"unstyled"} value={""} disabled>10.30 AM</Button>
                    <Button onClick={handleclickButton} variant={"unstyled"} value={"11.00 PM"} disabled={count===3 && state}>11.00 PM</Button>
                    <Button onClick={handleclickButton} variant={"unstyled"} value={""} disabled>12.00 PM</Button>
                    <Button onClick={handleclickButton} variant={"unstyled"} value={"01.00 PM"} disabled={count===3 && state}>01.00 PM</Button>
                    <Button onClick={handleclickButton} variant={"unstyled"} value={""} disabled>01.30 PM</Button>
                    <Button onClick={handleclickButton} variant={"unstyled"} value={"02.00 PM"} disabled={count===3 && state}>02.00 PM</Button>
                    <Button onClick={handleclickButton} variant={"unstyled"} value={"02.30 PM"} disabled={count===3 && state}>02.30 PM</Button>
                    <Button onClick={handleclickButton} variant={"unstyled"} value={""} disabled>03.00 PM</Button>
                    <Button onClick={handleclickButton} variant={"unstyled"} value={"04.00 PM"} disabled={count===3 && state}>04.00 PM</Button>
                    <Button onClick={handleclickButton} variant={"unstyled"} value={"04.30 PM"} disabled={count===3 && state}>04.30 PM</Button>
                    <Button onClick={handleclickButton} variant={"unstyled"} value={""} disabled>05.00 PM</Button>
                    <Button onClick={handleclickButton} variant={"unstyled"} value={"05.30 PM"} disabled={count===3 && state}>05.30 PM</Button>
                    <Button onClick={handleclickButton} variant={"unstyled"} value={""} disabled>06.00 PM</Button>
                    <Button onClick={handleclickButton} variant={"unstyled"} value={"06.30 PM"} disabled={count===3 && state}>06.30 PM</Button>
                    <Button onClick={handleclickButton} variant={"unstyled"} value={"07.00 PM"} disabled={count===3 && state}>07.00 PM</Button>
                </Grid> : null}

                {three ? <Grid className='hFirstGrid'>
                    <Button onClick={handleclickButton} variant={"unstyled"} value={"09.00 AM"} disabled={count===3 && state}>09.00 AM</Button>
                    <Button onClick={handleclickButton} variant={"unstyled"} value={"09.30 AM"} disabled={count===3 && state}>09.30 AM</Button>
                    <Button onClick={handleclickButton} variant={"unstyled"} value={""} disabled>10.00 AM</Button>
                    <Button onClick={handleclickButton} variant={"unstyled"} value={"10.30 AM"} disabled={count===3 && state}>10.30 AM</Button>
                    <Button onClick={handleclickButton} variant={"unstyled"} value={"11.00 PM"} disabled={count===3 && state}>11.00 PM</Button>
                    <Button onClick={handleclickButton} variant={"unstyled"} value={""} disabled>12.00 PM</Button>
                    <Button onClick={handleclickButton} variant={"unstyled"} value={"01.00 PM"} disabled={count===3 && state}>01.00 PM</Button>
                    <Button onClick={handleclickButton} variant={"unstyled"} value={""} disabled>01.30 PM</Button>
                    <Button onClick={handleclickButton} variant={"unstyled"} value={""} disabled>02.00 PM</Button>
                    <Button onClick={handleclickButton} variant={"unstyled"} value={"02.30 PM"} disabled={count===3 && state}>02.30 PM</Button>
                    <Button onClick={handleclickButton} variant={"unstyled"} value={"03.00 PM"} disabled={count===3 && state}>03.00 PM</Button>
                    <Button onClick={handleclickButton} variant={"unstyled"} value={""} disabled>04.00 PM</Button>
                    <Button onClick={handleclickButton} variant={"unstyled"} value={"04.30 PM"} disabled={count===3 && state}>04.30 PM</Button>
                    <Button onClick={handleclickButton} variant={"unstyled"} value={""} disabled>05.00 PM</Button>
                    <Button onClick={handleclickButton} variant={"unstyled"} value={"05.30 PM"} disabled={count===3 && state}>05.30 PM</Button>
                    <Button onClick={handleclickButton} variant={"unstyled"} value={"06.00 PM"} disabled={count===3 && state}>06.00 PM</Button>
                    <Button onClick={handleclickButton} variant={"unstyled"} value={""} disabled>06.30 PM</Button>
                    <Button onClick={handleclickButton} variant={"unstyled"} value={""} disabled>07.00 PM</Button>
                </Grid> : null}
            </Box>
        </Box>
    )
}

export default SelectSlot
