import styled from 'styled-components';

export const wrapper = styled.div`
  caret-color: transparent;
  width: 80%;
  max-width: 1350px;
  margin: 0 auto;
  padding: 20px 20px;

  h2 {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
  }

  /* Quando chegar no mobile, ocupar toda a largura */
  @media (max-width: 1031px) {
    width: 100%;
    max-width: 100%;
    padding: 0 10px;
  }
`;

export const ImagesArea = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 40px;


  @media (max-width: 961px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 540px) {
    justify-items: stretch; /* faz as imagens ocuparem toda a largura */

    > * {
      width: 100%; /* garante que cada card use toda a largura */
    }
  }
`;
