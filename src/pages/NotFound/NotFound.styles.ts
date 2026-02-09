import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 ${({theme}) => theme.spacing.medium};
  font-family: ${({theme}) => theme.fonts.body};
  animation: ${fadeIn} 0.7s ease-in-out;
`;

export const Icon = styled.div`
  color: ${({theme}) => theme.colors.errorRed};
  width: 5rem; 
  height: 5rem; 
  margin-bottom: ${({theme}) => theme.spacing.medium};
`;

export const Title = styled.h1`
  font-size: 2.25rem; 
  font-weight: 700;
  margin-bottom: ${({theme}) => theme.spacing.medium};
`;

export const Subtitle = styled.h2`
  font-size: 1.5rem; 
  font-weight: 600;
  margin-bottom: ${({theme}) => theme.spacing.medium};
`;

export const Message = styled.p`
  font-size: ${({theme}) => theme.spacing.medium};
  color: ${({theme}) => theme.hexToRgba(theme.colors.black, 0.8)};
  margin-bottom: ${({theme}) => theme.spacing.large};
`;

export const HomeLink = styled.a`
  display: inline-block;
  padding: 0.75rem ${({theme}) => theme.spacing.medium};
  font-size: ${({theme}) => theme.spacing.medium};
  font-weight: 600;
  color: ${({theme}) => theme.colors.white};
  background-color: ${({theme}) => theme.colors.warningYellow};
  border-radius: 0.375rem;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({theme}) => theme.colors.warningYellowDark};
  }
`;
