import React from "react";
import "./BankOfDesks.css";

import SingleDesk from "../SingleDesk/SingleDesk";

const BankOfDesks = (props) => {
  const handleClick = (id) => {
    props.onDeskClick(id);
  };

  const classNameForBanks = `desk-grid ${props.position}`;

  return (
    <div
      className={classNameForBanks}
    >
      {props.ids.map((id) => (
        <SingleDesk
          key={id}
          id={id}
          bank={props.bank}
          floor={props.floor}
          onClick={handleClick}
          bookedDesks={props.bookedDesks}
          standingDeskIds={props.standingDeskIds}
          selectedDesk={props.selectedDesk}
        />
      ))}
    </div>
  );
};

export default BankOfDesks;