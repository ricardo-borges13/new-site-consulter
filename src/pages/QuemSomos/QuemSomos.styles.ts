import styled from 'styled-components';

/* CONTAINER PRINCIPAL */
export const Container = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px 60px;
  font-family: 'Poppins', sans-serif;
  color: #222;
  line-height: 1.6;
   caret-color: transparent;

  header {
    margin-bottom: 2rem;

    p {
      font-size: 1rem;
      color: #333;
      line-height: 1.6;
      text-align: justify;
      margin-bottom: 1.5rem;
    }
  }
`;


/* TÍTULO DAS SEÇÕES */
export const SectionTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: 600;
  color: #1e7f4f;
  margin: 3.5rem 0 1.5rem;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 70px;
    height: 3px;
    background-color: #94c11f;
    margin-top: 6px;
  }

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

/* GRID DE CARDS */
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

/* CARD */
export const Card = styled.div`
  background: #f6f8f7;
  padding: 1.8rem;
  border-radius: 12px;
  border-left: 4px solid #94c11f;
  height: 100%;

  h3 {
    font-size: 1.15rem;
    font-weight: 600;
    margin-bottom: 0.6rem;
    color: #1e7f4f;
  }

  p {
    font-size: 0.95rem;
    color: #444;
  }
`;

export const AccordionWrapper = styled.div`
  background: #eff1f0; /* fundo suave */
  border-radius: 12px;
  padding: 1.2rem 1.5rem;
  margin-bottom: 3rem;

  /* Accordion base */
  .accordion {
    border: none;
    background: transparent;
  }

  .accordion-item {
    border: none;
    margin-bottom: 0.8rem;
    border-radius: 8px;
    overflow: hidden;
    background: transparent;
    margin-bottom: 0.6rem;
  }

  /* Header */
  .accordion-button {
    font-weight: 600;
    font-size: 1rem;
    color: #333;
    background-color: #ffff;
    border-radius: 8px;
    padding: 0.9rem 1.2rem;
    box-shadow: none;
  }

  /* Remove ícone padrão azul */
  .accordion-button::after {
    filter: brightness(0.4);
    background-image: none;
    content: '+';
    font-size: 1.2rem;
    font-weight: 700;
    color: #94c11f;
    transform: none;
  }

  /* Header ativo */
  .accordion-button:not(.collapsed) {
    background-color: #eef5ea;
    color: #1e7f4f;
  }

  /* Remove foco azul */
  .accordion-button:focus {
    box-shadow: none;
  }

  /* Body */
  .accordion-body {
    background-color: #ffffff;
    color: #444;
    font-size: 0.95rem;
    line-height: 1.6;
    border-radius: 8px;
    margin-top: 0.3rem;
    padding: 1rem 1.2rem;
  }

  .accordion-button:not(.collapsed)::after {
    content: '–';
  }
`;

