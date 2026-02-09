import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.large};
  background: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  padding: ${({ theme }) => theme.spacing.large};
  box-shadow: 0 3px 8px
    ${({ theme }) => theme.hexToRgba(theme.colors.black, 0.55)};

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.03);
    filter: brightness(1.1);
  }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 1.4rem;
    margin-left: 0.75rem;
  }

  p {
    flex: 1;
    margin: 0.25rem 0;
    color: ${({ theme }) => theme.hexToRgba(theme.colors.black, 0.7)};
    line-height: 1.5;

    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

export const IconTitle = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 32px;
    height: 32px;
  }
`;

export const Footer = styled.div`
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LinkButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.primaryDark};
  font-weight: 600;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const ActionButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: none;
  background: ${({ theme }) => theme.colors.primaryDark};
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.2rem;
  cursor: pointer;
`;

export const ImageArea = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.medium};

  width: 120px;
  flex-shrink: 0;

  img {
    max-width: 100%;
    max-height: 140px;
    object-fit: contain;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tinyMobile}) {
    > * {
      width: 97%;
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.smallerMobile}) {
    > * {
      width: 93%;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallestMobile}) {
    > * {
      width: 89%;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.microMobile}) {
    > * {
      width: 80%;
    }
  }
`;
