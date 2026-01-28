import styled from 'styled-components';

export const Wrapper = styled.section`
 background: #eef5ea;
 width: 100%;
  padding: 3rem 1.5rem;
  margin: 2rem auto;
  font-family: 'Poppins', sans-serif;
  line-height: 1.6;
  caret-color: transparent;
`;

export const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  header {
    max-width: 700px;
    margin-bottom: 2rem;

    h2 {
      font-size: 2rem;
      font-weight: 700;
      color: #1e7f4f;
      margin-bottom: 0.8rem;
      position: relative;
    }

    h2::after {
      content: '';
      display: block;
      width: 60px;
      height: 3px;
      background-color: #94c11f;
      margin: 8px auto 0 auto;
    }

    p {
      font-size: 1rem;
      color: #333;
      line-height: 1.6;
    }
  }

  .map-link {
    margin-top: 0.8rem;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-weight: 500;
    color: #1e7f4f;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 540px) {
    header h2 {
      font-size: 1.6rem;
    }
  }
`;
