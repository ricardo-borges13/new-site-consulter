import styled from 'styled-components';

export const HeaderContainer = styled.header<{ $isScrolled: boolean }>`
  position: fixed;
  top: 34px;
  left: 0;
  width: 100%;
  caret-color: transparent;
  background: ${({ theme }) => theme.colors.secondary};
  box-shadow: 0 4px 20px
    ${({ theme }) => theme.hexToRgba(theme.colors.primary, 0.15)};
  transition: all 0.3s ease;
  z-index: 100;

  height: ${({ $isScrolled }) => ($isScrolled ? '70px' : '110px')};

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDesktop}) {
    top: 55px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
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
  max-width: ${({ theme }) => theme.breakpoints.largeDesktop};
  margin: 0 auto;
 padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.large};
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 970px) {
    justify-content: space-between;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: 25px;
  }

  @media (max-width: 775px) {
    margin-top: 35px;
  }

  @media (max-width: 770px) {
    padding: ${({ theme }) => theme.spacing.small} 6rem;
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
    ${({ theme }) => theme.colors.primary} 0%,
    ${({ theme }) => theme.hexToRgba(theme.colors.primary, 0.7)} 100%
  ) !important;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  padding: 0.4rem 1.4rem;
  min-width: 120px;
  border-radius: 3px;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) =>
      theme.colors.primaryDark};
    color: ${({ theme }) =>
      theme.colors.darkGray};
  }

  .arrow {
    transform: translateX(2px);
    transition: transform 0.2s ease;
  }

  &:hover .arrow {
    transform: translateX(6px);
  }

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    display: none;
  }
`;

export const Image = styled.img<{ $isScrolled: boolean }>`
  height: ${({ $isScrolled }) => ($isScrolled ? '60px' : '100px')};
  max-height: 100px;
  width: auto;
  margin-right: 40px;
  transition: height 0.3s ease;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: ${({ $isScrolled }) => ($isScrolled ? '45px' : '60px')};
  }
`;

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 54px;

  @media (max-width: 1053px) {
    gap: ${({ theme }) => theme.spacing.large};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

export const MenuToggle = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.white}; 
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDesktop}) {
    display: block;
  }
`;

export const MenuContainer = styled.div<{ $open: boolean }>`
  display: flex;
  align-items: center;
  gap: 54px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDesktop}) {
    position: absolute;
    top: 100%;
    right: 0;
    background: ${({ theme }) => theme.colors.white};
    flex-direction: column;
    align-items: center;
    width: 100vw;
    padding: ${({ theme }) => theme.spacing.medium} 0;
    gap: ${({ theme }) => theme.spacing.medium};
    box-shadow: 0 4px 10px
      ${({ theme }) => theme.hexToRgba(theme.colors.black, 0.1)};
    transition: all 0.3s ease;
    transform: ${({ $open }) =>
      $open ? 'translateY(0)' : 'translateY(-150%)'};
    opacity: ${({ $open }) => ($open ? 1 : 0)};
    pointer-events: ${({ $open }) => ($open ? 'auto' : 'none')};
  }
`;
