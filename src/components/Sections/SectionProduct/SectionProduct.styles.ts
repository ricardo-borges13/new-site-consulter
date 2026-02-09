import styled from 'styled-components';

export const wrapper = styled.div`
  caret-color: transparent;
  width: 80%;
  max-width: ${({theme}) => theme.breakpoints.largeDesktop};
  margin: 0 auto;
  padding: ${({theme}) => theme.spacing.medium} ${({theme}) => theme.spacing.medium}; /* 20px 20px */
   overflow-x: hidden;

  h2 {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
  }

  /* Quando chegar no mobile, ocupar toda a largura */
  @media (max-width: ${({theme}) => theme.breakpoints.mediumDesktop}) {
    width: 100%;
    max-width: 100%;
    padding: 0 10px;
  }
`;

export const ImagesArea = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 40px;


  @media (max-width: ${({theme}) => theme.breakpoints.smallTablet}) {
    grid-template-columns: 1fr;
  }

  @media (max-width: ${({theme}) => theme.breakpoints.midMobile}) {
    justify-items: stretch;

    > * {
      width: 100%;
    }
  }

   @media (max-width: ${({theme}) => theme.breakpoints.tinyMobile}) {
     margin-bottom: 3px;
    > * {
      width: 97%;

    }
  }
   @media (max-width: ${({theme}) => theme.breakpoints.smallerMobile}) {
    > * {
      width: 93%;
    }
  }

  @media (max-width: ${({theme}) => theme.breakpoints.smallestMobile}) {
    > * {
      width: 89%;
    }
  }

   @media (max-width: ${({theme}) => theme.breakpoints.microMobile}) {
    > * {
      width: 85%;
    }
  }
`;
