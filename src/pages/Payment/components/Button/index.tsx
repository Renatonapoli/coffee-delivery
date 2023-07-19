import { Button } from "./styles";
import Icons from "@phosphor-icons/react";
interface PropsButton {
  title: string;
  icon: Icons.IconProps;
}

export function ButtonPayment(props: PropsButton) {
  return (
    <Button>
      <>{props.icon}</>
      {props.title}
    </Button>
  );
}
