import React from "react";
import "./HelpPage.css";

const HelpPage = (props) => {
  return (
    <>
      <div className="content">
        <div id="add-booking-section" className="help-section">
          <h2>How To Add a Booking</h2>
          <ol className="steps">
            <li>
              1. Click the plus icon in the navigation
              bar.
              <img
                className="icon helping-icon"
                src={`/images/add.png`}
                alt="A circle with a plus symbol in it"
              />
            </li>
            <li>
              2. Within the side bar, select the options
              which applies. Once all the options are selected the relevant
              floor plan will appear to selected a desk.
            </li>
            <li>
              3. Once all these options are selected,
              a "Next" button will appear to direct you to the Booking Summary
              page.
            </li>
            <li>
              4. From the Booking Summary page you can
              add another booking or edit and delete the booking just created.
            </li>
            <li>
              5. Click the "Save" button to
              successfully create your booking.
            </li>
          </ol>
        </div>
        <div id="edit-booking-section" className="help-section">
          <h2>How To Edit a Booking</h2>
          <ol className="steps">
          <li>
              1. Click the calendar icon in the navigation bar.
              <img
                className="icon helping-icon"
                src={`/images/calendar-black-icon.png`}
                alt="A circle with a plus symbol in it"
              />
            </li>
            <li>
              2. Click the edit icon to the right of
              the booking you want to edit.
              <img
                className="icon helping-icon"
                src={`/images/edit.png`}
                alt="Square with a pencil sticking out the right side"
              />
            </li>
            <li>
              3. When the icon is clicked a pop up will
              appear.
            </li>
            <li>
              4. Within the pop up select the options
              in the side bar which applies.
            </li>
            <li>
            5. To successfully update the booking,
              click the "Save Details" button in the bottom right corner.
            </li>
          </ol>
        </div>
        <div id="delete-booking-section" className="help-section">
          <h2>How To Delete a Booking</h2>
          <ol className="steps">
          <li>
              1. Click the calendar icon in the navigation bar.
              <img
                className="icon helping-icon"
                src={`/images/calendar-black-icon.png`}
                alt="A circle with a plus symbol in it"
              />
            </li>
            <li>
            2. Click the delete icon to the right of
              the booking you want to delete.
              <img
                className="icon helping-icon"
                src={`/images/delete.png`}
                alt="Square with a pencil sticking out the right side"
              />
            </li>
            <li>
            3. When the icon is clicked, the booking will be deleted.
            </li>
          </ol>
        </div>
        <div id="my-booking-section" className="help-section">
          <h2>How To View My Bookings for Today</h2>
          <ol className="steps">
            <li>
            1. Click the calendar icon in the navigation
              bar.
              <img
                className="icon helping-icon"
                src={`/images/calendar-black-icon.png`}
                alt="A circle with a plus symbol in it"
              />
            </li>
            <li>
            2. Under the "Today" tab, it will present your bookings for today. 
            </li>
          </ol>
        </div>
        <div id="my-booking-section" className="help-section">
          <h2>How To View My Upcoming Bookings</h2>
          <ol className="steps">
            <li>
            1. Click the calendar icon in the navigation
              bar.
              <img
                className="icon helping-icon"
                src={`/images/calendar-black-icon.png`}
                alt="A circle with a plus symbol in it"
              />
            </li>
            <li>
            2. Under the "Upcoming" tab, it will present your upcoming bookings. 
            </li>
          </ol>
        </div>
        <div id="my-booking-section" className="help-section">
          <h2>How To Logout</h2>
          <ol className="steps">
            <li>
            1. Click the logout icon in the navigation
              bar.
              <img
                className="icon helping-icon"
                src={`/images/logout-black-icon.png`}
                alt="A circle with a plus symbol in it"
              />
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}

export default HelpPage;
