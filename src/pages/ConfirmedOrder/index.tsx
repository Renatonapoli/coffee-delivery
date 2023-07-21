import { MapPinLine, Timer, CurrencyDollar } from "@phosphor-icons/react";
import {
  CardInformations,
  ContainerConfirmed,
  DeliveryAdress,
  DeliveryTime,
  Header,
  Ilustration,
  InformationPayment,
  Section,
  SectionCurrencyDollar,
  SectionDeliveryAdress,
  SectionTimer,
} from "./styles";

export function ConfirmedOrder() {
  return (
    <ContainerConfirmed>
      <Header>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>

        <CardInformations>
          <Section>
            <SectionDeliveryAdress>
              <MapPinLine size={16} color="white" weight="fill" />
            </SectionDeliveryAdress>
            <DeliveryAdress>
              <p>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </p>
              <span>Farrapos - Porto Alegre, RS</span>
            </DeliveryAdress>
          </Section>
          <Section>
            <SectionTimer>
              <Timer size={16} color="white" weight="fill" />
            </SectionTimer>

            <DeliveryTime>
              <p>Previsão de Entrega</p>
              <span>
                <strong>20 min - 30 min</strong>
              </span>
            </DeliveryTime>
          </Section>
          <Section>
            <SectionCurrencyDollar>
              <CurrencyDollar size={16} color="white" />
            </SectionCurrencyDollar>
            <InformationPayment>
              <p>Pagamento na entrega</p>
              <span>
                <strong>Cartão de crédito</strong>
              </span>
            </InformationPayment>
          </Section>
        </CardInformations>
      </Header>
      <Ilustration src="../../src/assets/illustrations/motoboy-entrega.svg" />
    </ContainerConfirmed>
  );
}
