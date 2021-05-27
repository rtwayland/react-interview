import React from "react";
import Dropdown from "./Dropdown";

const DropdownExercise = () => {
  const options = ["One", "Two", "Three", "Four"];
  return (
    <div style={{ margin: 20 }}>
      <h2>First Implementation</h2>
      <Dropdown options={options} />

      <h2 style={{ marginTop: 50 }}>Second Implementation</h2>
      <Dropdown>
        <Dropdown.Item>One</Dropdown.Item>
        <Dropdown.Item>Two</Dropdown.Item>
      </Dropdown>
    </div>
  );
};

export default DropdownExercise;
