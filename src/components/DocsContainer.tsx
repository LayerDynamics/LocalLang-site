// src/components/DocsContainer.tsx
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

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
    const fetchMarkdown = async () => {
      try {
        // Attempt to fetch the markdown file from the remote GitHub repository
        const response = await fetch(
          'https://raw.githubusercontent.com/<your-github-username>/locallang/main/README.md'
        );
        if (!response.ok) throw new Error('Network response was not ok');
        const text = await response.text();
        setMarkdown(text);
      } catch (error) {
        console.error('Fetching remote README.md failed, switching to local.', error);
        // Switch to loading the local markdown file if the remote fetch fails
        switchToLocalMarkdown();
      }
    };

    const switchToLocalMarkdown = async () => {
      try {
        // Fetch the local markdown file from the public folder
        const response = await fetch('/README.md');
        if (!response.ok) throw new Error('Failed to load local README.md');
        const text = await response.text();
        setMarkdown(text);
      } catch (error) {
        console.error('Failed to load local README.md', error);
        setMarkdown('Error: Documentation is currently unavailable.');
      }
    };

    fetchMarkdown();
  }, []);

  return (
    <Container>
      <ReactMarkdown
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <SyntaxHighlighter style={materialLight} language={match[1]} PreTag="div" {...props}>
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {markdown}
      </ReactMarkdown>
    </Container>
  );
};

export default DocsContainer;
