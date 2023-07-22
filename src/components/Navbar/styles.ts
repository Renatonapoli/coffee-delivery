import styled from "styled-components";

export const ContainerNavbar = styled.div`
  display: flex;
  width: calc(100vw - 11rem);
  padding: 2rem 5rem;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;

  background: ${(props) => props.theme.white};

  img {
    font-size: 2.5rem;
  }

  div {
    display: flex;
    justify-content: space-between;

    align-items: center;
    max-width: 74rem;
    width: 100%;
  }
`;

export const ContainerLocationCart = styled.div`
  display: flex;

  align-items: center;
  margin: auto;
`;

export const Map = styled.span`
  display: flex;
  align-items: center;
  margin-right: 0.8rem;
  margin-left: auto;

  width: 8.938rem;
  height: 2.375rem;
  border-radius: 6px;
  justify-content: center;

  background: ${(props) => props.theme["purple-light"]};

  font-size: 0.75rem;
`;

export const Cart = styled.button`
  width: 2.375rem;
  height: 2.375rem;
  border-radius: 6px;
  border: none;
  cursor: pointer;

  background: ${(props) => props.theme["yellow-ligth"]};

  display: flex;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    width: 20px;
    height: 20px;
    justify-content: center;
    align-items: center;

    position: absolute;
    right: 4.5rem;
    top: 1.5rem;

    border-radius: 1000px;
    background: ${(props) => props.theme["yellow-dark"]};

    span {
      color: var(--base-white, #fff);
      text-align: center;
      font-size: 0.75rem;
      font-style: normal;
      font-weight: 700;
      line-height: 130%;
      letter-spacing: -0.72px;
    }
  }
`;
