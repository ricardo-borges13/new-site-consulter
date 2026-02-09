import styled from 'styled-components';

export const HeroContainer = styled.section`
  position: relative;
  width: 100%;
  height: clamp(400px, 55vh, 620px);
  overflow: hidden;
  box-shadow: 1px 2px 18px 1px rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  padding: 4rem 2rem;
  caret-color: transparent;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 2rem 1rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
  }

  @media (max-width: 499px) {
    width: 100%;
  }
`;

/* Imagem de fundo real */
export const BackgroundImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`;

/* Overlay escuro */
export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3));
  z-index: 1;
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: ${({ theme }) => theme.breakpoints.desktop};
  margin: 0 auto;
  width: 100%;
  color: ${({ theme }) => theme.colors.white};
`;

export const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1rem;
  max-width: 600px;

  @media (max-width: ${({ theme }) => theme.breakpoints.largeDesktop}) {
    font-size: 2.5rem;
  }

  @media (max-height: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2rem;
  }

  @media (max-width: 429px) {
    font-size: 1.4rem;
  }

  @media (max-width: 414px) {
    font-size: 1.3rem;
  }

  @media (max-width: 344px) {
    font-size: 1.1rem;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  max-width: 500px;
  line-height: 1.5;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1rem;
  }

  @media (max-width: 530px) {
    font-size: 0.9rem;
  }

  @media (max-width: 431px) {
    font-size: 0.8rem;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.medium};
  flex-wrap: wrap;
`;
