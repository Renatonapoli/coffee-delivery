import { MapPinLine, Timer, CurrencyDollar } from "@phosphor-icons/react";
import {
  CardInformations,
  ContainerConfirmed,
  Header,
  Ilustration,
  Section,
} from "./styles";
export function ConfirmedOrder() {
  return (
    <ContainerConfirmed>
      <Header>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>

        <CardInformations>
          <Section>
            <div>
              <MapPinLine />
            </div>
            <div>
              <p>Entrega em Rua João Daniel Martinelli, 102</p>
              <span>Farrapos - Porto Alegre, RS</span>
            </div>
          </Section>
          <Section>
            <div>
              <Timer />
            </div>
            <div>
              <p>Entrega em Rua João Daniel Martinelli, 102</p>
              <span>Farrapos - Porto Alegre, RS</span>
            </div>
          </Section>
          <Section>
            <div>
              <CurrencyDollar />
            </div>
            <div>
              <p>Entrega em Rua João Daniel Martinelli, 102</p>
              <span>Farrapos - Porto Alegre, RS</span>
            </div>
          </Section>
        </CardInformations>
      </Header>
      <Ilustration src="../../src/assets/illustrations/motoboy-entrega.svg" />
    </ContainerConfirmed>
  );
}
