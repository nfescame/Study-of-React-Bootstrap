import React, { useState } from "react";
import { Button, Collapse, Card, Nav } from "react-bootstrap";

export default function TransitionsExemple() {
  const [openState, setOpenState] = useState(false);
  return (
    <>
      <h1>Transitions React-Bootstrap</h1>
      <Nav.Link href='/'>
        <Button variant='primary'>Home</Button>
      </Nav.Link>
      <>
        <Button
          onClick={() => setOpenState(!openState)}
          aria-controls='example-collapse-text'
          aria-expanded={openState}
        >
          click
        </Button>
        <div style={{ minHeight: "150px" }}>
          <Collapse in={openState} dimension='width'>
            <div id='example-collapse-text'>
              <Card body style={{ width: "400px" }}>
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. Nihil anim keffiyeh
                helvetica, craft beer labore wes anderson cred nesciunt sapiente
                ea proident.
              </Card>
            </div>
          </Collapse>
        </div>
      </>
    </>
  );
}
