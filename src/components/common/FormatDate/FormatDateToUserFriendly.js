import React from "react";

const FormattedDateToUserFriendly = (props) => {

  const dateObject = new Date(props.date);

  const formatDate = (date) => {
    if (!(date instanceof Date) || isNaN(date)) {
      return "";
    }

    const suffixes = ["st", "nd", "rd", "th"];
    const day = date.getDate();

    const suffix =
      suffixes[(day - 1) % 10] || suffixes[(day - 11) % 10] || suffixes[3];

    return `${date.toLocaleDateString("en-US", {
      weekday: "long",
    })} ${date.getDate()}${suffix} ${date.toLocaleDateString("en-US", {
      month: "long",
    })}`;
  };

  return <>{formatDate(dateObject)}</>;
};

export default FormattedDateToUserFriendly;
