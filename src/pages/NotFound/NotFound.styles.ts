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
  padding: 0 1.5rem;
  font-family: 'Poppins', sans-serif;
  animation: ${fadeIn} 0.7s ease-in-out;
`;

export const Icon = styled.div`
  color: #ef4444;
  width: 5rem;
  height: 5rem;
  margin-bottom: 1rem;
`;

export const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const Subtitle = styled.h2`
  font-size: 1.5rem; 
  font-weight: 600;
  margin-bottom: 1rem;
`;

export const Message = styled.p`
  font-size: 1rem;
  color: #333;
  margin-bottom: 2rem;
`;

export const HomeLink = styled.a`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  background-color: #d49b09;
  border-radius: 0.375rem;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #b8860b;
  }
`;
