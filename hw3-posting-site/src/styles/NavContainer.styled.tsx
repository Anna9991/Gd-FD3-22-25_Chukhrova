import styled from "styled-components"
import { Link } from 'react-router';


export const NavStyled = styled('nav')`
  display: flex;
`;


export const LinkStyled = styled(Link)`
    color: #FDF0D5;
    text-decoration: none;
    padding: 5px;
    align-content: center;

    &:hover {
      text-decoration: underline;
      text-underline-position: under;
    }
`;


export const NavPageStyled = styled('nav')`
  display: flex;
  justify-content: center;
`;


export const LinkPageStyled = styled(Link)`
    color: #780000;
    text-decoration: none;
    padding: 5px;
    align-content: center;

    &:hover {
      text-decoration: underline;
      text-underline-position: under;
    }
`;