import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.technicalGreen} 0%,
    ${({ theme }) => theme.colors.technicalGreenDark} 100%
  );
  padding: ${({ theme }) => theme.spacing.large}
    ${({ theme }) => theme.spacing.medium};
`;

export const Container = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.desktop};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  color: ${({ theme }) => theme.colors.white};
`;

export const Header = styled.header`
  text-align: center;
  caret-color: transparent;

  h2 {
    font-size: 2.2rem;
    margin-bottom: 0.8rem;
  }

  p {
    max-width: 720px;
    margin: 0 auto;
    font-size: ${({ theme }) => theme.spacing.medium};
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const Divider = styled.hr`
  border: none;
  height: 4px;
  background: linear-gradient(
    to right,
    transparent,
    ${({ theme }) => theme.colors.technicalGreenDark},
    transparent
  );
  margin: ${({ theme }) => theme.spacing.large} auto;
  width: 80%;
  border-radius: 2px;
`;
