import styled from 'styled-components';

export const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  position: relative;
  overflow: visible;
  margin: 40px 0 30px 0;
`;

export const Content = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.desktop};
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;

  padding-left: 80px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 0 10px 0 10px;
  }
`;

export const InfoArea = styled.div`
  caret-color: transparent;

  .icon {
    color: ${({ theme }) => theme.colors.primaryDark};
  }

  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: 0.9rem;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  p {
    font-size: 1.5rem;
    line-height: 1.6;
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: 0.5rem;
    gap: 10px;
  }
  .contact {
    margin-top: ${({ theme }) => theme.spacing.large};
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
  }

  .contact-item {
    display: grid;
    grid-template-columns: 22px 1fr;
    column-gap: 12px;
    align-items: start;
  }

  .contact-text {
    display: flex;
    flex-direction: column;
  }

  .contact-name {
    font-size: 0.9rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text.contato};
    margin-bottom: 2px;
  }

  .contact-text a {
    font-size: 1.05rem;
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
  }

  .contact-text a:hover {
    color: ${({ theme }) => theme.colors.primaryDark};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    h2 {
      margin-bottom: 0;
    }
    .contact {
      display: none;
      margin-bottom: 0;
    }
    p {
      margin: 0;
    }
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  z-index: 2;

  transform: translateY(30px);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    transform: translateY(40px);
  }
`;
