// src/components/Header.tsx
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 1rem;
  background-color: #333;
  color: white;
`;

const Header: React.FC = () => {
  return (
    <Nav>
      <a href="/">Home</a>
      <a href="/features">Features</a>
      <a href="/docs">Docs</a>
      <a href="/community">Community</a>
    </Nav>
  );
};

export default Header;
