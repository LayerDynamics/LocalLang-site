// src/components/DocsContainer.tsx
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const DocsContainer: React.FC = () => {
  const [markdown, setMarkdown] = useState<string>('');

  useEffect(() => {
    // Replace this URL with the actual URL of the raw markdown file in your repo
    const fetchMarkdown = async () => {
      const response = await fetch(
        'https://raw.githubusercontent.com/layerdynamics/locallang/main/README.md'
      );
      const text = await response.text();
      setMarkdown(text);
    };

    fetchMarkdown();
  }, []);

  return (
    <Container>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </Container>
  );
};

export default DocsContainer;
