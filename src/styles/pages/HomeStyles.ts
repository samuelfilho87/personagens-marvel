import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem 3rem 4rem 3rem;

  @media screen and (max-width: 600px) {
    padding: 0 1.5rem 3rem 1.5rem;
  }
`;

export const Content = styled.section`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
`;
