import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { submitAPI } from '../dateAPI';
import "../styles/style.css"

function BookingForm({availableTimes, updateTimes}) {
  const [formDate, setFormDate] = useState()
  const [formTime, setFormTime] = useState()
  const [formGuests, setFormGuests] = useState(1)
  const [formOccasion, setFormOccasion] = useState()
  const [formName, setFormName] = useState("")

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
        Name:
      </label>
        <input
          type="name"
          id="name"
          name="name"
          required
          minLength={2}
          maxLength={30}
          value={formName}
          onChange={(e)=> setFormName(e.target.value)}
        />

      <label htmlFor="date">
        Date:
      </label>
        <input
          type="date"
          id="date"
          name="date"
          required
          value={formDate}
          onChange={handleDateChange}
        />

      <label>
        Time:
        </label>
        <select
          name="time"
          id="time"
          required
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
          required
          min={1}
          max={10}
          value={formGuests}
          onChange={(e) => setFormGuests(e.target.value)}
        />


      <label>
        Occasion:
        </label>
        <select name="occasion" value={formOccasion} onChange={(e) => setFormOccasion(e.target.value)} required>
          <option value="Birthday">None</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>

      <button type="submit" id="form-button"><Link to="/confirmation">Submit Form</Link></button>
    </form>
  );
}

export default BookingForm;

