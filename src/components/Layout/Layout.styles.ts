import styled from 'styled-components'

export const LayoutWrapper = styled.div`
display: flex;
flex-direction: column;
min-height: 100vh;
`

export const MainContent = styled.main`
  flex: 1; /* empurra o footer para baixo. Só funciona se o pai tiver display flex*/
  display: flex;
  flex-direction: column;
  padding-top: 100px;

    @media (max-width: 537px) {
    padding-top: 180px;
  }
`;
