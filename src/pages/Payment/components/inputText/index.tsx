import { InputValue } from "./styles";

interface InputValue {
  type: string;
  palceholder: string;
  width: {};
}

export function Input(props: InputValue) {
  return (
    <InputValue
      type={props.type}
      placeholder={props.palceholder}
      style={props.width}
    />
  );
}
