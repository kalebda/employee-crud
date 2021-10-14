import styled from 'styled-components';

export const Wrapper = styled.div`
   display: flex;
   background-color:${({theme})=>theme.background.default};
    font-family: Roboto, Helvetica Neue, Arial, sans-serif;
`;
export const Main = styled.div`
      width: 100%;
      padding: 24px;
      margin-top: 56px;
`