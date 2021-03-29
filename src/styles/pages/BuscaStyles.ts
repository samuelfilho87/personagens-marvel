import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 10rem - 12rem) /* tamanho da view - footer - header */;
  padding: 2rem 3rem 4rem 3rem;
  display: flex;

  @media screen and (max-width: 600px) {
    padding: 0 1.5rem 3rem 1.5rem;
  }
`;

export const Content = styled.section`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;

  h2 {
    margin-top: 1rem;
    text-align: center;
    text-transform: uppercase;

    strong {
      color: var(--red);
    }
  }
`;
