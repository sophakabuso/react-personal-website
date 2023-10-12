// Education.js
import React from 'react';
import Layout from './Layout';
import styled from 'styled-components';

const EducationContainer = styled.section`
  padding: 20px;
  background-color: #f7f7f7;
`;

const SchoolItem = styled.div`
  margin-bottom: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  h3 {
    font-size: 18px;
    margin: 0;
  }

  p {
    font-size: 16px;
    margin: 8px 0;
  }
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
