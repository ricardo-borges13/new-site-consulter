import styled from 'styled-components';

export const Container = styled.a`
  position: fixed;
  bottom: 24px;
  right: 24px;
  background-color: ${({ theme }) => theme.colors.whatsappGreen};
  color: ${({ theme }) => theme.colors.white};
  font-size: 2.2rem;
  border-radius: 50%;
  padding: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px
    ${({ theme }) => theme.hexToRgba(theme.colors.black, 0.25)};
  z-index: 999;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.whatsappGreenDark};
    transform: scale(1.05);
  }

  svg {
    width: 28px;
    height: 28px;
  }
`;
