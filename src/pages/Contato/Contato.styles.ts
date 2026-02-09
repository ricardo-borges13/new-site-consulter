import styled from 'styled-components';

export const Container = styled.div`
  max-width: ${({theme}) => theme.breakpoints.desktop};
  margin: ${({theme}) => theme.spacing.large} auto;
  padding: 0 ${({theme}) => theme.spacing.medium};
  font-family: ${({theme}) => theme.fonts.body};
  line-height: 1.6;
  color: ${({theme}) => theme.hexToRgba(theme.colors.black, 0.86)};
  caret-color: transparent;

  header {
    margin-bottom: ${({theme}) => theme.spacing.large};

    h2 {
      font-size: ${({theme}) => theme.spacing.large};
      font-weight: 700;
      color: ${({theme}) => theme.colors.success};
      margin-bottom: ${({theme}) => theme.spacing.medium};
      text-transform: capitalize;
    }

    p {
      font-size: ${({theme}) => theme.spacing.medium};
      color: ${({theme}) => theme.hexToRgba(theme.colors.black, 0.8)};
      line-height: 1.6;
      text-align: justify;
      margin-bottom: 1.5rem;
    }
  }

h2::after {
  content: '';
  display: block;
  width: 60px;
  height: 3px;
  background-color: ${({theme}) => theme.colors.primary};
  margin-top: 6px;
}

  @media (max-width: ${({theme}) => theme.breakpoints.tabletMedium}) {
    padding: 0 ${({theme}) => theme.spacing.medium};

    header h2 {
      font-size: 1.6rem;
    }

    section h2 {
      font-size: 1.2rem;
    }
  }
`;

export const Form = styled.div`
  margin: ${({theme}) => theme.spacing.large} auto 6rem auto;
  max-width: ${({theme}) => theme.breakpoints.desktop};
`;

export const Divider = styled.hr`
  border: none;
  height: 4px;
  background: linear-gradient(to right, transparent, ${({theme}) => theme.colors.primary}, transparent);
  margin: ${({theme}) => theme.spacing.large} auto;
  width: 80%;
  border-radius: 2px;
`;
