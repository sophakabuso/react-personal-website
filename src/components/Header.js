

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #007bff;
  color: #fff;
  padding: 20px;
  display: flex;
  justify-content: space-between;
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
    <HeaderContainer>
      <div>
        <Heading>Sophakama Buso</Heading>
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
    </HeaderContainer>
  );
}

export default Header;
