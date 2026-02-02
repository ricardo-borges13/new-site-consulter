import styled from 'styled-components';

export const HeroWrapper = styled.section<{ $image: string }>`
  position: relative;
  width: 100%;
  height: clamp(340px, 60vh, 500px);

  background-image: url(${({ $image }) => $image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  align-items: center;
  padding-top: clamp(120px, 12vh, 160px);
  caret-color: transparent;
  overflow: hidden;
`;

/* Overlay claro à esquerda */
export const LightOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.9) 0%,
    rgba(255, 255, 255, 0.75) 35%,
    rgba(255, 255, 255, 0.3) 55%,
    rgba(0, 0, 0, 0) 70%
  );
  z-index: 1;
`;

/* Faixa verde inferior */
export const BottomShape = styled.div`
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 40px;
  background-color: #94c11f;

  clip-path: polygon(
    0 40%,
    20% 55%,
    45% 45%,
    70% 60%,
    100% 50%,
    100% 100%,
    0 100%
  );

  z-index: 3;
`;

/* Conteúdo do hero */
export const Content = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1100px;
  padding: 0 20px;
  margin-left: 6%;
  color: #222;

  transform: translateY(-60px); /* 👈 sobe o conteúdo */

  h1 {
    font-size: clamp(2rem, 3.2vw, 3rem);
    font-weight: 700;
    margin-bottom: 0.8rem;
    text-transform: uppercase;
  }

  p {
    font-size: 1rem;
    max-width: 520px;
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    text-align: center;
  }
`;

/* Conteúdo abaixo do hero */
export const ChildrenContent = styled.div`
  max-width: 1100px;
  margin: 60px auto;
  padding: 0 20px;
  line-height: 1.6;
`;
