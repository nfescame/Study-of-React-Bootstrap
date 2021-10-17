import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <ul>
          <li>
            <Link to='/carousel'>Carousel Exemple</Link>
          </li>

          <li>
            <Link to='/alert'>Alert Exemple</Link>
          </li>

          <li>
            <Link to='/breadcrumbs'>Breadcrumbs Exemple</Link>
          </li>

          <li>
            <Link to='/card'>Card Exemple</Link>
          </li>

          <li>
            <Link to='/dropdowns'>Dropdowns Exemple</Link>
          </li>

          <li>
            <Link to='/table'>Table Exemple</Link>
          </li>

          <li>
            <Link to='/transitions'>Transitions Exemple</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
