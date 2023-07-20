import { styled } from "styled-components";

export const ContainerCoffes = styled.div`
  display: flex;
  padding: 0.5rem 0.25rem;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: stretch;
  gap: 20px;

  background: ${(props) => props.theme["gray-200"]};

  img {
    width: 4rem;
    height: 4rem;
    flex-shrink: 0;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const TitleCoffe = styled.h2`
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
`;

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;

  div {
    display: flex;
    height: 1rem;
    padding: 0.5rem;
    justify-content: center;
    align-items: center;
    gap: 4px;

    border-radius: 6px;
    background: ${(props) => props.theme["gray-400"]};
  }
`;

export const ButtonPlus = styled.button`
  display: flex;
  align-items: center;
  width: 0.875rem;
  height: 0.875rem;

  border: none;
  background: ${(props) => props.theme["gray-400"]};

  cursor: pointer;
`;

export const CountQuantityCoffe = styled.span`
  font-family: Roboto;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
`;

export const ButtonMin = styled.button`
  display: flex;
  align-items: center;
  width: 0.875rem;
  height: 0.875rem;

  border: none;
  background: ${(props) => props.theme["gray-400"]};

  cursor: pointer;
`;

export const ButtonRemove = styled.button`
  display: flex;
  height: 2rem;
  padding: 0 0.5rem;
  margin-left: 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 4px;

  font-family: Roboto;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  text-transform: uppercase;

  border-radius: 6px;
  border: none;
  background: ${(props) => props.theme["gray-400"]};

  cursor: pointer;
`;

export const ValueCoffe = styled.p`
  margin-left: auto;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
`;

export const Division = styled.hr`
  align-self: stretch;
  stroke-width: 1px;

  stroke: ${(props) => props.theme["gray-400"]};
`;
