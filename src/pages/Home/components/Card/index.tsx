import { ShoppingCart, Plus, Minus } from "@phosphor-icons/react";
import {
  Alcoholic,
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
  Traditional,
  TypeCoffe,
  IceCream,
  Container,
} from "./styles";
import { useState } from "react";

interface PropsCard {
  src: string;
  traditional: string;
  iceCream: string;
  alcoholic: string;
  typeCoffe: string;
  fraseCoffe: string;
  subfraseCoffe: string;
  coin: string;
  price: string;
}

export function Card({
  src,
  traditional,
  iceCream,
  alcoholic,
  typeCoffe,
  fraseCoffe,
  subfraseCoffe,
  coin,
  price,
}: PropsCard) {
  const [quantity, setQuantity] = useState(0);

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };
  return (
    <Container>
      <CardContainer>
        <Header>
          <img src={src} />
          <TypeCoffe>
            {traditional && <Traditional>{traditional}</Traditional>}
            {iceCream && <IceCream>{iceCream}</IceCream>}
            {alcoholic && <Alcoholic>{alcoholic}</Alcoholic>}
          </TypeCoffe>
        </Header>
        <ContentCard>
          <Title>{typeCoffe}</Title>

          <Subtitle>
            <span>{fraseCoffe} </span>
            <span>{subfraseCoffe}</span>
          </Subtitle>
        </ContentCard>

        <CardFooter>
          <ContentCounter>
            <CoffeValue>
              <span>{coin}</span>
              <p>{price}</p>
            </CoffeValue>

            <Counter>
              <ButtonNegative onClick={decreaseQuantity}>
                <Minus size={14} color="purple" />
              </ButtonNegative>
              <span>{quantity}</span>
              <ButtonPositive onClick={increaseQuantity}>
                <Plus size={14} color="purple" />
              </ButtonPositive>
            </Counter>

            <CartShopping>
              <ShoppingCart size={22} color="white" weight="fill" />
            </CartShopping>
          </ContentCounter>
        </CardFooter>
      </CardContainer>
    </Container>
  );
}
