import styled from 'styled-components';

export const ContainerMap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto ${({theme}) => theme.spacing.large} auto; 
  max-width: ${({theme}) => theme.breakpoints.desktop};
  width: 100%;
  padding: 0 ${({theme}) => theme.spacing.medium};
  caret-color: transparent;
  header {
    margin-bottom: ${({theme}) => theme.spacing.large};

    h2 {
      font-size: ${({theme}) => theme.spacing.large}; /
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

    h2::after {
      content: '';
      display: block;
      width: 60px;
      height: 3px;
      background-color: ${({theme}) => theme.colors.primary};
      margin-top: 6px;
    }
  }
`;

export const MapLink = styled.div`
  margin-top: 0.8rem;
  display: inline-flex;
  align-items: center;
  font-weight: 500;
  color: ${({theme}) => theme.colors.success};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
