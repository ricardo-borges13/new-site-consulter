import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  /* min-height: 220px; */
  background: #ffff;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.55);

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.03);
    filter: brightness(1.1);
  }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

   h3 {
    font-size: 1.4rem;
    margin-left: 0.75rem;
  }

  p {
    flex: 1;
    margin: 0.25rem 0;
    color: #555;
    line-height: 1.5;

    display: -webkit-box;
    -webkit-line-clamp: 3;   /* 👈 LIMITE DE LINHAS */
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

export const IconTitle = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 32px;
    height: 32px;
  }
`;

export const Footer = styled.div`
  margin-top: auto;
  display: flex;
  align-items:center;
  justify-content: space-between;
`;

export const LinkButton = styled.button`
  background: none;
  border: none;
  color: #7dbb3a;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const ActionButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: none;
  background: #7dbb3a;
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;
`;

export const ImageArea = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  width: 120px;             /* 👈 espaço reservado */
  flex-shrink: 0;

  img {
    max-width: 100%;
    max-height: 140px;
    object-fit: contain;
  }

    @media (max-width: 390px) {
    > * {
      width: 97%;

    }
  }
   @media (max-width: 375px) {
    > * {
      width: 93%;
    }
  }

  @media (max-width: 360px) {
    > * {
      width: 89%;
    }
  }

   @media (max-width: 344px) {
    > * {
      width: 80%;
    }
  }
`;
