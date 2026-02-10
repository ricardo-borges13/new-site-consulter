import styled from 'styled-components';
import bgImage from '../../../assets/images/EntreEmContato1.jpg';

export const Section = styled.section`
  position: relative;
  width: 100%;
  height: 50vh;
  min-height: 500px;
  margin-top: 50px;

  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  caret-color: transparent;

  /* 🔥 PARALLAX SIMPLES */
  background-attachment: fixed;

  display: flex;
  align-items: center;
  justify-content: center;

  /* overlay */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: ${({ theme }) => theme.hexToRgba(theme.colors.black, 0.55)};
    z-index: 1;
  }

  /* fallback mobile */
  @media (max-width: ${({ theme }) => theme.breakpoints.tabletMedium}) {
    background-attachment: scroll;
  }
`;

export const Content = styled.div`
  position: relative;
  z-index: 2;

  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  padding: 0 ${({ theme }) => theme.spacing.medium};

  span {
    font-size: 1.5rem;
    letter-spacing: 2px;
    margin-bottom: ${({ theme }) => theme.spacing.medium};
    display: block;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
  }

  h2 {
    font-size: clamp(1.8rem, 4vw, 3rem);
    max-width: 900px;
    margin-bottom: ${({ theme }) => theme.spacing.large};
    font-weight: 550;
  }
`;
