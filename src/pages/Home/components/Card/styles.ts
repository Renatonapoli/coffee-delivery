import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 3.4rem 2rem -0.8rem 0;
  justify-content: flex-start;
`;

export const CardContainer = styled.div`
  flex: 0 0 100%;
  width: 16rem;
  height: 19.375rem;
  border-radius: 6px 36px;
  padding-right: -2rem;

  background: ${(props) => props.theme["gray-200"]};

  display: flex;
  flex-direction: column;

  flex-shrink: 0;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -1rem;
  }
`;

export const TypeCoffe = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.35rem;
`;

export const Traditional = styled.span`
  padding: 0.5rem 0.8rem;
  border-radius: 100px;
  margin: 0.1rem;

  background: ${(props) => props.theme["yellow-ligth"]};

  font-size: 0.625rem;
  text-transform: uppercase;
  font-weight: 700;

  color: ${(props) => props.theme["yellow-dark"]};
`;
export const IceCream = styled(Traditional)``;
export const Alcoholic = styled(Traditional)``;

export const ContentCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0.5rem;
  flex-shrink: 0;
`;

export const Title = styled.div`
  font-family: "Baloo 2";
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 130%;

  color: ${(props) => props.theme["gray-800"]};
`;

export const Subtitle = styled.div`
  width: 13.5rem;
  margin-top: 0.5rem;
  span {
    font-size: 0.875rem;
    line-height: 130%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    color: ${(props) => props.theme["gray-600"]};
  }
`;

export const CardFooter = styled.div`
  display: flex;
  margin-top: 2rem;
  justify-content: center;
  align-items: center;
`;

export const ContentCounter = styled.div`
  display: flex;
  width: 13rem;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

export const CoffeValue = styled.div`
  display: flex;
  align-items: baseline;
  line-height: 130%;

  color: ${(props) => props.theme["gray-700"]};

  span {
    margin-left: 0.3rem;
    font-size: 0.875rem;
  }

  p {
    margin-left: 0.2rem;
    font-size: 1.5rem;
    font-family: "Baloo 2";
  }
`;

export const Counter = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: 0.5rem;
  justify-content: space-evenly;
  align-items: center;

  width: 4.5rem;
  height: 2.4rem;
  border-radius: 6px;

  background: ${(props) => props.theme["gray-400"]};

  gap: 4px;
`;

export const ButtonNegative = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
`;

export const Count = styled.span`
  font-size: 1rem;
  line-height: 130%;
`;

export const ButtonPositive = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
`;

export const CartShopping = styled.div`
  display: flex;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  gap: 8px;

  background: ${(props) => props.theme["purple-dark"]};
`;
