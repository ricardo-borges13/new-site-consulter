import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  background-color: ${({theme}) => theme.colors.lightGray}; 
  outline: 3px solid ${({theme}) => theme.colors.primary};
  outline-offset: -3px;
  padding: ${({theme}) => theme.spacing.medium};
  display: flex;
  justify-content: center;
`;

export const MapWrapper = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 10px ${({theme}) => theme.hexToRgba(theme.colors.black, 0.3)};

  iframe {
    width: 100%;
    height: 100%;
  }

  @media (max-width: ${({theme}) => theme.breakpoints.tabletMedium}) {
    height: 300px;
  }
`;
