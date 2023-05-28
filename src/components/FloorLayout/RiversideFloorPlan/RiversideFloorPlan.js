import React, { useState, useEffect } from "react";
import BankOfDesks from "../../common/BankOfDesks/BankOfDesks";
import Desk from "../../../services/Desk";
import Booking from "../../../services/Booking";
import { groupBy } from "lodash";
import "./RiversideFloorPlan.css";

const RiversideFloorPlan = (props) => {
  const [desks, setDesks] = useState(null);
  const [bookedDesks, setBookedDesks] = useState(null);
  const [standingDesks, setStandingDesks] = useState([]);

  useEffect(() => {
    Desk.getDeskByLocationTowerAndFloor(
      props.selectedLocation,
      props.selectedTower,
      props.selectedFloor
    )
      .then((response) => {
        const deskArray = response.data.map((desk) => desk);
        setDesks(deskArray);

        // Store the deskIds for standing desks in the standingDesks state
        const standingDeskIds = deskArray
          .filter((desk) => desk.deskType === "standing")
          .map((desk) => desk.id);
          setStandingDesks(standingDeskIds);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    Booking.getBookingsForFloorMap(
      props.selectedLocation,
      props.selectedTower,
      formattedDate,
      props.selectedFloor
    )
      .then((response) => {
        const bookedDeskArray = response.data.map((bookedDesk) => bookedDesk);
        setBookedDesks(bookedDeskArray);
        console.log("desk:", bookedDeskArray);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const selectedDate = new Date(props.selectedDate);
  const formattedDate = selectedDate.toISOString().split("T")[0];

  const generateBankComponents = (desks, bankFilter) => {
    const components = [];

    if (desks && desks.length === 160) {
      const desksByBank = groupBy(desks, "bankId");

      for (const [key, value] of Object.entries(desksByBank)) {
        if (!bankFilter(key)) {
          continue;
        }

        const deskIds = value.map((desk) => desk.id);

        // Create a function for this let position = {function}
        let position = "top";
        if (key >= 1 && key <= 4) {
          position = "top";
        } else if (key >= 5 && key <= 10) {
          position = "right";
        } else if (key >= 11 && key <= 14) {
          position = "bottom";
        } else if (key >= 15 && key <= 20) {
          position = "left";
        }

        // Create function
        const style = {};
        if ((key >= 1 && key <= 4) || (key >= 11 && key <= 14)) {
          style.display = "flex";
        }

        const componentToAdd = (
          <div key={key} style={style}>
            <BankOfDesks
              ids={deskIds}
              onDeskClick={props.handleDeskClick}
              position={position}
              bookedDesks={bookedDesks}
              standingDeskIds={standingDesks}
              selectedDesk={props.selectedDesk}
            />
          </div>
        );
        components.push(componentToAdd);
      }
    }

    return components;
  };

  const bankOfTopDesksComponents = generateBankComponents(
    desks,
    (key) => key >= 1 && key <= 4
  );
  const bankOfRightDesksComponents = generateBankComponents(
    desks,
    (key) => key >= 5 && key <= 10
  );
  const bankOfBottomDesksComponents = generateBankComponents(
    desks,
    (key) => key >= 11 && key <= 14
  );
  const bankOfLeftDesksComponents = generateBankComponents(
    desks,
    (key) => key >= 15 && key <= 20
  );

  return (
    <>
      <div className="floor-plan-container">
        <div className="top-section">{bankOfTopDesksComponents}</div>
        <div className="right-section">{bankOfRightDesksComponents}</div>
        <div className="bottom-section">{bankOfBottomDesksComponents}</div>
        <div className="left-section">{bankOfLeftDesksComponents}</div>
      </div>
    </>
  );
};

export default RiversideFloorPlan;
