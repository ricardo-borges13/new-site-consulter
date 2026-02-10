import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-top: 100px;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallScreenMobile}) {
    padding-top: 180px;
  }
`;
