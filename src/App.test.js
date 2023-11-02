import { render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from './components/BookingForm';
import  availableTimesForDate  from './components/pages/BookingPage'


// Testar se o meu Date: essta sendo renderizado // - precisei de criar props para passar.

const availableTimes = ["10:00 PM", "12:00 PM"]

test('renders BookingForm date element', () => {
  render(<BookingForm availableTimes={availableTimes}/>)
  const dateElement = screen.getByLabelText("Date:");
  expect(dateElement).toBeInTheDocument();
})
