// src/pages/Community.tsx
import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaTwitter, FaDiscord } from 'react-icons/fa';

const Container = styled.div`
  max-width: 1000px;
  margin: 2rem auto;
  padding: 2rem;
  background: #f9f9f9;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const Section = styled.div`
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  margin-bottom: 1rem;
  font-size: 2rem;
  color: #333;
`;

const Paragraph = styled.p`
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;

  a {
    color: #333;
    font-size: 2rem;
    margin: 0 1rem;
    transition: color 0.3s;

    &:hover {
      color: #555;
    }
  }
`;

const Community: React.FC = () => {
  return (
    <Container>
      <Section>
        <Title>Welcome to the locallang Community</Title>
        <Paragraph>
          Join our growing community of developers, contributors, and users who are passionate about
          automating workflows and enhancing productivity with locallang. Whether you're a beginner or an
          expert, there's a place for you here.
        </Paragraph>
      </Section>

      <Section>
        <Title>Connect with Us</Title>
        <SocialLinks>
          <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://discord.gg/your-invite-link" target="_blank" rel="noopener noreferrer">
            <FaDiscord />
          </a>
        </SocialLinks>
      </Section>

      <Section>
        <Title>Contribution Guidelines</Title>
        <Paragraph>
          We welcome contributions from everyone. Please read our{' '}
          <a href="https://github.com/your-repo/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer">
            contribution guidelines
          </a>{' '}
          to get started. Whether it's reporting bugs, writing documentation, or contributing code, your help is
          appreciated!
        </Paragraph>
      </Section>

      <Section>
        <Title>Upcoming Events & Meetups</Title>
        <Paragraph>
          Stay tuned for upcoming events, meetups, and webinars where you can learn more about locallang, meet
          the team, and connect with other users. Check back regularly for updates!
        </Paragraph>
      </Section>

      <Section>
        <Title>Testimonials</Title>
        <Paragraph>
          "locallang has transformed the way I manage workflows in my projects. The flexibility and power it
          offers are unparalleled." - Jane Doe
        </Paragraph>
        <Paragraph>
          "The community around locallang is fantastic. I've learned so much from the contributors and fellow
  
