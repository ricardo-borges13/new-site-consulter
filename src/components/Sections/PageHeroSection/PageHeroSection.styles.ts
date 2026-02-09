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
    ${({theme}) => theme.hexToRgba(theme.colors.white, 0.9)} 0%,
    ${({theme}) => theme.hexToRgba(theme.colors.white, 0.75)} 35%,
    ${({theme}) => theme.hexToRgba(theme.colors.white, 0.3)} 55%,
    ${({theme}) => theme.hexToRgba(theme.colors.black, 0)} 70%
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
  background-color: ${({theme}) => theme.colors.primary};

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
  max-width: ${({theme}) => theme.breakpoints.desktop};
  padding: 0 ${({theme}) => theme.spacing.medium};
  margin-left: 6%;
  color: ${({theme}) => theme.hexToRgba(theme.colors.black, 0.86)};

  transform: translateY(-60px);

  h1 {
    font-size: clamp(2rem, 3.2vw, 3rem);
    font-weight: 700;
    margin-bottom: 0.8rem;
    text-transform: uppercase;
  }

  p {
    font-size: ${({theme}) => theme.spacing.medium};
    max-width: 520px;
    line-height: 1.5;
  }

  @media (max-width: ${({theme}) => theme.breakpoints.tabletMedium}) {
    margin-left: 0;
    text-align: center;
  }
`;

/* Conteúdo abaixo do hero */
export const ChildrenContent = styled.div`
  max-width: ${({theme}) => theme.breakpoints.desktop};
  margin: 60px auto;
  padding: 0 ${({theme}) => theme.spacing.medium};
  line-height: 1.6;
`;
