import {
  ButtonMin,
  ButtonPlus,
  ButtonRemove,
  ContainerButtons,
  ContainerCoffes,
  Header,
} from "./styles";

export function Coffe() {
  return (
    <ContainerCoffes>
      <img src="../../src/assets/illustrations/capuccino.svg" alt="" />
      <Header>
        <ContainerButtons>
          <h1>Expresso Tradicional</h1>
          <div>
            <ButtonPlus>+</ButtonPlus>
            <span>1</span>
            <ButtonMin>-</ButtonMin>
          </div>
          <ButtonRemove>Remover</ButtonRemove>
        </ContainerButtons>
      </Header>
      <p>R$ 9,90</p>
    </ContainerCoffes>
  );
}
