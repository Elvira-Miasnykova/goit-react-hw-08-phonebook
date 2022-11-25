import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 15px 15px;

  @media screen and (max-width: 480px) {
   max-width: 360px;
  }
  @media screen and (max-width: 780px) {
   max-width: 680px;
  }
`;
