import React from "react";
import { Breadcrumb } from "react-bootstrap";

export default function BreadcrumbsExemple() {
  return (
    <>
      <h1>Breadcrumbs React-Bootstrap</h1>
      <Breadcrumb>
        <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
        <Breadcrumb.Item href='#'>Library</Breadcrumb.Item>
        <Breadcrumb.Item active>Data</Breadcrumb.Item>
      </Breadcrumb>
    </>
  );
}
