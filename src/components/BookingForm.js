import React, { useState } from 'react';

function BookingForm({availableTimes, dispatch}) {
  const [formDate, setFormDate] = useState()
  
  const [formTime, setFormTime] = useState()
  const [formGuests, setFormGuests] = useState(1)
  const [formOccasion, setFormOccasion] = useState()

  const [finalTime, setFinalTime] = useState(
    availableTimes.map((times) => <option>{times}</option>)
  )

  function handleDateChange(e) {
    setFormDate(e.target.value)
    const newDate = e.target.value
    dispatch(newDate);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };


  return (
    <form onSubmit={handleSubmit}>
      <label>
        Date:
      </label>
        <input
          type="date"
          name="date"
          value={formDate}
          onChange={handleDateChange}
        />

      <label>
        Time:
        </label>
        <select
          name="time"
          value={formTime}
          onChange={(e) => setFormTime(e.target.value)}
        >
          {finalTime}
        </select>


      <label>
        Number of Guests:
        </label>
        <input
          type="number"
          name="guests"
          value={formGuests}
          onChange={(e) => setFormGuests(e.target.value)}
        />


      <label>
        Occasion:
        </label>
        <select name="occasion" value={formOccasion} onChange={(e) => setFormOccasion(e.target.value)}>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>


      <button type="submit">Submit Reservation</button>
    </form>
  );
}

export default BookingForm;