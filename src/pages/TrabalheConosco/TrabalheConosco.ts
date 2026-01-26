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

    h1 {
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

  section {
    margin-bottom: 2.5rem;
    padding: 1.5rem;
    background: #edf5f1;
    border-radius: 8px;

 h2 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1e7f4f;
  margin-bottom: 0.5rem;
}

h2::after {
  content: '';
  display: block;
  width: 60px;
  height: 3px;
  background-color: #94c11f;
  margin-top: 6px;
}

    p {
      margin-bottom: 0.8rem;
    }

    ul {
      list-style: disc inside;
      margin-left: 1rem;

      li {
        margin: 0.4rem 0;
      }
    }

    dl {
      margin-top: 1rem;

      dt {
        font-weight: 600;
        color: #000;
        margin-top: 0.6rem;
      }

      dd {
        margin-left: 1rem;
        color: #444;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 0 1rem;

    header h1 {
      font-size: 1.6rem;
    }

    section h2 {
      font-size: 1.2rem;
    }
  }
`;
