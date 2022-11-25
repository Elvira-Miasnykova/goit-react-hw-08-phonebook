import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
color: ${p => p.theme.colors.black};
font-family: ${p => p.theme.fonts.body};
font-size: ${p => p.theme.fontSizes[1]}px;
margin-bottom: ${p => p.theme.space[4]}px;
padding: ${p => p.theme.space[3]}px;
border-radius: ${p => p.theme.radii.normal};
font-weight: 500;
text-decoration: none;
cursor: pointer;
transition: color 250ms ease;
  
   &.active {
    color: white;
    background-color: blue;
    transition: background-color 250ms ease;
    
  }
  :hover:not(.active),
  :focus:not(.active) {
    color: black;
    background-color: lightgrey; 
    transition: background-color 250ms ease;
  }
`;

