import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  padding: 5rem 8%;
  background: #eef5ea;
  caret-color: transparent;
  max-width: 1500px;
  margin: 1.3rem auto;
  border-radius: 20px;
  box-shadow: 10px 10px 8px 1px #999;
  @media (max-width: 1253px) {
    padding: 3rem 6%;
  }
`;

export const TextArea = styled.div`
  flex: 1;
  max-width: 550px;

  h2 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 20px;
    color: #111;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    color: #333;
    margin-bottom: 30px;
  }
`;

export const ImagesArea = styled.div`
  display: flex;
  gap: 30px;

  img {
    height: 450px;
    object-fit: cover;
    border-radius: 20px;
    aspect-ratio: 16 / 9; /* ← Mantém proporção automática */
    width: 100%;
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;

    &:hover {
      transform: scale(1.03);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    }
  }

  img:first-child {
    max-width: 340px;
  }

  @media (max-width: 1253px) {
    max-width: 600px;

    img {
      width: clamp(260px, 30vw, 300px);
      height: clamp(360px, 40vw, 400px);
    }

    @media (max-width: 650px) {
      img:first-child {
        display: none;
      }
    }
  }

  img:last-child {
    width: clamp(220px, 25vw, 260px);
  }

  @media (max-width: 1000px) {
    img:last-child {
      display: none;
    }
  }
`;
