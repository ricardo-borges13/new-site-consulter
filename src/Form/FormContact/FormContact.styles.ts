import styled from 'styled-components';

export const FormContainer = styled.div`
  background-color: #94c11f;
  padding: 2rem;
  border-radius: 12px;
  width: 100%;
  max-width: 450px;
  margin: 0 auto;

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    @media (max-width: 600px) {
      grid-template-columns: 1fr;
    }
  }

  label {
    font-weight: 500;
    color: #fff;
    display: block;
    margin-bottom: 0.3rem;
  }

  input,
  textarea {
    width: 100%;
    padding: 0.6rem;
    border: none;
    border-radius: 6px;
    font-size: 1rem;
  }

  textarea {
    min-height: 100px;
    resize: vertical;
  }

  span {
    color: #b30000;
    font-size: 0.85rem;
  }



  button {
    background-color: #2a2a2a;
    color: white;
    font-weight: 700;
    border: none;
    border-radius: 10px;
    padding: 0.6rem 1.5rem;
    cursor: pointer;
    align-self: center;
    transition: background 0.3s;

    &:hover {
      background-color: #9cb3a3;
    }

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  }

  .success {
    text-align: center;
    color: #2a2a2a;
    font-weight: 600;
  }
`;

export const FieldGroup = styled.div`
  display: flex;
  gap: 0.5rem;

  label {
    caret-color: transparent;
  }
`;

export const Input = styled.input`
  flex: 1;
  padding: 8px;
  border: none;
  border-radius: 4px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  border: none;
  border-radius: 4px;
`;

export const ErrorMessage = styled.span`
  color: #c00;
  font-size: 0.8rem;
`;



export const Assunto = styled.div`
  label {
    caret-color: transparent;
  }
`;
export const Mensagem = styled.div`
  label {
    caret-color: transparent;
  }
`;

