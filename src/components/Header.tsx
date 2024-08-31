// src/components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: #333;
  color: white;

  a {
    color: white;
    margin: 0 1rem;
  }
`;

const Header: React.FC = () => {
  return (
    <Nav>
      <div>
        <Link to="/">locallang</Link>
      </div>
      <div>
        <Link to="/features">Features</Link>
        <Link to="/docs">Docs</Link>
        <Link to="/community">Community</Link>
      </div>
    </Nav>
  );
};

export default Header;
