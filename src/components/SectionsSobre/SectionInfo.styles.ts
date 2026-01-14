import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  padding: 60px 8%;
  background: #f9f9f9;
  border-radius: 20px;
  caret-color: transparent;

  @media (max-width: 960px) {
    flex-direction: column;
    text-align: center;
    padding: 6px 8%;
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
    height: 370px;
    object-fit: cover;
    border-radius: 20px;
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
    max-width: 220px;
  }

  img:last-child {
    max-width: 380px;
  }

  @media (max-width: 1050px) {
    img {
      display: none;
    }
  }
`;
