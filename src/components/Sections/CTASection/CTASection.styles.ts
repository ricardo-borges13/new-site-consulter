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
    background: rgba(0, 0, 0, 0.55);
    z-index: 1;
  }

  /* fallback mobile */
  @media (max-width: 768px) {
    background-attachment: scroll;
  }
`;

export const Content = styled.div`
  position: relative;
  z-index: 2;

  text-align: center;
  color: #fff;
  padding: 0 1rem;

  span {
    font-size: 1.5rem;
    letter-spacing: 2px;
    margin-bottom: 1rem;
    display: block;
    color: #94c11f;
    font-weight: 600;
  }

  h2 {
    font-size: clamp(1.8rem, 4vw, 3rem);
    max-width: 900px;
    margin-bottom: 2rem;
    font-weight: 550;
  }
`;

export const Button = styled.button`
  background-color: #2e7d32;
  color: #fff;
  border: none;
  padding: 0.9rem 2rem;
  font-size: 1.2rem;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #1b5e20;
    transform: translateY(-2px);
  }
`;
