import React from "react";
import "./SingleDesk.css";

const SingleDesk = (props) => {
  const handleClick = () => {
    if (!isDeskBooked && !isSelected) {
      props.onClick(props.id);
    }
  };

  const isDeskBooked = props.bookedDesks && props.bookedDesks.some((desk) => desk.deskId.id === props.id);
  const isStandingDesk = props.standingDeskIds.includes(props.id);
    const isSelected = props.id === props.selectedDesk; 


  let deskClassName = "";

  if (isStandingDesk && !isDeskBooked && !isSelected) {
    deskClassName += " desk standing-desk";
  }if (isSelected) {
    deskClassName += " selected-desk"; 
  }
  if (isDeskBooked) {
    deskClassName += " desk unavailable-desk";
  } else {
    deskClassName += " desk available-desk";
  }

  return (
    <div onClick={handleClick}>
      <div className={deskClassName}></div>
    </div>
  );
};

export default SingleDesk;
