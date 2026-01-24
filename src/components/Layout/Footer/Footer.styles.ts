import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #0f0f0f;
  color: #fff;
  font-family: 'Poppins', sans-serif;
  caret-color: transparent;
`;

export const FooterTop = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1.5rem;

  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

export const Brand = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  img {
    width: 180px;
  }

  p {
    font-size: 0.95rem;
    color: #ccc;
    max-width: 320px;
  }

  @media (max-width: 900px) {
    align-items: center;

    p {
      max-width: none;
    }
  }
`;

export const LinksArea = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const Block = styled.div`
  h4 {
    font-size: 1rem;
    font-weight: 600;
    color: #94c11f;
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 0.5rem;

      a {
        color: #fff;
        text-decoration: none;
        font-size: 0.9rem;

        &:hover {
          color: #94c11f;
        }
      }
    }
  }

  address {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-style: normal;
    font-size: 0.9rem;

    span {
      display: flex;
      align-items: center;
      gap: 6px;
    }

    a {
      color: inherit;
      text-decoration: none;

      &:hover {
        color: #94c11f;
      }
    }

    svg {
      font-size: 1.1rem;
      color: #94c11f;
    }
  }
`;

export const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1rem 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 0.8rem;
  color: #aaa;

  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }
`;


