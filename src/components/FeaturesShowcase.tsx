// src/components/FeaturesShowcase.tsx
// src/components/FeaturesShowcase.tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { ResponsiveContainer } from '../styles/ResponsiveContainer';

const FeatureButtons = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const FeatureButton = styled.button<{ isActive: boolean }>`
  background-color: ${(props) => (props.isActive ? '#333' : '#ddd')};
  color: ${(props) => (props.isActive ? '#fff' : '#333')};
  padding: 1rem 2rem;
  margin: 0.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  flex: 1;
  min-width: 120px;
  max-width: 200px;

  &:hover {
    background-color: #555;
    color: #fff;
  }
`;

const FeatureContent = styled.div`
  padding: 1rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  flex-grow: 1; /* This makes sure the content grows to fill the space */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const FeaturesShowcase: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<string>('Feature1');

  const renderFeatureContent = () => {
    switch (activeFeature) {
      case 'Feature1':
        return <p>This is the first feature of locallang. It allows users to create powerful workflows with ease.</p>;
      case 'Feature2':
        return <p>This is the second feature of locallang. It supports multi-agent coordination for complex tasks.</p>;
      case 'Feature3':
        return <p>This is the third feature of locallang. It is highly extensible and configurable to meet various needs.</p>;
      default:
        return <p>Select a feature to learn more about it.</p>;
    }
  };

  return (
    <ResponsiveContainer>
      <FeatureButtons>
        <FeatureButton
          isActive={activeFeature === 'Feature1'}
          onClick={() => setActiveFeature('Feature1')}
        >
          Feature 1
        </FeatureButton>
        <FeatureButton
          isActive={activeFeature === 'Feature2'}
          onClick={() => setActiveFeature('Feature2')}
        >
          Feature 2
        </FeatureButton>
        <FeatureButton
          isActive={activeFeature === 'Feature3'}
          onClick={() => setActiveFeature('Feature3')}
        >
          Feature 3
        </FeatureButton>
      </FeatureButtons>
      <FeatureContent>
        {renderFeatureContent()}
      </FeatureContent>
    </ResponsiveContainer>
  );
};

export default FeaturesShowcase;
