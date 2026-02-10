import styled from 'styled-components';

export const Container = styled.section`
  max-width: ${({ theme }) => theme.breakpoints.desktop};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.medium} 80px;
  font-family: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.hexToRgba(theme.colors.black, 0.86)};
  line-height: 1.6;
  caret-color: transparent;
`;

export const Intro = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.large};

  p {
    font-size: ${({ theme }) => theme.spacing.medium};
    color: ${({ theme }) => theme.hexToRgba(theme.colors.black, 0.8)};
    margin-bottom: 1.5rem;
    text-align: justify;
  }

  strong {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.success};
  }
`;

export const Highlight = styled.div`
  background: ${({ theme }) => theme.colors.background.light};
  border-left: 5px solid ${({ theme }) => theme.colors.primary};
  padding: 1.5rem ${({ theme }) => theme.spacing.large};
  border-radius: 8px;
  margin-bottom: 4rem;

  p {
    margin: 0;
    font-size: ${({ theme }) => theme.spacing.medium};
    color: ${({ theme }) => theme.hexToRgba(theme.colors.black, 0.8)};
  }
`;

export const CTA = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.large}
    ${({ theme }) => theme.spacing.large};
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.success},
    ${({ theme }) => theme.colors.lightSuccess}
  );
  border-radius: 16px;
  color: ${({ theme }) => theme.colors.white};

  h3 {
    font-size: 1.6rem;
    font-weight: 700;
    margin-bottom: ${({ theme }) => theme.spacing.medium};
  }

  p {
    font-size: ${({ theme }) => theme.spacing.medium};
    max-width: 600px;
    margin: 0 auto ${({ theme }) => theme.spacing.large};
  }
`;
