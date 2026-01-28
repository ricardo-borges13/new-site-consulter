import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 1.5rem;
  font-family: 'Poppins', sans-serif;

  header {
    margin-bottom: 2rem;

    h1 {
      font-size: 2rem;
      font-weight: 700;
      color: #d49b09;
      margin-bottom: 1rem;
      text-transform: capitalize;
    }

    p {
      font-size: 1rem;
      color: #333;
    }
  }

  @media (max-width: 768px) {
    padding: 0 1rem;

    header h1 {
      font-size: 1.6rem;
    }
  }
`;

export const Form = styled.div`
  margin-bottom: 6rem;
`;
