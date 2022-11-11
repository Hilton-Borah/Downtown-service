import { Box, Button, Flex, Grid, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { BsCreditCard2Front } from "react-icons/bs"

const SelectSlot = () => {
    const [one,setOne] = useState(true);
    const [two,setTwo] = useState(false);
    const [three,setThree] = useState(false);


    const handleOne=()=>{
        setTwo(false)
        setOne(true)
        setThree(false)
    }

    const handleTwo=()=>{
        setTwo(true)
        setOne(false)
        setThree(false)
    }

    const handleThree=()=>{
        setTwo(false)
        setOne(false)
        setThree(true)
    }

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    let dayName = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]

    //  today= Number(mm)
    let today1 = Number(dd) +1
    let today2 = Number(dd) + 2
    let today3 = Number(dd) + 3
    console.log(today1)



    // let utc = today.getTime() + (today.getTimezoneOffset() * 60000);
    // let nd = new Date(utc + (3600000 * +5.5));
    // var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    // var time = nd.getHours()
    // if (time > 18) {
    //     today = today + 1
    //     // time=24-time
    // }
    // console.log(time)


    return (
        <Box className='hMainBody'>
            <Text>Select a date of service</Text>
            <Text>Your service will take approx. 4 hrs 15 mins</Text>
            <Flex>
                <Button onClick={handleOne}>{`${today1}${dayName[mm - 1]}`}</Button>
                <Button onClick={handleTwo}>{`${today2}${dayName[mm - 1]}`}</Button>
                <Button onClick={handleThree}>{`${today3}${dayName[mm - 1]}`}</Button>
            </Flex>
            <Flex><BsCreditCard2Front /> Free cancellation till 3 hrs before the booked slot, post that ₹200 chargeable.</Flex>
            <Text>Select start time of service</Text>
            <Box>
                {one ? <Grid>
                    <Button disabled>09.00 AM</Button>
                    <Button disabled>09.30 AM</Button>
                    <Button disabled>10.00 AM</Button>
                    <Button disabled>10.30 AM</Button>
                    <Button disabled>11.00 PM</Button>
                    <Button disabled>12.00 PM</Button>
                    <Button disabled>01.00 PM</Button>
                    <Button disabled>01.30 PM</Button>
                    <Button disabled>02.00 PM</Button>
                    <Button disabled>02.30 PM</Button>
                    <Button disabled>03.00 PM</Button>
                    <Button>04.00 PM</Button>
                    <Button disabled>04.30 PM</Button>
                    <Button>05.00 PM</Button>
                    <Button>05.30 PM</Button>
                    <Button disabled>06.00 PM</Button>
                    <Button>06.30 PM</Button>
                    <Button>07.00 PM</Button>
                </Grid> : null}

                {two ? <Grid>
                    <Button disabled>09.00 AM</Button>
                    <Button>09.30 AM</Button>
                    <Button>10.00 AM</Button>
                    <Button disabled>10.30 AM</Button>
                    <Button>11.00 PM</Button>
                    <Button disabled>12.00 PM</Button>
                    <Button>01.00 PM</Button>
                    <Button disabled>01.30 PM</Button>
                    <Button>02.00 PM</Button>
                    <Button>02.30 PM</Button>
                    <Button disabled>03.00 PM</Button>
                    <Button>04.00 PM</Button>
                    <Button>04.30 PM</Button>
                    <Button disabled>05.00 PM</Button>
                    <Button>05.30 PM</Button>
                    <Button disabled>06.00 PM</Button>
                    <Button>06.30 PM</Button>
                    <Button>07.00 PM</Button>
                </Grid> : null}

                {three ? <Grid>
                    <Button>09.00 AM</Button>
                    <Button>09.30 AM</Button>
                    <Button disabled>10.00 AM</Button>
                    <Button>10.30 AM</Button>
                    <Button>11.00 PM</Button>
                    <Button disabled>12.00 PM</Button>
                    <Button>01.00 PM</Button>
                    <Button disabled>01.30 PM</Button>
                    <Button disabled>02.00 PM</Button>
                    <Button>02.30 PM</Button>
                    <Button>03.00 PM</Button>
                    <Button disabled>04.00 PM</Button>
                    <Button>04.30 PM</Button>
                    <Button disabled>05.00 PM</Button>
                    <Button>05.30 PM</Button>
                    <Button>06.00 PM</Button>
                    <Button disabled>06.30 PM</Button>
                    <Button disabled>07.00 PM</Button>
                </Grid> : null}
            </Box>
        </Box>
    )
}

export default SelectSlot
