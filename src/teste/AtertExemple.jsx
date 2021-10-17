import React, { useState } from "react";
import { Alert, Button, Nav } from "react-bootstrap";

export default function AlertExemple() {
  const [colorsState] = useState([
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
  ]);

  console.log(colorsState);
  return (
    <>
      <h1>Alert React-Bootstrap</h1>
      <Nav.Link href='/'>
        <Button variant='primary'>Home</Button>
      </Nav.Link>
      {colorsState.map((color, idx) => {
        return (
          <Alert key={idx} variant={color}>
            This is a {color} alert with return{" "}
            <Alert.Link href='#'>an example link</Alert.Link>. Give it a click
            if you like.
          </Alert>
        );
      })}
    </>
  );
}
