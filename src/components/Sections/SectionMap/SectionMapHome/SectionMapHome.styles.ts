import styled from 'styled-components';

export const Wrapper = styled.section`
  background: ${({ theme }) => theme.colors.background.light};
  width: 100%;
  padding: ${({ theme }) => theme.spacing.large}
    ${({ theme }) => theme.spacing.medium};
  margin: ${({ theme }) => theme.spacing.large} auto;
  font-family: ${({ theme }) => theme.fonts.body};
  line-height: 1.6;
  caret-color: transparent;
`;

export const Container = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.desktop};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  header {
    max-width: 700px;
    margin-bottom: ${({ theme }) => theme.spacing.large};

    h2 {
      font-size: ${({ theme }) => theme.spacing.large};
      font-weight: 700;
      color: ${({ theme }) => theme.colors.success};
      margin-bottom: 0.8rem;
      position: relative;
    }

    h2::after {
      content: '';
      display: block;
      width: 60px;
      height: 3px;
      background-color: ${({ theme }) => theme.colors.primary};
      margin: 8px auto 0 auto;
    }

    p {
      font-size: ${({ theme }) => theme.spacing.medium};
      color: ${({ theme }) => theme.hexToRgba(theme.colors.black, 0.8)};
      line-height: 1.6;
    }
  }

  .map-link {
    margin-top: 0.8rem;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.success};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.midMobile}) {
    header h2 {
      font-size: 1.6rem;
    }
  }
`;
