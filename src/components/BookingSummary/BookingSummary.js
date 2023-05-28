import React, { useState, useReducer } from "react";

import SingleBooking from "../SingleBooking/SingleBooking";
import MyDetails from "../MyDetails/MyDetails";
import Booking from "../../services/Booking";
import MessageBox from "../../components/MessageBox/MessageBox";
import { Link } from "react-router-dom";

import "./BookingSummary.css";

const formatDate = (date) => {
  const dateObject = new Date(date);

  const year = dateObject.getFullYear();
  const month = String(dateObject.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const day = String(dateObject.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;

  return <>{formattedDate}</>;
};

function initBooking({ props, date }) {
  return {
    userId: {
      id: props.user.id,
    },
    deskId: {
      id: props.selectedDesk,
    },
    floorLevel: props.selectedFloor,
    date: date.props.children,
    time: props.selectedTime,
    isAnonymous: false,
  };
}

const reducer = (state, { type }) => {
  switch (type) {
    case "updateIsAnon":
      return { ...state, isAnonymous: !state.isAnonymous };
    default: /**donothing */
  }
};

const BookingSummary = (props) => {
  const [apiStatus, setApiStatus] = useState(null);
  const [apiMessage, setApiMessage] = useState("");
  const [showMessageBox, setShowMessageBox] = useState(false);
  const [booking, dispatch] = useReducer(
    reducer,
    {
      props,
      date: formatDate(props.selectedDate),
    },
    initBooking
  );

  const handleAddBooking = () => {
    Booking.createBooking(booking).then((response) => {
      setApiStatus(response.data.status);
      setApiMessage(response.data.response);
      setShowMessageBox(true);
      console.log(response);
    });
  };

  console.log(booking);
  return (
    <>
      <section>
        <div className="page">
          <div className="border">
            <h1>Booking Summary</h1>
            <div className="my-details">
              <MyDetails
                isAnonymous={booking.isAnonymous}
                handleIsAnonymousChecked={() =>
                  dispatch({ type: "updateIsAnon" })
                }
                user={booking.userId}
              />
            </div>
            <div>
              <h2>Booking Details</h2>
              {!booking.deskId.id ? (
                <div>
                  <div className="no-bookings">You have no bookings</div>
                </div>
              ) : (
                <SingleBooking bookings={booking} hasEditButton={false} hasDeleteButton={false}/>
              )}
              {booking.deskId.id ? (
                <div className="btn-container">
                  {apiStatus !== 200 && (
                    <>
                      <Link to="/booking/create">
                        <button className="secondary-btn">Back</button>
                      </Link>
                      <button className="primary-btn" onClick={handleAddBooking}>
                        Save
                      </button>
                    </>
                  )}
                </div>
              ) : (
                <div className="btn-container">
                  <Link to="/booking/create">
                    <button className="secondary-btn">Back</button>
                  </Link>
                </div>
              )}

              {showMessageBox && (
                <MessageBox message={apiMessage} status={apiStatus} />
              )}

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookingSummary;
