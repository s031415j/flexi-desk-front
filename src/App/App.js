import "./App.css";
import React from "react";
import NavBar from "../pages/NavBar/NavBar";
import BookingPage from "../pages/BookingPage/BookingPage";
import MyBookingPage from "../pages/MyBookingPage/MyBookingPage";
import HelpPage from "../pages/HelpPage/HelpPage";
import LoginPage from "../pages/LoginPage/LoginPage"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <div className="page">
          <Routes>
            <Route path="/booking/*" element={<BookingPage />} />
            <Route path="/myBookings" element={<MyBookingPage />} />
            <Route path="/help" element={<HelpPage />} />
            <Route path="/login" element={<LoginPage/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
