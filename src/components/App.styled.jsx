import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  padding: 20px;
`;

export const NavItem = styled(NavLink)`
  display: inline-block;
  text-align: center;
  width: 70px;
  padding: 5px;
  border-radius: 5px;
  margin-right: 10px;
  text-decoration: none;
  font-size: 20px;
  color: black;

  &.active {
    color: white;
    background-color: orange;
  }
`;

export const Header = styled.header`
  padding-bottom: 20px;
`;