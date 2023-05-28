import React, { useState, useEffect } from "react";
import "./MyBookingPage.css";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import SingleBooking from "../../components/SingleBooking/SingleBooking";
import Booking from "../../services/Booking";

const MyBookingPage = (props) => {
  const [value, setValue] = useState(0);
  const [todayBooking, setTodayBooking] = useState([]);
  const [upcomingBookings, setUpcomingBookings] = useState([]);
  const userId = 610000000;

  useEffect(() => {
    if (value === 0) {
      getTodayBooking();
    } else {
      setTodayBooking([]);
    }
  }, [value]);

  useEffect(() => {
    if (value === 1) {
      getUpcomingBookings(userId);
    } else {
      setUpcomingBookings([]);
    }
  }, [value]);

  const getTodayBooking = () => {
    Booking.getUserBookingForToday().then((response) => {
      const todayBooking = response.data.map((booking) => ({
        bookingId: booking.id,
        deskId: booking.deskId,
        date: booking.date,
        time: booking.time,
        floorLevel: booking.deskId.floorLevel,
      }));
      setTodayBooking(todayBooking);
      console.log(todayBooking);
    });
  };

  const getUpcomingBookings = () => {
    Booking.getUserUpcomingBookings().then((response) => {
      const upcomingBookings = response.data.map((booking) => ({
        bookingId: booking.id,
        date: booking.date,
        floorLevel: booking.deskId.floorLevel,
        deskId: booking.deskId,
        time: booking.time,
      }));

      // Sort the upcomingBookings array by date
      upcomingBookings.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateA - dateB;
      });

      setUpcomingBookings(upcomingBookings);
      console.log(upcomingBookings);
    });
  };

  return (
    <>
      <section>
        <div className="context">
          <h1>My Booking</h1>
        </div>

        <Paper square>
          <Tabs
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <Tab label="Today" />
            <Tab label="Upcoming" />
          </Tabs>
          <div className="tab-body">
            {value === 0 && todayBooking.length > 0 ? (
              <div>
                <SingleBooking
                  bookings={todayBooking}
                  setBookings={setTodayBooking}
                  hasEditButton={true}
                  hasDeleteButton={true}
                />
                <div className="add-btn-container">
                  <Link to="/booking/create">
                    <button className="add-btn">
                      <img
                        className="add-icon"
                        src={`/images/add.png`}
                        alt="Add"
                      />
                    </button>
                  </Link>
                </div>
              </div>
            ) : null}
            {value === 0 && todayBooking.length === 0 ? (
              <>
                <p className="no-bookings-message">
                  You have no bookings for today
                </p>
                <div className="divider"></div>
                <div className="add-btn-container">
                  <Link to="/booking/create">
                    <button className="add-btn">
                      <img
                        className="add-icon"
                        src={`/images/add.png`}
                        alt="Add"
                      />
                    </button>
                  </Link>
                </div>
              </>
            ) : null}
            {value === 1 && upcomingBookings.length > 0 ? (
              <div>
                <SingleBooking
                  bookings={upcomingBookings}
                  setBookings={setUpcomingBookings}
                  hasEditButton={true}
                  hasDeleteButton={true}
                />
                <div className="add-btn-container">
                  <Link to="/booking/create">
                    <button className="add-btn">
                      <img
                        className="add-icon"
                        src={`/images/add.png`}
                        alt="Add"
                      />
                    </button>
                  </Link>
                </div>
              </div>
            ) : null}
            {value === 1 && upcomingBookings.length === 0 ? (
              <>
                <p className="no-bookings-message">
                  You have no upcoming bookings
                </p>
                <div className="divider"></div>
                <div className="add-btn-container">
                  <Link to="/booking/create">
                    <button className="add-btn">
                      <img
                        className="add-icon"
                        src={`/images/add.png`}
                        alt="Add"
                      />
                    </button>
                  </Link>
                </div>
              </>
            ) : null}
          </div>
        </Paper>
      </section>
    </>
  );
};

export default MyBookingPage;
