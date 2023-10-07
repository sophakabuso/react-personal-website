// Portfolio.js

import React from 'react';
import Layout from './Layout';
import styled from 'styled-components';

const PortfolioContainer = styled.section`
  padding: 20px;
`;

const ProjectList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ProjectItem = styled.li`
  margin-bottom: 16px;
`;

function Portfolio() {
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of Project 1.',
      // Add more details like images, links, or other media for each project
    },
    {
      title: 'Project 2',
      description: 'Description of Project 2.',
      // Add more details like images, links, or other media for each project
    },
    // Add more projects here
  ];

  return (
    <Layout>
      <PortfolioContainer>
        <h2>Portfolio</h2>
        <ProjectList>
          {projects.map((project, index) => (
            <ProjectItem key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {/* Add more elements here for images, links, or other media */}
            </ProjectItem>
          ))}
        </ProjectList>
      </PortfolioContainer>
    </Layout>
  );
}

export default Portfolio;
