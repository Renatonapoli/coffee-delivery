import styled from "styled-components";

export const ContainerAdressPaymentItemSelect = styled.div`
  display: flex;
  padding: 0rem 5rem;
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
  width: 40rem;
  height: 23.25rem;
  padding: 2.5rem;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  gap: 32px;

  border-radius: 6px;
  background: ${(props) => props.theme["gray-200"]};
`;

export const PaymentCoffes = styled.div`
  width: 40rem;
  height: 12.37rem;
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
    margin: 2.5rem 0rem 0.95rem 2rem;

    font-family: "Baloo 2";
    font-size: 1.125rem;
    font-weight: 700;

    color: ${(props) => props.theme["gray-800"]};
  }
`;

export const ItemSelections = styled.div`
  display: flex;
  width: 28rem;
  height: 31.12rem;
  margin-left: 2rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;

  border-radius: 6px 44px;
  background: ${(props) => props.theme["gray-200"]};
`;
