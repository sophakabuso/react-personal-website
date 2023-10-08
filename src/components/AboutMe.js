// About.js
import React from 'react';

import styled from 'styled-components';

const AboutContainer = styled.section`
  padding: 20px;
  background-color: #007bff;
`;

const AboutText = styled.p`
  font-size: 1rem;
`;

function AboutMe() {
  return (
    
      <AboutContainer>
        <h2>About Me</h2>
        <AboutText>
        "Hello! I'm an enthusiastic junior web and mobile developer trainee with a relentless commitment to ongoing learning in the dynamic tech landscape. My primary focus is on refining my expertise in React.js, React Native, JavaScript, and Node.js, and I'm deeply engaged in practical development projects at MLab Southern Africa."
        </AboutText>
      </AboutContainer>
   
  );
}

export default AboutMe;
