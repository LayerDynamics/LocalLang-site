// src/components/Footer.tsx
import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaTwitter } from 'react-icons/fa';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  padding: 1rem;
  background-color: #222;
  color: white;

  a {
    margin: 0 1rem;
    color: white;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <a href="https://github.com/your-repo">
        <FaGithub size={30} />
      </a>
      <a href="https://twitter.com/your-profile">
        <FaTwitter size={30} />
      </a>
    </FooterContainer>
  );
};

export default Footer;
