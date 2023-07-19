import { MapPinLine, CurrencyDollar } from "@phosphor-icons/react";
import {
  Adress,
  CoffesSelections,
  ContainerAdressPayment,
  ContainerAdressPaymentItemSelect,
  ItemSelections,
  PaymentCoffes,
  Section,
  ContainerForm,
  ButtonsFormPayment,
} from "./styles";
import { CreditCard } from "@phosphor-icons/react";
import { Input } from "./components/inputText";
import { ButtonPayment } from "./components/Button";

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
          <PaymentCoffes>
            <Section>
              <CurrencyDollar size={22} color="#8047f8" />
              <div>
                <h4>Pagamento</h4>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </Section>
            <ButtonsFormPayment>
              <ButtonPayment title={"Cartão de crédito"} />
              <ButtonPayment title={"Cartão de Débito"} />
              <ButtonPayment title={"Dinheiro"} />
            </ButtonsFormPayment>
          </PaymentCoffes>
        </ContainerAdressPayment>

        <CoffesSelections>
          <h1>Cafés selecionados</h1>
          <ItemSelections></ItemSelections>
        </CoffesSelections>
      </ContainerAdressPaymentItemSelect>
    </>
  );
}
