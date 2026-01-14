import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 4rem;

  @media (max-width: 1210px) {
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

  @media (max-width: 912px) {
    gap: 0.2rem;
  }

  @media (max-width: 794px) {
    align-items: center;
    gap: 0.4rem;
  }


  @media (max-width: 774px) {
    flex-direction: column; /* coloca os itens um abaixo do outro */
    align-items: flex-start; /* alinha à esquerda */
    gap: 1.2rem;
    background-color: #94c11f;
    padding: 20px;
    color: white;
    width: 100%; /* ocupa toda a largura do container */
  }

  @media (max-width: 400px) {
    gap: 1rem;
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
  @media (max-width: 774px) {
    display: block;
    width: 100%;
  }
`;

export const MenuLink = styled(Link)`
  position: relative;
  text-decoration: none;
  color: #f8f8f8ff;
  font-weight: 800;
  transition: color 0.3s;

  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: 0;
    width: 0%;
    height: 4px;
    background-color: #94c11f;
    transition: width 0.3s ease;
    border-radius: 2px;
  }

  &:hover {
    color: #94c11f;
  }

  @media (max-width: 990px) {
    font-weight: 400;
  }

  @media (max-width: 774px) {
    color: #ffffff;
    display: block;
    width: 100%;
    padding: 0.6rem 0;
    font-size: 1rem;

    &:hover {
    color: #0c0c0c;
  }
  }
`;

export const Submenu = styled.ul<{ $isOpen?: boolean }>`
  list-style: none;
  background: #dfdedeff;
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  padding: 0.5rem 0;
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
  @media (max-width: 774px) {
    position: static;
    background: transparent;
    box-shadow: none;
    min-width: unset;
    padding: 0 20px;
    overflow: hidden; /* ← impede que o conteúdo crie vão */
    transition: max-height 0.3s ease;
    max-height: ${({ $isOpen }) =>
      $isOpen ? '500px' : '0'}; /* animação suave */
    opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
    transform: none;
    display: block; /* sempre no fluxo, mas com altura controlada */
  }
`;

export const SubmenuItem = styled.li`
  padding: 0;

  a {
    display: block;
    padding: 0.6rem 1rem;
    color: #333;
    text-decoration: none;
    transition: background-color 0.4s ease;

    &:hover {
      background: #f9f9f9;
      color: #94c11f;
    }

    @media (max-width: 774px) {
      color: #fff;
      background: none;
      padding: 0.4rem 0;

      &:hover {
        background: #f9f9f9;
        color: #2c2a28;
      }
    }
  }
`;
