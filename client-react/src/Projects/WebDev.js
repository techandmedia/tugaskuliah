import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const WebDev = () => (
  <div>
    <h2>Web Development</h2>
    <ul>
      <li>
        <Link to="/projects/web-development/kemitraan">Inventory Management System for Kemitraan</Link>
      </li>
      <li>
        <Link to="/projects/web-development/cart">Cart</Link>
      </li>
    </ul>
  </div>
)

export default WebDev;