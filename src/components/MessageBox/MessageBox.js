import React from "react";
import "./MessageBox.css";

const MessageBox = (props) => {
  return (
    <>
    {props.status === 200 ? (
        <div className="message-container successful-message">
        <img
          className="message-icon"
          src={`/images/green-tick-icon.png`}
          alt="A circle with a tick symbol in it"
        />
        <h3 className="message">{props.message}</h3>
      </div>
    ): (
        <div className="message-container error-message">
        <img
          className="message-icon"
          src={`/images/red-cross-icon.png`}
          alt="A circle with an X symbol in it"
        />
        <h3 className="message">{props.message}</h3>
      </div>
    )}
    </>
  );
};
export default MessageBox;
