import { Link } from "react-router-dom";
import styled from '@emotion/styled';

export const List = styled.ul`
  padding-left: 0;
  list-style: none;
`;

export const ListItem = styled.li`
  padding: 5px 0;
`;

export const ListLink = styled(Link)`
  text-decoration: none;
  color: black;

  :hover {
    color: #5f5fa8;
  }
`;

