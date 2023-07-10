import { Card } from "./components/Card";
import { ShoppingCart, Timer, Coffee, Package } from "@phosphor-icons/react";
import CoffeExpress from "../../assets/illustrations/expresso-tradicional.svg";
import CoffeAmerican from "../../assets/illustrations/expresso-americano.svg";
import CoffeCreamy from "../../assets/illustrations/expresso-cremoso.svg";
import CoffeIceCream from "../../assets/illustrations/expresso-gelado.svg";
import CoffeWithMilk from "../../assets/illustrations/cafe-com-leite.svg";
import Latte from "../../assets/illustrations/latte.svg";
import Capuccino from "../../assets/illustrations/capuccino.svg";
import Macchiato from "../../assets/illustrations/macchiato.svg";
import Mocaccino from "../../assets/illustrations/mocaccino.svg";
import HotChocolate from "../../assets/illustrations/chocolate-quente.svg";
import Cuban from "../../assets/illustrations/cubano.svg";
import Hawaiian from "../../assets/illustrations/havaiano.svg";
import Arabic from "../../assets/illustrations/arabe.svg";
import Irish from "../../assets/illustrations/irlandes.svg";

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

        <Card
          src={CoffeAmerican}
          traditional={"Tradicional"}
          typeCoffe={"Expresso Americano"}
          fraseCoffe={"Expresso diluído, menos intenso"}
          subfraseCoffe={"que o tradicional"}
          coin={"R$"}
          price={"9,90"}
          iceCream={""}
          alcoholic={""}
        />
        <Card
          src={CoffeCreamy}
          traditional={"Tradicional"}
          typeCoffe={"Expresso Cremoso"}
          fraseCoffe={"Café tradicional com"}
          subfraseCoffe={"espuma cremosa"}
          coin={"R$"}
          price={"9,90"}
          iceCream={""}
          alcoholic={""}
        />
        <Card
          src={CoffeIceCream}
          traditional={"Tradicional"}
          iceCream={"Gelado"}
          alcoholic={""}
          typeCoffe={"Expresso Gelado"}
          fraseCoffe={"Bebida preparada com café"}
          subfraseCoffe={"expresso e cubos de gelo"}
          coin={"R$"}
          price={"9,90"}
        />
        <Card
          src={CoffeWithMilk}
          traditional={"Tradicional"}
          iceCream={"Com Leite"}
          alcoholic={""}
          typeCoffe={"Café com Leite"}
          fraseCoffe={"Meio a meio de expresso"}
          subfraseCoffe={"tradicional com leite vaporizado"}
          coin={"R$"}
          price={"9,90"}
        />
        <Card
          src={Latte}
          traditional={"Tradicional"}
          iceCream={"Com Leite"}
          alcoholic={""}
          typeCoffe={"Latte"}
          fraseCoffe={"Uma dose de café expresso com o"}
          subfraseCoffe={"dobro de leite e espuma cremosa"}
          coin={"R$"}
          price={"9,90"}
        />
        <Card
          src={Capuccino}
          traditional={"Tradicional"}
          iceCream={"Com Leite"}
          alcoholic={""}
          typeCoffe={"Capuccino"}
          fraseCoffe={"Bebida com canela feita de doses"}
          subfraseCoffe={"iguais de café, leite e espuma"}
          coin={"R$"}
          price={"9,90"}
        />
        <Card
          src={Macchiato}
          traditional={"Tradicional"}
          iceCream={"Com Leite"}
          alcoholic={""}
          typeCoffe={"Macchiato"}
          fraseCoffe={"Café expresso misturado com um"}
          subfraseCoffe={"pouco de leite quente e espuma"}
          coin={"R$"}
          price={"9,90"}
        />
        <Card
          src={Mocaccino}
          traditional={"Tradicional"}
          iceCream={"Com Leite"}
          alcoholic={""}
          typeCoffe={"Mocaccino"}
          fraseCoffe={"Café expresso com calda de"}
          subfraseCoffe={"chocolate, pouco leite e espuma"}
          coin={"R$"}
          price={"9,90"}
        />
        <Card
          src={HotChocolate}
          traditional={"Especial"}
          iceCream={"Com Leite"}
          alcoholic={""}
          typeCoffe={"Chocolate Quente"}
          fraseCoffe={"Bebida feita com chocolate"}
          subfraseCoffe={"dissolvido no leite quente e café"}
          coin={"R$"}
          price={"9,90"}
        />
        <Card
          src={Cuban}
          traditional={"Especial"}
          alcoholic={"Alcoólico"}
          iceCream={"Gelado"}
          typeCoffe={"Cubano"}
          fraseCoffe={"Drink gelado de café expresso"}
          subfraseCoffe={"com rum, creme de leite e hortelã"}
          coin={"R$"}
          price={"9,90"}
        />
        <Card
          src={Hawaiian}
          traditional={"Especial"}
          iceCream={""}
          alcoholic={""}
          typeCoffe={"Havaiano"}
          fraseCoffe={"Bebida adocicada preparada com"}
          subfraseCoffe={"café e leite de coco"}
          coin={"R$"}
          price={"9,90"}
        />
        <Card
          src={Arabic}
          traditional={"Especial"}
          iceCream={""}
          alcoholic={""}
          typeCoffe={"Árabe"}
          fraseCoffe={"Bebida preparada com grãos de"}
          subfraseCoffe={"café árabe e especiarias"}
          coin={"R$"}
          price={"9,90"}
        />
        <Card
          src={Irish}
          traditional={""}
          iceCream={"Especial"}
          alcoholic={"Alcoólico"}
          typeCoffe={"Irlândes"}
          fraseCoffe={"Bebida a base de café, uísque"}
          subfraseCoffe={"irlandês, açucar e chantilly"}
          coin={"R$"}
          price={"9,90"}
        />
      </ContainerCards>
    </ContainerHome>
  );
}
