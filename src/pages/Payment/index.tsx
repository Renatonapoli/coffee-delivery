import {
  Adress,
  CoffesSelections,
  ContainerAdressPayment,
  ContainerAdressPaymentItemSelect,
  ItemSelections,
  PaymentCoffes,
} from "./styles";

export function Payment() {
  return (
    <>
      <ContainerAdressPaymentItemSelect>
        <ContainerAdressPayment>
          <h1>Complete seu pedido</h1>
          <Adress></Adress>
          <PaymentCoffes></PaymentCoffes>
        </ContainerAdressPayment>

        <CoffesSelections>
          <h1>Cafés selecionados</h1>
          <ItemSelections></ItemSelections>
        </CoffesSelections>
      </ContainerAdressPaymentItemSelect>
    </>
  );
}
