import styled from 'styled-components';

export const Card = styled.article`
  background: #ffffff;
  border-radius: 16px;
  max-width: 450px;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  caret-color: transparent;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 14px 32px rgba(0, 0, 0, 0.12);
  }
`;

export const Header = styled.div`
  position: relative;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 14px;
  background: linear-gradient(
  135deg,
  #1e1e1e,
  #7fae1b
);

  img {
    width: 46px;
    height: 46px;
    object-fit: contain;
    background: #fff;
    border-radius: 10px;
    padding: 6px;
  }
`;

export const CardHeader = styled.div`
  border-radius: 30px;
  padding: 10px 18px;
  h3 {
    color: #fff;
    font-size: 1.2rem;
    font-weight: 600;
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 20px;
  margin: 0;
  flex: 1;

  li {
    position: relative;
    padding-left: 18px;
    margin-bottom: 10px;
    font-size: 0.95rem;
    color: #333;

    &::before {
      content: '›';
      position: absolute;
      left: 0;
      color: #94c11f;
      font-weight: 700;
    }
  }
`;


export const Action = styled.button`
  display: flex;
  align-items: center;
  background-color: #e0dede;
  gap: 6px;
  padding: 14px 20px;
  font-weight: 600;
  color: #1e7f4f;
  cursor: pointer;
  border-top: 1px solid #eee;
  transition: all 0.2s ease;
  border: none;

  svg {
    transition: transform 0.2s ease;
  }

  &:hover {
    color: #94c11f;

    svg {
      transform: translateX(4px);
    }
  }
`;




