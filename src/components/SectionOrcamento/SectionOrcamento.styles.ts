import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  background: linear-gradient(
    180deg,
    #1e7f4f 0%,
    #16613c 100%
  ); /* verde mais técnico */
  padding: 2rem 1rem;
`;

export const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  color: #fff;
`;

export const Header = styled.header`
  text-align: center;

  h2 {
    font-size: 2.2rem;
    margin-bottom: 0.8rem;
  }

  p {
    max-width: 720px;
    margin: 0 auto;
    font-size: 1rem;
    line-height: 1.6;
    color: #eaf3ee;
  }
`;

export const Divider = styled.hr`
  border: none;
  height: 4px;
  background: linear-gradient(to right, transparent, #16613c, transparent);
  margin: 4rem auto;
  width: 80%;
  border-radius: 2px;
`;
