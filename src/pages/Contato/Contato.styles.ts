import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1100px;
  margin: 3rem auto;
  padding: 0 1.5rem;
  font-family: 'Poppins', sans-serif;
  line-height: 1.6;
  color: #222;
  caret-color: transparent;

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
  }

h2::after {
  content: '';
  display: block;
  width: 60px;
  height: 3px;
  background-color: #94c11f;
  margin-top: 6px;
}

  @media (max-width: 768px) {
    padding: 0 1rem;

    header h2 {
      font-size: 1.6rem;
    }

    section h2 {
      font-size: 1.2rem;
    }
  }
`;

export const Form = styled.div`
  margin: 3rem auto 6rem auto;
  max-width: 1100px;
`;

export const Divider = styled.hr`
  border: none;
  height: 4px;
  background: linear-gradient(to right, transparent, #94c11f, transparent);
  margin: 4rem auto;
  width: 80%;
  border-radius: 2px;
`;
