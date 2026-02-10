import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.large};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    gap: 1.9rem;
  }

  @media (max-width: 1112px) {
    gap: 1.8rem;
  }

  @media (max-width: 1074px) {
    gap: 1.6rem;
  }

  @media (max-width: 1020px) {
    gap: 1.3rem;
  }

  @media (max-width: 1002px) {
    gap: 0.9rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 0.2rem;
  }

  @media (max-width: 794px) {
    align-items: center;
    gap: 0.4rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDesktop}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.2rem;
    background-color: ${({ theme }) => theme.colors.primary};
    padding: ${({ theme }) => theme.spacing.medium}
      ${({ theme }) => theme.spacing.medium};
    color: ${({ theme }) => theme.colors.white};
    width: 100%;
  }

  @media (max-width: 400px) {
    gap: ${({ theme }) => theme.spacing.medium};
  }

  @media (max-width: 350px) {
    gap: 0.9rem;
  }
`;

export const MenuItem = styled.div`
  position: relative;
  display: inline-block;

  &:hover ul {
    display: block;
  }

  &:hover > a::before {
    width: 100%;
  }

  /* Ajuste para mobile */
  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDesktop}) {
    display: block;
    width: 100%;
  }
`;

export const MenuLink = styled(Link)`
  position: relative;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};

  font-weight: 800;
  transition: color 0.3s;

  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: 0;
    width: 0%;
    height: 4px;
    background-color: ${({ theme }) => theme.colors.primary};
    transition: width 0.3s ease;
    border-radius: 2px;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 990px) {
    font-weight: 400;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDesktop}) {
    color: ${({ theme }) => theme.colors.white};
    display: block;
    width: 100%;
    padding: 0.6rem 0;
    font-size: 1rem;

    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

export const Submenu = styled.ul<{ $isOpen?: boolean }>`
  list-style: none;
  background: ${({ theme }) => theme.hexToRgba(theme.colors.white, 0.9)};
  border-radius: 8px;
  box-shadow: 0 8px 16px
    ${({ theme }) => theme.hexToRgba(theme.colors.black, 0.15)};
  padding: ${({ theme }) => theme.spacing.small} 0;
  min-width: 220px;
  z-index: 1000;
  position: absolute;
  top: 100%;
  left: 0;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  transform: ${({ $isOpen }) =>
    $isOpen ? 'translateY(0)' : 'translateY(-10px)'};
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
  pointer-events: ${({ $isOpen }) => ($isOpen ? 'auto' : 'none')};
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};

  /* --- MODO MOBILE --- */
  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDesktop}) {
    position: static;
    background: transparent;
    box-shadow: none;
    min-width: unset;
    padding: 0 20px;
    overflow: hidden;
    transition: max-height 0.3s ease;
    max-height: ${({ $isOpen }) => ($isOpen ? '500px' : '0')};
    opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
    transform: none;
    display: block;
  }
`;

export const SubmenuItem = styled.li`
  padding: 0;

  a {
    display: block;
    padding: 0.6rem 1rem;
    color: ${({ theme }) => theme.hexToRgba(theme.colors.black, 0.8)};
    text-decoration: none;
    transition: background-color 0.4s ease;

    &:hover {
      background: ${({ theme }) => theme.colors.lightGray};
      color: ${({ theme }) => theme.colors.primary};
    }

    @media (max-width: 774px) {
      color: ${({ theme }) => theme.colors.white};
      background: none;
      padding: 0.4rem 0;

      &:hover {
        background: ${({ theme }) => theme.colors.lightGray};
        color: ${({ theme }) => theme.colors.secondary};
      }
    }
  }
`;
