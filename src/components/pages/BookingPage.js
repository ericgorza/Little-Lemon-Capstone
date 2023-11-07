import React from "react";
import BookingForm from "../BookingForm";
import Spacer from "../Spacer-footer";
import { useState, useReducer,useEffect } from 'react';
import { fetchAPI } from "../../dateAPI"
import { submitAPI } from "../../dateAPI";


const BookingPage = () => {

    const updateTimes = (date) => {
        return (
            fetchAPI(date)
        )
    }

    const output = fetchAPI(new Date());

    const [availableTimes, dispatch] = useReducer(updateTimes,output)
    // const [availableTimes, setAvailableTimes] = useState([
    //     '10:00 AM',
    //     '12:00 PM',
    //     '2:00 PM',
    //     '4:00 PM',
    //     '6:00 PM',
    //     '10:00 PM',
    //     '11:00 PM',
    //   ]);


    return (
        <>
            <Spacer/>
            <BookingForm availableTimes={availableTimes} updateTimes={dispatch}/>
        </>
    )
}

export default BookingPage;