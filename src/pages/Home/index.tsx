import { Card } from "./components/Card";
import { ShoppingCart, Timer, Coffee, Package } from "@phosphor-icons/react";
import CoffeExpress from "../../assets/illustrations/expresso-tradicional.png";
import {
  CoffeeContainer,
  ContainerCards,
  ContainerHeader,
  ContainerHome,
  ContainerInformationsOne,
  ContainerInformationsTwo,
  ContentCoffe,
  PackageContainer,
  ShoppingCartContainer,
  Subtitle,
  TimerContainer,
  Title,
} from "./styles";

export function Home() {
  return (
    <ContainerHome>
      <ContainerHeader>
        <ContentCoffe>
          <Title>
            Econtre o café perfeito <br /> para qualquer hora do dia
          </Title>
          <Subtitle>
            Com o Coffe Delivery você recebe seu café onde estiver, a <br />
            qualquer hora
          </Subtitle>

          <ContainerInformationsOne>
            <ShoppingCartContainer>
              <span>
                <ShoppingCart size={16} color="white" weight="fill" />
              </span>
              <p>Compra simples e segura</p>
            </ShoppingCartContainer>
            <PackageContainer>
              <span>
                <Package size={16} color="white" weight="fill" />
              </span>
              <p>Embalagem mantém o café intacto</p>
            </PackageContainer>
          </ContainerInformationsOne>

          <ContainerInformationsTwo>
            <TimerContainer>
              <span>
                <Timer size={16} color="white" weight="fill" />
              </span>
              <p>Entrega rápida e rastreada</p>
            </TimerContainer>
            <CoffeeContainer>
              <span>
                <Coffee size={16} color="white" weight="fill" />
              </span>
              <p>O café chega fresquinho até você</p>
            </CoffeeContainer>
          </ContainerInformationsTwo>
        </ContentCoffe>
        <img src="../src/assets/illustrations/coffe-delivery.svg" />
      </ContainerHeader>

      <h2>Nossos Cafés</h2>
      <ContainerCards>
        <Card
          src={CoffeExpress}
          traditional={"Tradicional"}
          typeCoffe={"Expresso Tradicional"}
          fraseCoffe={"O tradicional café feito com água"}
          subfraseCoffe={"quente e grãos moídos"}
          coin={"R$"}
          price={"9,90"}
          iceCream={""}
          alcoholic={""}
        />
      </ContainerCards>
    </ContainerHome>
  );
}
