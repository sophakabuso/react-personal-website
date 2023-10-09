import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Skills from '../components/Skills';

const NavigatorContainer = styled.header`
  background-color: grey;
  color: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column; /* Display items in a column */
  align-items: center;
`;

const Heading = styled.h1`
  font-size: 2rem;
  margin: 0;
`;

const Tagline = styled.p`
  font-size: 1rem;
`;

const Nav = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column; /* Display items in a column */
    gap: 20px;
    margin-top: 10px;
  }

  li {
    font-size: 1rem;
  }

  a:hover {
    color: #ff9900;
  }
`;



function Navigator() {
  return (
    <NavigatorContainer>
      <div>
        <Heading>Menu</Heading>
        <Tagline>Mobile & Web Developer</Tagline>
      </div>
      <Nav>
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
          {/* Add links to other pages */}
        </ul>
        {/* Use the primary attribute as needed */}
       
      </Nav>
    </NavigatorContainer>
  );
}

export default Navigator;
