import React from "react";
import "./MyDetails.css";

const MyDetails = (props) => {

const fullName = `${props.user.firstname} ${props.user.surname}`;

  return (
    <>
      <section>
        <h2>My Details</h2>
        <div className="row">
          <div className="coloumn-1">
            <div className="booking-details">
              <div className="detail-item">
                <p className="detail-item-title">Name:</p>
                <input
                  className="text-box"
                  type="text"
                  value={fullName}
                  readOnly
                />
              </div>
              <div className="detail-item">
                <p className="detail-item-title">EIN:</p>
                <input
                  className="text-box"
                  type="text"
                  value={props.user.id}
                  readOnly
                />
              </div>
            </div>
          </div>
          <div className="coloumn-2">
            <div className="radio-buttons">
              <input
                type="checkbox"
                checked={props.isAnonymous}
                onChange={props.handleIsAnonymousChecked}
              />
              <label>Anonymous Booking</label>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyDetails;
