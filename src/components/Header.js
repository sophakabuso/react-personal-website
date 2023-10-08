

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faSlack, faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

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

const SocialLinks = styled.div`
  display: flex;
  gap: 20px;

  a {
    color: #fff;
    font-size: 1.5rem;
  }
`;

const socialLinks = [
  { icon: faTwitter, url: 'https://twitter.com/SophaBuso/' },
  { icon: faSlack, url: 'https://app.slack.com/client/T04M928TTMF/C04ML3U7DJLom/' },
  { icon: faFacebook, url: 'https://web.facebook.com/?_rdc=1&_rdr/' },
  { icon: faGithub, url: 'https://github.com/sophakabuso' },
  { icon: faLinkedin, url: 'https://www.linkedin.com/in/sophakama-buso-2a9191103/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BeI%2FqN7XGSjOIIVcam21XIg%3D%3D' },
];

function Header() {
  return (
    <HeaderContainer>
      <div>
        <Heading>Sophakama Buso</Heading>
        <Tagline>Mobile & Web Developer</Tagline>
      </div>
     
      <SocialLinks>
        {socialLinks.map((link, index) => (
          <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={link.icon} />
          </a>
        ))}
      </SocialLinks>
    </HeaderContainer>
  );
}

export default Header;
