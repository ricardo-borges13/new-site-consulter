import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) =>
    theme.hexToRgba(theme.colors.black, 0.94)}; /* #0f0f0f is close to black */
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.body};
  caret-color: transparent;
`;

export const FooterTop = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.desktop};
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.large}
    ${({ theme }) => theme.spacing.medium}; /* 3rem 1.5rem */

  display: grid;
  grid-template-columns: 1.7fr 1fr 1fr 1.5fr;
  gap: ${({ theme }) => theme.spacing.large}; /* 2rem */

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

export const Brand = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.medium}; /* 1rem */

  img {
    width: clamp(100px, 50vw, 250px);
  }

  p {
    font-size: 0.95rem;
    color: ${({ theme }) =>
      theme.hexToRgba(theme.colors.white, 0.8)}; /* #ccc */
    max-width: 320px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    align-items: center;

    p {
      max-width: none;
    }
  }
`;

export const Block = styled.div`
  h4 {
    font-size: 1rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: ${({ theme }) => theme.spacing.medium}; /* 1rem */
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: ${({ theme }) => theme.spacing.small}; /* 0.5rem */

      a {
        color: ${({ theme }) => theme.colors.white};
        text-decoration: none;
        font-size: 0.9rem;

        &:hover {
          color: ${({ theme }) => theme.colors.primary};
        }
      }
    }
  }

  address {
    display: flex;
    flex-direction: column;
    gap: 0.7rem; /* Not in theme */
    font-style: normal;
    font-size: 0.9rem;

    span {
      display: flex;
      align-items: center;
      gap: 6px; /* Not in theme */
    }

    a {
      color: inherit;
      text-decoration: none;

      &:hover {
        color: ${({ theme }) => theme.colors.primary};
      }
    }

    svg {
      font-size: 1.1rem;
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const FooterBottom = styled.div`
  border-top: 1px solid
    ${({ theme }) => theme.hexToRgba(theme.colors.white, 0.1)};
  padding: ${({ theme }) => theme.spacing.medium}
    ${({ theme }) => theme.spacing.medium}; /* 1rem 1.5rem */

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 0.8rem;
  color: ${({ theme }) => theme.hexToRgba(theme.colors.white, 0.6)}; /* #aaa */

  max-width: ${({ theme }) => theme.breakpoints.desktop};
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.small};
    text-align: center;
  }
`;
