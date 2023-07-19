import styled from "styled-components";

export const ContainerAdressPaymentItemSelect = styled.div`
  display: flex;
  margin: auto;
`;
export const ContainerAdressPayment = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    margin: 2.5rem 0rem 0.95rem;

    font-family: "Baloo 2";
    font-size: 1.125rem;
    font-weight: 700;

    color: ${(props) => props.theme["gray-800"]};
  }
`;
export const Adress = styled.div`
  display: flex;
  padding: 2.5rem;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  gap: 32px;

  border-radius: 6px;
  background: ${(props) => props.theme["gray-200"]};
`;

export const Section = styled.section`
  display: flex;
  align-items: top;

  div {
    margin-left: 0.5rem;

    h4 {
      font-weight: 400;
      font-style: normal;
      line-height: 130%;

      color: ${(props) => props.theme["gray-800"]};
    }

    p {
      font-size: 0.875rem;
      line-height: 130%;

      color: ${(props) => props.theme["gray-700"]};
    }
  }
`;

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    justify-content: space-between;
  }
`;

export const PaymentCoffes = styled.div`
  width: 35rem;
  height: 7.9375rem;
  padding: 2.5rem;

  margin-top: 0.75rem;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  gap: 32px;

  border-radius: 6px;
  background: ${(props) => props.theme["gray-200"]};
`;

export const CoffesSelections = styled.div`
  h1 {
    margin: 2.5rem 0rem 0.95rem 5rem;

    font-family: "Baloo 2";
    font-size: 1.125rem;
    font-weight: 700;

    color: ${(props) => props.theme["gray-800"]};
  }
`;

export const ItemSelections = styled.div`
  display: flex;
  width: 28rem;
  height: 31.125rem;
  margin-left: 5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;

  border-radius: 6px 44px;
  background: ${(props) => props.theme["gray-200"]};
`;
