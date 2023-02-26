import styled from '@emotion/styled';
import { HiArrowLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 0;
  color: black;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;

  :hover {
    color: #5f5fa8;
  }
`;

export const BackLinkButton = ({ to, children }) => {
  return (
    <BackLink to={to}>
      <HiArrowLeft size="20" />
      {children}
    </BackLink>
  );
};

export const Image = styled.img`
  width: 400px;
  height: auto;
`

export const ContentConteiner = styled.div`
  display: flex;
  gap: 20px;
  border-bottom: 1px solid black;
`;


export const AdditionalLink = styled(Link)`
  text-decoration: none;
  color: black;
  margin-right: 10px;
  font-weight: 500;

  :hover {
    color: #5f5fa8;
  }
`;

export const AditionalContainer = styled.div`
  border-bottom: 1px solid black;
`;
