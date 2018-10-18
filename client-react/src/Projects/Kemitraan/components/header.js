import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Header = () => (
  <div>
    <ul>
      <li>
        <Link className="link" to="/">Home</Link>
      </li>
      <li>
        <Link className="link" to="/about">About</Link>
      </li>
    </ul>
  </div>
)

export default Header;

