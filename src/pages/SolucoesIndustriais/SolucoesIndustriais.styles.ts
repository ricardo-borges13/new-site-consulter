import styled from 'styled-components';

export const Container = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px 80px;
  font-family: 'Poppins', sans-serif;
  color: #222;
  line-height: 1.6;
  caret-color: transparent;
`;

export const Intro = styled.div`
  margin-bottom: 3rem;

  p {
    font-size: 1rem;
    color: #333;
    margin-bottom: 1.5rem;
    text-align: justify;
  }

  strong {
    font-weight: 600;
    color: #1e7f4f;
  }
`;

export const Highlight = styled.div`
  background: #eef5ea;
  border-left: 5px solid #94c11f;
  padding: 1.5rem 2rem;
  border-radius: 8px;
  margin-bottom: 4rem;

  p {
    margin: 0;
    font-size: 1rem;
    color: #333;
  }
`;

export const CTA = styled.div`
  text-align: center;
  padding: 3rem 2rem;
  background: linear-gradient(135deg, #1e7f4f, #2c8f5c);
  border-radius: 16px;
  color: #fff;

  h3 {
    font-size: 1.6rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    max-width: 600px;
    margin: 0 auto 2rem;
    line-height: 1.5;
  }
`;

export const Button = styled.button`
  background-color: #94c11f;
  color: #1f1f1f;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 30px;
  padding: 0.9rem 2.2rem;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    background-color: #a7d12a;
    transform: translateY(-2px);
  }
`;
