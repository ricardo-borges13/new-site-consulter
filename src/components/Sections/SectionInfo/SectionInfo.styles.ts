import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  padding: 5rem 8%;
  background: ${({ theme }) => theme.colors.background.light};
  caret-color: transparent;
  max-width: ${({ theme }) => theme.breakpoints.largeDesktop};
  margin: 1.3rem auto;
  border-radius: 20px;
  box-shadow: 10px 10px 8px 1px #999;
  @media (max-width: ${({ theme }) => theme.breakpoints.desktopSmallest}) {
    padding: 3rem 6%;
  }
`;

export const TextArea = styled.div`
  flex: 1;
  max-width: 550px;

  h2 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.hexToRgba(theme.colors.black, 0.9)};
  }

  p {
    font-size: ${({ theme }) => theme.spacing.medium};
    line-height: 1.6;
    color: ${({ theme }) => theme.hexToRgba(theme.colors.black, 0.8)};
    margin-bottom: 30px;
  }
`;

export const ImagesArea = styled.div`
  display: flex;
  gap: 30px;

  img {
    height: 450px;
    object-fit: cover;
    border-radius: 20px;
    aspect-ratio: 16 / 9;
    width: 100%;
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;

    &:hover {
      transform: scale(1.03);
      box-shadow: 0 4px 12px
        ${({ theme }) => theme.hexToRgba(theme.colors.black, 0.2)};
    }
  }

  img:first-child {
    max-width: 340px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktopSmallest}) {
    max-width: 600px;

    img {
      width: clamp(260px, 30vw, 300px);
      height: clamp(360px, 40vw, 400px);
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.smallTabletMobile}) {
      img:first-child {
        display: none;
      }
    }
  }

  img:last-child {
    width: clamp(220px, 25vw, 260px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.midTablet}) {
    img:last-child {
      display: none;
    }
  }
`;
