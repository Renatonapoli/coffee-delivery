import styled from "styled-components";

export const ContainerHome = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5.9rem;

  h2 {
    margin-top: 8.75rem;
    color: ${(props) => props.theme["gray-800"]};
    font-family: "Baloo 2";
    font-weight: 800;
    font-size: 2rem;
  }
`;

export const ContainerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 29.7rem;
    height: 22.5rem;
  }
`;

export const ContentCoffe = styled.div``;

export const Title = styled.h1`
  font-size: 3rem;
  font-family: "Baloo 2";
  font-weight: 800;

  text-shadow: 0em 0.1em 0.1em ${(props) => props.theme["gray-600"]};

  line-height: 130%;
`;
export const Subtitle = styled.p`
  color: ${(props) => props.theme["gray-800"]};
  font-size: 1.25rem;

  margin-top: 1rem;
`;

export const ContainerInformationsOne = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4.8rem;
  margin-bottom: 2rem;
`;

export const ContainerInformationsTwo = styled.div`
  display: flex;
  align-items: center;
`;

export const ShoppingCartContainer = styled.div`
  display: flex;
  align-items: center;

  span {
    display: flex;
    padding: 0.5rem;
    justify-content: center;
    align-items: center;
    gap: 8px;

    border-radius: 9999px;

    background: fixed ${(props) => props.theme["yellow-dark"]};
  }

  p {
    margin-left: 0.75rem;
    color: ${(props) => props.theme["gray-700"]};
  }
`;

export const PackageContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 2.5rem;

  span {
    display: flex;
    padding: 0.5rem;
    justify-content: center;
    align-items: center;
    gap: 8px;

    border-radius: 9999px;

    background: fixed ${(props) => props.theme["gray-700"]};
  }

  p {
    margin-left: 0.75rem;
    color: ${(props) => props.theme["gray-700"]};
  }
`;

export const TimerContainer = styled.div`
  display: flex;
  align-items: center;

  span {
    display: flex;
    padding: 0.5rem;
    justify-content: center;
    align-items: center;

    gap: 8px;

    border-radius: 9999px;

    background: fixed ${(props) => props.theme["yellow"]};
  }

  p {
    margin-left: 0.75rem;
    color: ${(props) => props.theme["gray-700"]};
  }
`;

export const CoffeeContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 2.5rem;

  span {
    display: flex;
    padding: 0.5rem;
    justify-content: center;
    align-items: center;
    gap: 8px;

    border-radius: 9999px;

    background: fixed ${(props) => props.theme["purple"]};
  }

  p {
    margin-left: 0.75rem;
    color: ${(props) => props.theme["gray-700"]};
  }
`;

export const ContainerCards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
