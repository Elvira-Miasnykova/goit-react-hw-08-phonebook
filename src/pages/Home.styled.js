import styled from '@emotion/styled';

export const Container = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 margin-bottom: 16px;
 margin-right: 5px;
 min-height: calc(100vh - 50px);
    
 `;

export const Title = styled.h1`
color: ${p => p.theme.colors.black};
font-family: ${p => p.theme.fonts.body};
font-size: ${p => p.theme.fontSizes[7]}px;
margin-bottom: ${p => p.theme.space[6]}px;
font-weight: 500;
text-align: center;

@media screen and (max-width: 480px) {
    font-size: ${p => p.theme.fontSizes[6]}px;
    margin-bottom: 20px;
  }
`;

export const Text = styled.p`
font-size: 28px;

@media screen and (max-width: 480px) {
    font-size: 16px;
}
`;