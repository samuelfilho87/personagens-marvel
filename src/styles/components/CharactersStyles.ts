import styled from 'styled-components';

export const Container = styled.section`
  margin: 3rem 0;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 1rem;
`;

export const CharacterBox = styled.div`
  position: relative;
  width: calc(20% - 1rem);
  min-height: 34rem;
  margin: 0 auto;
  background: var(--black);
  color: #fff;
  transition: all 0.3s;

  @media screen and (max-width: 1100px) {
    width: calc(25% - 1rem);
  }

  @media screen and (max-width: 900px) {
    width: calc(33% - 1rem);
  }

  @media screen and (max-width: 820px) {
    width: calc(50% - 1rem);
  }

  &::before {
    position: absolute;
    content: "";
    left: 0;
    top: 0;
    width: 100%;
    height: 0;
    background: var(--red);
    transition: height 0.5s;
  }

  &::after {
    position: absolute;
    content: "";
    bottom: 0;
    right: 0;
    border-bottom-color: transparent;
    border-left-color: transparent;
    border-top-color: transparent;
    border-right-color: var(--background);
    border-style: solid;
    border-width: 1rem 1rem 0 0;
  }

  header {
    position: relative;
    height: 21rem;
    border-bottom: solid 0.4rem var(--red);
    overflow: hidden;
    z-index: 100;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: grayscale(0.9);
      transition: all 0.3s;
    }
  }

  div {
    position: relative;
    padding: 1rem 1.5rem 1.5rem 1.5rem;

    h2 {
      margin-bottom: 0.5rem;
    }

    p {
      font-size: 0.7rem;
      line-height: 1.05rem;
    }
  }

  &:hover {
    &::before {
      height: 100%;
    }

    header img {
      margin-top: -10%;
      height: 120%;
      filter: grayscale(0);
    }
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    min-height: 0;

    a {
      display: flex;

      header {
        width: 80px;
        min-width: 80px;
        height: 80px;
        border-bottom: none;
        border-right: solid 0.4rem var(--red);

        img {

        }
      }

      div {
        position: relative;
        padding: 0 0 0 0.5rem;
        display: flex;
        align-items: center;

        h2 {
          margin-bottom: 0;
        }

        p {
          display: none;
        }
      }
    }
  }
`;