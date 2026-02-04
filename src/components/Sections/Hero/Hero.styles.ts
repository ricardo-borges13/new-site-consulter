import styled from 'styled-components';
import heroBg from '../../../assets/images/BannerPrincipal-Consulter.jpg'; // ajuste o caminho

export const HeroContainer = styled.section`
  width: 100%;
  height: clamp(400px, 55vh, 620px);
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.7),
    rgba(0, 0, 0, 0.3)
  ), url(${heroBg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 1px 2px 18px 1px #080808;
  display: flex;
  align-items: center;
  padding: 4rem 2rem;
   caret-color: transparent;

  @media (max-width: 768px) {
    padding: 2rem 1rem;

  }

   @media (max-width: 550px) {
    width: 110%;
  }
`;

export const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  color: #fff;
`;

export const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1rem;
  max-width: 600px;

   @media (max-width: 1253px) {
    font-size: 2.5rem;
  }

  @media (max-height: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 540px) {
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

  @media (max-width: 768px) {
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
  gap: 1rem;
  flex-wrap: wrap;
`;

export const PrimaryButton = styled.button`
  background-color: #8bc34a;
  color: #fff;
  padding: 1rem 2rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #7cb342;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const SecondaryButton = styled.button`
  background-color: transparent;
  color: #fff;
  padding: 1rem 2rem;
  border: 2px solid #fff;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;
