import React from "react";
import { Routes, Route } from "react-router-dom"
import About from "./pages/About";
import Confirmation from "./pages/Confirmation"
import HomePage from "./pages/HomePage"
import Login from "./pages/Login"
import Order from "./pages/Order"
import BookingPage from "./pages/BookingPage"

export default function Routing() {
    return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/reservations" element={<BookingPage />} />
        <Route path="/order" element={<Order />} />
        <Route path="/login" element={<Login />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    );
  }