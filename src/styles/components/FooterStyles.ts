import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  height: 10rem;
  background: url('/images/background.png') center top no-repeat;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  h4 {
    font-weight: 400;

    span {
      margin-right: 0.4rem;
      font-size: 0.8rem;
      font-weight: 300;
    }

    strong {
      font-weight: 900;
    }

    @media screen and (max-width: 600px) {
      margin-bottom: 0.5rem;
      
      display: flex;
      flex-direction: column;
      align-items: center;

      span {
        margin: 0 0 0.5rem 0;
      }
    }
  }

  div {
    display: flex;
    gap: 0.5rem;
    
    a {
      svg {
        transition: color 0.3s;

        &:hover {
          color: var(--red);
        }
      }
    }
  }
`;

