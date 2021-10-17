import React, { useState } from "react";
import {
  Dropdown,
  DropdownButton,
  ButtonGroup,
  Nav,
  Button,
} from "react-bootstrap";

export default function DropdownsExemple() {
  const [colorsState] = useState([
    "Primary",
    "Secondary",
    "Success",
    "Info",
    "Warning",
    "Danger",
  ]);
  return (
    <>
      <h1>Dropdowns React-Bootstrap</h1>
      <Nav.Link href='/'>
        <Button variant='primary'>Home</Button>
      </Nav.Link>
      <>
        {colorsState.map((color) => (
          <DropdownButton
            as={ButtonGroup}
            key={color}
            id={`dropdown-variants-${color}`}
            variant={color.toLowerCase()}
            title={color}
          >
            <Dropdown.Item eventKey='1'>Action</Dropdown.Item>
            <Dropdown.Item eventKey='2'>Another action</Dropdown.Item>
            <Dropdown.Item eventKey='3' active>
              Active Item
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey='4'>Separated link</Dropdown.Item>
          </DropdownButton>
        ))}
      </>
    </>
  );
}
