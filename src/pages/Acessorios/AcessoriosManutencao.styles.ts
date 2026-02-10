import styled from 'styled-components';

export const Container = styled.section`
  max-width: ${({ theme }) => theme.breakpoints.desktop};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.large} 30px;
  caret-color: transparent;

  header {
    p {
      font-size: ${({ theme }) => theme.spacing.medium};
      color: ${({ theme }) => theme.hexToRgba(theme.colors.black, 0.8)};
      line-height: 1.6; /* Not in theme */
      text-align: justify;
      margin-bottom: ${({ theme }) => theme.spacing.medium};
    }

    strong {
      font-weight: 600;
      color: ${({ theme }) => theme.colors.success};
    }
  }
`;

export const ContainerProduct = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 450px));
  justify-content: center;
  gap: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;
