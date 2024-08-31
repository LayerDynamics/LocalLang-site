// src/components/Landing.tsx
import React from 'react';
import styled from 'styled-components';

const LandingSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  background: linear-gradient(135deg, #6e3b6e, #3b6e6e);
  color: white;
  text-align: center;
`;

const Landing: React.FC = () => {
  return (
    <LandingSection>
      <h1>Welcome to locallang</h1>
      <p>Automate your workflows with ease.</p>
    </LandingSection>
  );
};

export default Landing;
