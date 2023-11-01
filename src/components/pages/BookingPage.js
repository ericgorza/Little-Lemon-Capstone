import React from "react";
import BookingForm from "../BookingForm";
import Spacer from "../Spacer-footer";
import { useState, useReducer } from 'react';

function availableTimesForDate(selectedDate) {
    // Simplesmente retornando uma lista de horários como exemplo
    const availableTimes = ['10:00 AM', '11:00 AM', '12:00 PM'];
    return availableTimes;
  }
  
  // Substitua esta variável pela data inicial desejada
  const initialDate = '2023-11-01';

const BookingPage = (props) => {

    function updateTimes(state, selectedDate) {
        // Implemente a lógica para obter os horários disponíveis com base na data selecionada
        const newAvailableTimes = availableTimesForDate(selectedDate); // Substitua isso pela lógica real

        return newAvailableTimes;
      }

      // Função para criar o estado inicial dos horários disponíveis
      function initializeTimes() {
        // Implemente a lógica para inicializar os horários disponíveis
        const initialTimes = availableTimesForDate(initialDate); // Substitua isso pela lógica real

        return initialTimes;
      }


    const [availableTimes, dispatch] = useReducer(updateTimes, null, initializeTimes);

    return (
        <>
            <Spacer/>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch}/>
        </>
    )
}

export default BookingPage;