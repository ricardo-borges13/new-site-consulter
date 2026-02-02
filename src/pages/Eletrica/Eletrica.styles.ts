import styled from 'styled-components'

export const Container = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px 30px;

  header {

    p {
      font-size: 1rem;
      color: #333;
      line-height: 1.6;
      text-align: justify;
      margin-bottom: 1rem;
    }

    strong {
    font-weight: 600;
    color: #1e7f4f;
  }
  }
`

export const ContainerProduct = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  justify-content: center;
  gap: 32px;


  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

