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
import { useQuantity } from "../../../../Contexts/QuantityContext";

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

interface CardProps extends PropsCard {
  cardId: string;
}

export function Card({
  cardId,
  src,
  traditional,
  iceCream,
  alcoholic,
  typeCoffe,
  fraseCoffe,
  subfraseCoffe,
  coin,
  price,
}: CardProps) {
  const { quantities, updateQuantity } = useQuantity();
  const quantity = quantities[cardId] || 0;

  const increaseQuantity = () => {
    updateQuantity(cardId, quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      updateQuantity(cardId, quantity - 1);
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
