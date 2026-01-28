import styled from 'styled-components';

export const ContainerMap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto 4rem auto;
  max-width: 1100px;
  width: 100%;
  padding: 0 1.5rem;
  header {
    margin-bottom: 2rem;

    h2 {
      font-size: 2rem;
      font-weight: 700;
      color: #1e7f4f;
      margin-bottom: 1rem;
      text-transform: capitalize;
    }

    p {
      font-size: 1rem;
      color: #333;
      line-height: 1.6;
      text-align: justify;
      margin-bottom: 1.5rem;
    }

    h2::after {
      content: '';
      display: block;
      width: 60px;
      height: 3px;
      background-color: #94c11f;
      margin-top: 6px;
    }
  }
`;
export const MapLink = styled.div`
  margin-top: 0.8rem;
  font-weight: 500;
  color: #1e7f4f;
`;

