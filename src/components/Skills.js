import React from 'react';
import Layout from './Layout';
import styled from 'styled-components';

const SkillsContainer = styled.section`
  padding: 20px;
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
`;

const SkillItem = styled.li`
  font-size: 1rem;
  margin-bottom: 8px;
`;

function Skills() {
  const skills = ['JavaScript', 'React', 'HTML/CSS', 'Node.js', '...'];

  return (
    <Layout>
      <SkillsContainer>
        <h2>Skills</h2>
        <SkillList>
          {skills.map((skills, index) => (
            <SkillItem key={index}>{skills}</SkillItem>
          ))}
        </SkillList>
      </SkillsContainer>
    </Layout>
  );
}

export default Skills; // Ensure you have this export statement at the end
