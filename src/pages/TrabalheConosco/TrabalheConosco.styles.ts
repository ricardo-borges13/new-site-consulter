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

    h1 {
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

  section {
    margin-bottom: 2.5rem;
    padding: 1.5rem;
    background: ${({theme}) => theme.colors.background.light};
    border-radius: 8px;

 h2 {
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({theme}) => theme.colors.success};
  margin-bottom: 0.5rem;
}

h2::after {
  content: '';
  display: block;
  width: 60px;
  height: 3px;
  background-color: ${({theme}) => theme.colors.primary};
  margin-top: 6px;
}

    p {
      margin-bottom: 0.8rem;
    }

    ul {
      list-style: disc inside;
      margin-left: ${({theme}) => theme.spacing.medium};

      li {
        margin: 0.4rem 0;
      }
    }

    dl {
      margin-top: ${({theme}) => theme.spacing.medium};

      dt {
        font-weight: 600;
        color: ${({theme}) => theme.colors.black};
        margin-top: 0.6rem;
      }

      dd {
        margin-left: ${({theme}) => theme.spacing.medium};
        color: ${({theme}) => theme.hexToRgba(theme.colors.black, 0.7)};
      }
    }
  }

  @media (max-width: ${({theme}) => theme.breakpoints.tabletMedium}) {
    padding: 0 ${({theme}) => theme.spacing.medium};

    header h1 {
      font-size: 1.6rem;
    }

    section h2 {
      font-size: 1.2rem;
    }
  }
`;
