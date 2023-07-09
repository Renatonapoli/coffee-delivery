import { ShoppingCart, Plus, Minus } from "@phosphor-icons/react";
import {
  ButtonNegative,
  ButtonPositive,
  CardContainer,
  CardFooter,
  CartShopping,
  CoffeValue,
  ContentCard,
  ContentCounter,
  Counter,
  Header,
  Subtitle,
  Title,
  TypeCoffe,
} from "./styles";

export function Card() {
  return (
    <CardContainer>
      <Header>
        <img src="../../src/assets/illustrations/expresso-tradicional.png" />
        <TypeCoffe>Tradicional</TypeCoffe>
      </Header>
      <ContentCard>
        <Title>Expresso Tradicional</Title>

        <Subtitle>
          <span>O tradicional café feito com água </span>
          <span>quente e grãos moídos</span>
        </Subtitle>
      </ContentCard>

      <CardFooter>
        <ContentCounter>
          <CoffeValue>
            <span>R$</span>
            <p>9,90</p>
          </CoffeValue>

          <Counter>
            <ButtonNegative>
              <Minus size={14} color="purple" />
            </ButtonNegative>
            <span>1</span>
            <ButtonPositive>
              <Plus size={14} color="purple" />
            </ButtonPositive>
          </Counter>

          <CartShopping>
            <ShoppingCart size={22} color="white" weight="fill" />
          </CartShopping>
        </ContentCounter>
      </CardFooter>
    </CardContainer>
  );
}
