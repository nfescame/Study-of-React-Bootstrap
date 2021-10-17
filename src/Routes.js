import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./Home.js";
import Carousel from "./teste/CarouselExemple.jsx";
import Alert from "./teste/AtertExemple.jsx";
import Breadcrumbs from "./teste/BreadcrumbsExemple.jsx";
import Card from "./teste/CardExemple.jsx";
import Dropdowns from "./teste/DropdownsExemple.jsx";
import Table from "./teste/TableExemple";
import Transitions from "./teste/TransitionsExemple";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route component={Home} path='/' exact />
      <Route component={Carousel} path='/carousel' exact />
      <Route component={Alert} path='/alert' exact />
      <Route component={Breadcrumbs} path='/breadcrumbs' exact />
      <Route component={Card} path='/card' exact />
      <Route component={Dropdowns} path='/dropdowns' exact />
      <Route component={Table} path='/table' exact />
      <Route component={Transitions} path='/transitions' exact />
    </BrowserRouter>
  );
}
