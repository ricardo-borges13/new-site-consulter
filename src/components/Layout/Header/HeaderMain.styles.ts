import styled from 'styled-components';

export const HeaderContainer = styled.header<{ $isScrolled: boolean }>`
  position: fixed;
  top: 34px;
  left: 0;
  width: 100%;
  caret-color: transparent;
  background: #2a2a2a;
  box-shadow: 0 4px 20px rgba(148, 193, 31, 0.15);
  transition: all 0.3s ease;
  z-index: 100; /* mantém o header acima do conteúdo */

  /* muda a altura ao rolar */
  height: ${({ $isScrolled }) => ($isScrolled ? '70px' : '110px')};

  @media (max-width: 1037px) {
    top: 55px;
  }

  @media (max-width: 900px) {
    height: ${({ $isScrolled }) => ($isScrolled ? '100px' : '110px')};
  }

  @media (max-width: 851px) {
    top: 60px;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px; // antes do novo logo 1200
  margin: 0 auto;
  padding: 0.5rem 2rem;
  width: 100%;
  box-sizing: border-box; /* ✅ impede vazamento lateral */

  @media (max-width: 970px) {
    justify-content: space-between;
  }

  @media (max-width: 900px) {
    margin-top: 25px;
  }

  @media (max-width: 775px) {
    margin-top: 35px;
  }

  /* 📱 Ajuste fino para telas muito pequenas */
  @media (max-width: 770px) {
    padding: 0.5rem 6rem; /* ✅ reduz o padding lateral */
  }
`;

export const ContactButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  gap: 10px;
  background: linear-gradient(
    32deg,
    rgb(148, 193, 31) 0%,
    rgba(175, 197, 119, 1) 100%
  ) !important;
  color: #fffdfd;
  font-weight: 600;
  padding: 0.4rem 1.4rem;
  min-width: 120px;
  border-radius: 3px;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: #f4c27b;
    color: #121212;
  }

  .arrow {
    transform: translateX(2px); /* empurra levemente a seta à direita */
    transition: transform 0.2s ease;
  }

  &:hover .arrow {
    transform: translateX(6px); /* anima a seta ao passar o mouse */
  }

  &:hover {
    opacity: 0.9;
  }

  /* 📱 Ajuste para celular */
  @media (max-width: 550px) {
    display: none;
  }
`;

export const Image = styled.img<{ $isScrolled: boolean }>`
  height: ${({ $isScrolled }) => ($isScrolled ? '60px' : '100px')};
  max-height: 100px;
  width: auto;
  margin-right: 40px;
  transition: height 0.3s ease;

  @media (max-width: 900px) {
    height: ${({ $isScrolled }) => ($isScrolled ? '45px' : '60px')};
  }
`;

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 54px; /* <-- controle fino da distância entre menu e botão */

  @media (max-width: 1053px) {
    gap: 2rem;
  }

  /* 📱 Versão mobile */
  @media (max-width: 550px) {
    display: flex;
    flex-direction: column; /* ✅ botão vai pra baixo do menu */
    align-items: center; /* mantém o botão alinhado à direita */
    width: 100%;
  }
`;

export const MenuToggle = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 2rem;
  color: #eceff1;
  cursor: pointer;

  @media (max-width: 1038px) {
    display: block;
  }
  //documentado
`;

/* 🔹 Container do menu e botão */
export const MenuContainer = styled.div<{ $open: boolean }>`
  display: flex;
  align-items: center;
  gap: 54px;
  // Documentado
  @media (max-width: 1038px) {
    position: absolute;
    top: 100%;
    right: 0;
    background: #fff;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    padding: 1rem 0;
    gap: 1rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    transform: ${({ $open }) =>
      $open ? 'translateY(0)' : 'translateY(-150%)'};
    opacity: ${({ $open }) => ($open ? 1 : 0)};
    pointer-events: ${({ $open }) => ($open ? 'auto' : 'none')};
  }
`;
