// Experience.js
import React from 'react';
import Layout from './Layout';
import styled from 'styled-components';

const ExperienceContainer = styled.section`
  padding: 20px;
`;

const JobItem = styled.div`
  margin-bottom: 16px;
`;

function Experience() {
  const experienceData = [
    {
      company: 'Tech Company Inc.',
      position: 'Software Engineer',
      duration: '2019 - Present',
      description: 'Description of your responsibilities and achievements in this role.',
    },
    // Add more experience entries here
  ];

  return (
    <Layout>
      <ExperienceContainer>
        <h2>Experience</h2>
        {experienceData.map((exp, index) => (
          <JobItem key={index}>
            <h3>{exp.position}</h3>
            <p>{exp.company}</p>
            <p>{exp.duration}</p>
            <p>{exp.description}</p>
          </JobItem>
        ))}
      </ExperienceContainer>
    </Layout>
  );
}

export default Experience;
