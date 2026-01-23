import styled from 'styled-components';

export const Wrapper = styled.section`
 display: flex;
 flex-direction: column;
 background: #eef5ea;
 width: 100%;
  padding: 1.1rem 1.5rem;
  margin: 1rem auto;
  font-family: 'Poppins', sans-serif;
  line-height: 1.6;
  caret-color: transparent;

  header {
    margin-bottom: 2rem;

    h2 {
      font-size: 2rem;
      font-weight: 700;
      color: rgb(26, 26, 26);
      margin-bottom: 1rem;
      text-transform: capitalize;
    }

    span {
      font-size: 1rem;
      color: #333;
      line-height: 1.6;
      text-align: justify;
    }

    @media (max-width: 540px) {
      h2 {
        font-size: 1.4rem;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 0 1rem;

    header h1 {
      font-size: 1.6rem;
    }
  }

  .map-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-weight: 500;
  color: #1a73e8;
}
`;

export const Container = styled.div`
  width: 100%;
  max-width: clamp(320px, 90vw, 1200px);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
