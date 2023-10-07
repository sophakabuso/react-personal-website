// Navigator.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navigator() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/skills">Skills</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/experience">Experience</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigator;
