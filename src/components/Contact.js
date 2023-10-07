// Contact.js
import React from 'react';
import Layout from './Layout';
import styled from 'styled-components';

const ContactContainer = styled.section`
  padding: 20px;
`;

const ContactInfo = styled.p`
  font-size: 1rem;
`;

function Contact() {
  const email = 'youremail@example.com';
  const socialMedia = {
    linkedin: 'https://www.linkedin.com/in/yourname',
    twitter: 'https://twitter.com/yourusername',
    // Add more social media links here
  };

  return (
    <Layout>
      <ContactContainer>
        <h2>Contact</h2>
        <ContactInfo>Email: {email}</ContactInfo>
        <ContactInfo>Social Media:</ContactInfo>
        <ul>
          {Object.entries(socialMedia).map(([platform, link]) => (
            <li key={platform}>
              <a href={link} target="_blank" rel="noopener noreferrer">
                {platform}
              </a>
            </li>
          ))}
        </ul>
      </ContactContainer>
    </Layout>
  );
}

export default Contact;
