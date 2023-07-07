import { ShoppingCart, MapPin } from "@phosphor-icons/react";

import { ContainerNavbar, ContainerLocationCart, Map, Cart } from "./styles";

export function Navbar() {
  return (
    <ContainerNavbar>
      <img src="../src/assets/logo.svg" alt="Logo da página" />
      <ContainerLocationCart>
        <Map>
          <MapPin size={22} />
          <p>Nova Iguaçu, RJ</p>
        </Map>
        <Cart>
          <ShoppingCart size={22} />
        </Cart>
      </ContainerLocationCart>
    </ContainerNavbar>
  );
}
