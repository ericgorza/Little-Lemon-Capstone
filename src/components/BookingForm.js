import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { submitAPI } from '../dateAPI';

function BookingForm({availableTimes, updateTimes}) {
  const [formDate, setFormDate] = useState()
  const [formTime, setFormTime] = useState()
  const [formGuests, setFormGuests] = useState(1)
  const [formOccasion, setFormOccasion] = useState()

  const [finalTime, setFinalTime] = useState(
    availableTimes.map((times) => <option>{times}</option>)
  )

  function handleDateChange(e) {
    setFormDate(e.target.value)
    var stringfy = e.target.value
    const date = new Date(stringfy)

    updateTimes(date);
    setFinalTime(availableTimes.map((times)=> <option>{times}</option>))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };


  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="date">
        Date:
      </label>
        <input
          type="date"
          id="date"
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


      <button type="submit" onClick={handleSubmit}><Link to="/confirmation">Submit Reservation</Link></button>
    </form>
  );
}

export default BookingForm;