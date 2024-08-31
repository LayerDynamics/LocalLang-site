import styled from 'styled-components';

export const ResponsiveContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  flex-grow: 1; /* This makes sure it expands to take up remaining space */
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 95%;
    padding: 0.5rem;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 0.25rem;
  }
`;
