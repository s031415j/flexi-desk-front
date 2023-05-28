import React from "react";

const FormatDateToLocalDate = (props) => {

  const dateObject = new Date(props.date);

  const year = dateObject.getFullYear();
  const month = String(dateObject.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const day = String(dateObject.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;

  return <>{formattedDate}</>;
};

export default FormatDateToLocalDate;
