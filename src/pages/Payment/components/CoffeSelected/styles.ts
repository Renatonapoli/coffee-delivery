import { styled } from "styled-components";

export const ContainerCoffes = styled.div`
  display: flex;
  padding: 0.5rem 0.25rem;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
  gap: 20px;

  background: ${(props) => props.theme["gray-200"]};

  img {
    width: 4rem;
    height: 4rem;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContainerButtons = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  h1 {
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
`;

export const ButtonPlus = styled.button``;

export const ButtonMin = styled.button``;

export const ButtonRemove = styled.button``;
