import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Navigation = styled.nav`
  align-items: center;
  border-bottom: 1px solid grey;
  display: flex;
  justify-content: space-between;
  margin-left: 2rem;
  margin-right: 2rem;
  padding: 1rem;
`;
export const Image = styled.img`
  width: 5rem;
`;
export const LinkDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const StyledLink = styled(Link)`
  color: grey;
  padding: 1rem;
  text-decoration: none;
  text-transform: uppercase;
`;
