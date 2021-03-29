import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  padding: 0rem 3rem;
  background: url('/images/background.png') center top no-repeat;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 4rem 0 3rem 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    padding: 1.5rem 0;
  }
`;

export const Logo = styled.div`
  position: relative;
  width: 412px;
  height: 72px;

  @media screen and (max-width: 820px) {
    max-width: 260px;
    height: 60px;

    & > div img {
      object-fit: contain;
    }
  }
`;

export const Search = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;

  label {
    display: flex;

    input {
      padding: 1rem;
      font-weight: 700;
      text-transform: uppercase;
      color: #fff;
      background: var(--red);
      border: none;
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
      outline: 0;

      &::placeholder {
        color: #fff;
      }
    }

    button {
      padding: 0 1rem;
      background: var(--red);
      border: none;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      outline: 0;
      transition: all 0.3s;

      svg {
        width: 1.5rem;
        height: 1.5rem;
        color: #fff;
      }

      &:hover {
        background: var(--dark-red);
      }
    }
  }

  span {
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }
`;