import styled from 'styled-components';

export const FormContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.large};
  border-radius: 12px;
  width: 100%;
  max-width: 450px;
  margin: 0 auto;

  form {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.medium};
  }

  label {
    font-weight: 500;
    color: ${({ theme }) => theme.colors.white};
    display: block;
    margin-bottom: 0.3rem;
    caret-color: transparent;
  }
`;

export const FieldGroup = styled.div`
  display: flex;
  gap: 0.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column; // ← Empilha em mobile
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.6rem;
  border: none;
  border-radius: 6px;
  font-size: ${({ theme }) => theme.spacing.medium};
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 0.6rem;
  border: none;
  border-radius: 6px;
  font-size: ${({ theme }) => theme.spacing.medium};
  min-height: 100px;
  resize: vertical;
`;

export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.error};
  font-size: 0.85rem;
  margin-top: 0.3rem;
  display: block;
`;

export const Assunto = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Mensagem = styled.div`
  display: flex;
  flex-direction: column;
`;
