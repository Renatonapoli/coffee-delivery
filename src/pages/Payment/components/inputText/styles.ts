import { styled } from "styled-components";

export const InputValue = styled.input`
  display: flex;
  max-width: 40rem;
  padding: 0.75rem;
  align-items: center;
  margin-bottom: 1rem;
  gap: 4px;

  border-radius: 4px;
  border: 1px solid ${(props) => props.theme["gray-400"]};
  background: ${(props) => props.theme["gray-300"]};
`;
