import { MapPinLine } from "@phosphor-icons/react";
import {
  Adress,
  CoffesSelections,
  ContainerAdressPayment,
  ContainerAdressPaymentItemSelect,
  ItemSelections,
  PaymentCoffes,
  Section,
  ContainerForm,
} from "./styles";
import { Input } from "./components/inputText";

export function Payment() {
  return (
    <>
      <ContainerAdressPaymentItemSelect>
        <ContainerAdressPayment>
          <h1>Complete seu pedido</h1>
          <Adress>
            <Section>
              <MapPinLine size={22} color="#C47f17" />
              <div>
                <h4>Endereço de Entrega</h4>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </Section>
            <ContainerForm>
              <Input
                type={"number"}
                palceholder={"CEP"}
                width={{ width: "10.875rem" }}
              />
              <Input
                type={"text"}
                palceholder={"Rua"}
                width={{ width: "33.375rem" }}
              />
              <div>
                <Input
                  type={"number"}
                  palceholder={"Numero"}
                  width={{ width: "10.875rem" }}
                />
                <Input
                  type={"text"}
                  palceholder={"Complemento opcional"}
                  width={{ width: "20.125rem" }}
                />
              </div>
              <div>
                <Input
                  type="text"
                  palceholder="Bairro"
                  width={{ width: "10.875rem" }}
                />
                <Input
                  type="text"
                  palceholder="Cidade"
                  width={{ width: "15.625rem" }}
                />
                <Input
                  type="text"
                  palceholder="UF"
                  width={{ width: "2.125rem" }}
                />
              </div>
            </ContainerForm>
          </Adress>
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
