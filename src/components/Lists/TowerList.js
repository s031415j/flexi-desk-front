import React, { useState, useEffect } from "react";
import Tower from "../../services/Tower";

const TowerList = (props) => {
  const [towers, setTowers] = useState([]);

  useEffect(() => {
    if (props.selectedLocation) {
      Tower.getByLocationName(props.selectedLocation).then((response) => {
        const towerArray = response.data.map((tower) => tower.name);
        setTowers(towerArray);
      });
    } else {
      setTowers([]);
    }
  }, [props.selectedLocation]);

  const towerOptions = towers.map((towerName) => towerName);

  return (
    <div className="radio-container">
      {towerOptions.map((towerName) => (
        <div key={towerName} className="radio-buttons" >
          <input
            type="radio"
            value={towerName}
            checked={props.selectedTower === towerName}
            onChange={props.handleTowerSelected}
            name="towers"
            id={towerName}
          />
          <label htmlFor={towerName}>
            {towerName}
          </label>
        </div>
      ))}
    </div>
  );
};

export default TowerList;
