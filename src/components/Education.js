// Education.js
import React from 'react';
import Layout from './Layout';
import styled from 'styled-components';

const EducationContainer = styled.section`
  padding: 20px;
`;

const SchoolItem = styled.div`
  margin-bottom: 16px;
`;

function Education() {
  const educationData = [
    {
      school: 'University Name',
      degree: 'Bachelor of Science in Computer Science',
      year: '2015 - 2019',
    },
    // Add more education entries here
  ];

  return (
    <Layout>
      <EducationContainer>
        <h2>Education</h2>
        {educationData.map((edu, index) => (
          <SchoolItem key={index}>
            <h3>{edu.school}</h3>
            <p>{edu.degree}</p>
            <p>{edu.year}</p>
          </SchoolItem>
        ))}
      </EducationContainer>
    </Layout>
  );
}

export default Education;
