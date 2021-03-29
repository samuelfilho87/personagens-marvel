import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  button {
    padding: 0.5rem 1rem;
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 700;
    border: none;
    border-radius: 3px;
    background: #F9F9F9;
    transition: all 0.3s;

    &.active {
      color: #fff;
      background: var(--dark-red);
    }

    &:hover:not(:disabled) {
      color: #fff;
      background: var(--black);
    }

    @media screen and (max-width: 600px) {
      display: none;
    }
  }

  svg {
    cursor: pointer;
    
    &:hover {
      color: var(--dark-red);
    }

    @media screen and (max-width: 600px) {
      width: 40px;
      height: 40px;
    }
  }
`;
