import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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

const StyledButton = styled.button`
  background-color: ${props => (props.primary ? '#007bff' : '#fff')};
  color: ${props => (props.primary ? '#fff' : '#007bff')};
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${props => (props.primary ? '#0056b3' : '#cceeff')};
  }
`;

function Header() {
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
        <StyledButton primary="true">Primary Button</StyledButton>
        <StyledButton>Secondary Button</StyledButton>
      </Nav>
    </NavigatorContainer>
  );
}

export default Header;
