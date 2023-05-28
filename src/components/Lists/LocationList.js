import React, { useState, useEffect } from "react";
import Location from "../../services/Location";

const LocationList = (props) => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    Location.all().then((response) => {
      const locationsArray = response.data.map((location) => location.name);
      setLocations(locationsArray);
    });
  }, []);

  const locationOptions = locations.map((locationName, index) => (
    <option key={index} value={locationName}>
      {locationName}
    </option>
  ));

  return (
    <select onChange={props.handleLocationSelected} className="select-box">
      <option value="" >Select a location</option>
      {locationOptions}
    </select>
  );
};

export default LocationList;
