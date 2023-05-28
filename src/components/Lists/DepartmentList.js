import React, { useState, useEffect } from "react";
import Department from "../../services/Department";

const DepartmentList = (props) => {
  const [departments, setDepartments] = useState([]);
  const [floorLevels, setFloorLevels] = useState([]);

  useEffect(() => {
    Department.all().then((response) => {
      const departmentArray = response.data.map((department) => ({
        name: department.name,
        floorLevel: department.floorLevel,
      }));
      setDepartments(departmentArray);
    });
  }, []);

  useEffect(() => {
    if (props.selectedDepartment) {
      setFloorLevels([]);
      getFloorLevels(props.selectedDepartment);
    }
  }, [props.selectedDepartment]);

  const getFloorLevels = (department) => {
    Department.getFloorLevelByDepartment(department).then((response) => {
      const floorLevels = response.data.map((floor) => floor.floorLevel);
      setFloorLevels(floorLevels);
    });
  };

  const departmentOptions = departments.map((department) => (
    <option key={department.name} value={department.name}>
      {department.name}
    </option>
  ));

  return (
    <div>
      <select onChange={props.handleDepartmentSelected} className="select-box">
        <option value="">Select a department</option>
        {departmentOptions}
      </select>
      {floorLevels.length > 0 && (
        <div className="radio-container">
          {floorLevels.map((floorLevel) => (
            <div className="radio-buttons" key={floorLevel}>
              <input
                type="radio"
                value={floorLevel}
                checked={props.selectedFloor === floorLevel}
                onChange={props.handleFloorSelected}
                name="floorLevels"
                id={floorLevel}
              />
              <label htmlFor={floorLevel}>Floor {floorLevel}</label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DepartmentList;
