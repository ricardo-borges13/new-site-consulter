import styled from 'styled-components';

// Configuração de responsividade
export const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 5 },
  tablet: { breakpoint: { max: 1024, min: 768 }, items: 3 },
  mobile: { breakpoint: { max: 768, min: 0 }, items: 2 },
};

// Styled Components
export const CarouselContainer = styled.div`
  caret-color: transparent;
  width: 100%;
  background-color: #f7f7f7f7;
  padding: 2rem 0;
  position: relative;
  .react-multi-carousel-list {
    width: 100%;
  }
`;

export const Card = styled.div`
  background: white;
  border-radius: 1.2rem;
  box-shadow: 0px 4px 10px rgba(131, 18, 18, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  margin: 0.5rem;
  transition: transform 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0px 6px 14px rgba(0, 0, 0, 0.1);
  }

  img {
    max-height: 60px;
    max-width: 90%;
    object-fit: contain;
  }
`;

export const ArrowButton = styled.button<{ $side: 'left' | 'right' }>`
  background: none;
  border: none;
  color: #333;
  font-size: 2rem;
  cursor: pointer;
  position: absolute !important;
  top: 50%;
  ${({ $side }) => ($side === 'left' ? 'left: 0;' : 'right: 0;')}
  transform: translateY(-50%);
  z-index: 10;
  padding: 0.5rem;
  transition: all 0.2s ease;

  &:hover {
    color: #000;
    transform: translateY(-50%) scale(1.1);
  }
`;
