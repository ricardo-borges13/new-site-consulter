import styled from 'styled-components';

export const SectionWrapper = styled.section`
  width: 100%;
  max-width: clamp(320px, 90vw, ${({ theme }) => theme.breakpoints.desktop});
  margin: 0 auto;
  padding: 50px ${({ theme }) => theme.spacing.medium} 0
    ${({ theme }) => theme.spacing.medium};
  caret-color: transparent;

  h2 {
    text-align: center;
    margin-bottom: ${({ theme }) => theme.spacing.large};
  }
`;
