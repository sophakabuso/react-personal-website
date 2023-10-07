// About.js
import React from 'react';
import Layout from './Layout';
import styled from 'styled-components';

const AboutContainer = styled.section`
  padding: 20px;
`;

const AboutText = styled.p`
  font-size: 1rem;
`;

function About() {
  return (
    <Layout>
      <AboutContainer>
        <h2>About Me</h2>
        <AboutText>
          Provide a brief introduction about yourself, your background, and your interests here.
        </AboutText>
      </AboutContainer>
    </Layout>
  );
}

export default About;
