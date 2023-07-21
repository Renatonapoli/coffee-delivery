import { styled } from "styled-components";

export const ContainerConfirmed = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  margin-top: 5rem;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;

  h1 {
    font-family: "Baloo 2";
    font-size: 32px;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;

    color: ${(props) => props.theme["yellow-dark"]};
  }

  p {
    font-size: 1.25rem;

    color: ${(props) => props.theme["gray-800"]};
  }
`;

export const CardInformations = styled.div`
  position: relative;
  display: flex;
  margin-top: 2.5rem;
  width: 27.875rem;
  padding: 2.5rem;
  margin-right: 10rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;

  border-radius: 6px 36px 6px 36px;

  &::before {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    border-radius: 6px 36px 6px 36px;
    border: 1px solid;
    border-image-slice: 1;
    border-image-source: linear-gradient(
      to right,
      ${(props) => props.theme.yellow},
      ${(props) => props.theme.purple}
    );
    pointer-events: none;
  }
`;

export const Section = styled.section`
  display: flex;
  justify-content: flex-start;
  gap: 12px;
`;

export const SectionDeliveryAdress = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5em;
  width: 1rem;
  height: 1rem;

  border-radius: 1000px;
  background: ${(props) => props.theme.purple};
  gap: 8px;
`;

export const SectionTimer = styled(SectionDeliveryAdress)`
  background: ${(props) => props.theme.yellow};
`;
export const SectionCurrencyDollar = styled(SectionDeliveryAdress)`
  background: ${(props) => props.theme["yellow-dark"]};
`;

export const DeliveryAdress = styled.section`
  p {
    font-size: 1rem;
    font-weight: 400;
    line-height: 130%;
  }
`;
export const DeliveryTime = styled(DeliveryAdress)``;
export const InformationPayment = styled(DeliveryAdress)``;

export const Ilustration = styled.img`
  display: flex;
  width: 30.75rem;
  height: 18.313rem;
  margin-top: auto;
  flex-shrink: 0;
`;
