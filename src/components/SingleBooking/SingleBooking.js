import React, { useState } from "react";
import "./SingleBooking.css";
import Booking from "../../services/Booking";
import Dialog from "@material-ui/core/Dialog";
import EditBooking from "../EditBooking/EditBooking";
import FormatDateToUserFriendly from "../common/FormatDate/FormatDateToUserFriendly";
import { Link } from "react-router-dom";

const SingleBooking = (props) => {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(false);

  const bookings = Array.isArray(props.bookings)
    ? props.bookings
    : [props.bookings];

  const formatDate = (date) => {
    const dateObject = new Date(date);

    const year = dateObject.getFullYear();
    const month = String(dateObject.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const day = String(dateObject.getDate()).padStart(2, "0");

    const formattedDate = `${year}-${month}-${day}`;

    return <>{formattedDate}</>;
  };

  const handleDeleteBooking = (bookingId, bookingDate) => {
    if (bookingId) {
      Booking.deleteBooking(bookingId)
        .then((response) => {
          window.location.reload();
        })
        .catch((error) => {
          console.log("Delete booking error:", error.response);
        });
    } else {
      Booking.deleteBookingByDate(formatDate(bookingDate).props.children)
        .then((response) => {
          window.location.reload();
        })
        .catch((error) => {
          console.log("Delete booking by date error:", error.response);
        });
    }
  };

  const handleEditBooking = (bookingId, bookingDate) => {
    if (bookingId) {
      setSelectedBooking(bookingId);
    } else {
      setSelectedBooking(bookingDate);
      console.log("bookingDate", bookingDate);
    }
    setEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    window.location.reload();
    setSelectedBooking(null);
    setEditModalOpen(false);
  };

  console.log("selectedBooking", selectedBooking);

  return (
    <>
      <section>
        <div className="divider" />
        {bookings.map((booking, index) => (
          <div key={index}>
            <div className="booking">
              <div className="details">
                <h3 className="date">
                  <FormatDateToUserFriendly key={index} date={booking.date} />
                </h3>
                <h3>Floor {booking.floorLevel}</h3>
                <h3>{booking.deskId.id}</h3>
                <h3>{booking.time}</h3>
              </div>
              <div className="action">
              {props.hasEditButton && (
                  <img
                    className="booking-icon icon-btn"
                    src={`/images/edit.png`}
                    alt="Square with a pencil sticking out the right side"
                    onClick={() =>
                      handleEditBooking(booking.bookingId, booking.date)
                    }
                  />
                )}
                {props.hasDeleteButton && (
                  <img
                    className="booking-icon icon-btn"
                    src={`/images/delete.png`}
                    alt="Bin"
                    onClick={() =>
                      handleDeleteBooking(booking.bookingId, booking.date)
                    }
                  />
                )}
              </div>
            </div>
            {index !== bookings.length - 1 && <div className="divider" />}
          </div>
        ))}
        <div className="divider" />
      </section>

      {editModalOpen && (
        <Dialog
          open={editModalOpen}
          onClose={handleCloseEditModal}
          className="modal"
        >
          <div className="modal-body">
            <EditBooking
              booking={props.booking}
              onClose={handleCloseEditModal}
            />
          </div>
        </Dialog>
      )}
    </>
  );
};

export default SingleBooking;
