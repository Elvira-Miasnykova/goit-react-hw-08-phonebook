import styled from '@emotion/styled';

export const Wraper = styled.div`
display: flex;
align-items: center;
gap: 12px;
`;
  
export const Name = styled.p`
font-weight: 700;
`;

export const Button = styled.button`
color: ${p => p.theme.colors.black};
font-family: ${p => p.theme.fonts.body};
font-size: ${p => p.theme.fontSizes[1]}px;
//margin-bottom: ${p => p.theme.space[4]}px;
padding: ${p => p.theme.space[3]}px;
border: ${p => p.theme.borders.none};
border-radius: ${p => p.theme.radii.normal};
font-weight: 500;
background-color: white; 
transition: background-color 250ms ease;
cursor: pointer;

&:hover,
:focus{
  color: white;
  background-color: blue;
}
`;


