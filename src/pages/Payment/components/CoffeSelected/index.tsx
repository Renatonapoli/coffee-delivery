import { Minus, Plus, Trash } from "@phosphor-icons/react";
import {
  ButtonMin,
  ButtonPlus,
  ButtonRemove,
  ContainerButtons,
  ContainerCoffes,
  CountQuantityCoffe,
  Division,
  Header,
  TitleCoffe,
  ValueCoffe,
} from "./styles";

export function Coffe() {
  return (
    <>
      <ContainerCoffes>
        <div>
          <img src="../../src/assets/illustrations/capuccino.svg" alt="" />
        </div>
        <Header>
          <TitleCoffe>Expresso Tradicional</TitleCoffe>
          <ContainerButtons>
            <div>
              <ButtonPlus>
                <Plus size={16} color="#8047f8" />
              </ButtonPlus>
              <CountQuantityCoffe>1</CountQuantityCoffe>
              <ButtonMin>
                <Minus size={16} color="#8047f8" />
              </ButtonMin>
            </div>
            <ButtonRemove>
              <Trash size={16} color="#8047f8" />
              Remover
            </ButtonRemove>
          </ContainerButtons>
        </Header>
        <ValueCoffe>R$ 9,90</ValueCoffe>
      </ContainerCoffes>
      <Division />
    </>
  );
}
