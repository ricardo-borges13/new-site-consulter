import styled from 'styled-components';

/* CONTAINER PRINCIPAL */
export const Container = styled.section`
  max-width: ${({ theme }) => theme.breakpoints.desktop};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.medium} 60px;
  font-family: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.hexToRgba(theme.colors.black, 0.86)};
  line-height: 1.6;
  caret-color: transparent;

  header {
    margin-bottom: ${({ theme }) => theme.spacing.large};

    p {
      font-size: ${({ theme }) => theme.spacing.medium};
      color: ${({ theme }) => theme.hexToRgba(theme.colors.black, 0.8)};
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
  color: ${({ theme }) => theme.colors.success};
  margin: 3.5rem 0 1.5rem;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 70px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.primary};
    margin-top: 6px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletMedium}) {
    font-size: 1.4rem;
  }
`;

/* GRID DE CARDS */
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.large};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

/* CARD */
export const Card = styled.div`
  background: ${({ theme }) => theme.hexToRgba(theme.colors.lightGray, 0.9)};
  padding: 1.8rem;
  border-radius: 12px;
  border-left: 4px solid ${({ theme }) => theme.colors.primary};
  height: 100%;

  h3 {
    font-size: 1.15rem;
    font-weight: 600;
    margin-bottom: 0.6rem;
    color: ${({ theme }) => theme.colors.success};
  }

  p {
    font-size: 0.95rem;
    color: ${({ theme }) => theme.hexToRgba(theme.colors.black, 0.7)};
  }
`;

export const AccordionWrapper = styled.div`
  background: ${({ theme }) => theme.hexToRgba(theme.colors.lightGray, 0.9)};
  border-radius: 12px;
  padding: 1.2rem 1.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.large};

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
    font-size: ${({ theme }) => theme.spacing.medium};
    color: ${({ theme }) => theme.hexToRgba(theme.colors.black, 0.8)};
    background-color: ${({ theme }) => theme.colors.white};
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
    color: ${({ theme }) => theme.colors.primary};
    transform: none;
  }

  /* Header ativo */
  .accordion-button:not(.collapsed) {
    background-color: ${({ theme }) => theme.colors.lightPrimary};
    color: ${({ theme }) => theme.colors.lightSuccess};
  }

  /* Remove foco azul */
  .accordion-button:focus {
    box-shadow: none;
  }

  /* Body */
  .accordion-body {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.hexToRgba(theme.colors.black, 0.7)};
    font-size: 0.95rem;
    line-height: 1.6;
    border-radius: 8px;
    margin-top: 0.3rem;
    padding: ${({ theme }) => theme.spacing.medium} 1.2rem;
  }

  .accordion-button:not(.collapsed)::after {
    content: '–';
  }
`;
