import { Button } from "./styles";

interface PropsButton {
  title: string;
}

export function ButtonPayment(props: PropsButton) {
  return <Button>{props.title}</Button>;
}
