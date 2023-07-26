import { ShoppingCart, MapPin } from "@phosphor-icons/react";
import { useQuantity } from "../../Contexts/QuantityContext";
import { ContainerNavbar, ContainerLocationCart, Map, Cart } from "./styles";
import { Link } from "react-router-dom";

interface NavbarProps {}

export function Navbar({}: NavbarProps) {
  const { totalQuantity } = useQuantity();
  return (
    <ContainerNavbar>
      <div>
        <img src="../src/assets/logo.svg" alt="Logo da página" />
        <ContainerLocationCart>
          <Map>
            <MapPin size={22} color="#8047f8" weight="fill" />
            <p>Nova Iguaçu, RJ</p>
          </Map>
          <Link to={"/pagamento"}>
            <Cart>
              <ShoppingCart size={22} color="#C47f17" weight="fill" />
              <div>
                <span>{totalQuantity}</span>
              </div>
            </Cart>
          </Link>
        </ContainerLocationCart>
      </div>
    </ContainerNavbar>
  );
}
