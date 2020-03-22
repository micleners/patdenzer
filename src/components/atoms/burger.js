import styled from '@emotion/styled';

export const Burger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 1.75rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-right: 10px;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 1.75rem;
    height: 2px;
    background: ${({ theme }) => theme.colors.purple};
    border-radius: 5px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }
`;