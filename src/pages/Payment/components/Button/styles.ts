import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  padding: 1rem;
  align-items: center;
  margin-inline-start: 0.75rem;
  gap: 12px;
  flex: 1 0 0;

  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  text-transform: uppercase;

  border-radius: 6px;
  border: none;
  background: ${(props) => props.theme["gray-400"]};

  cursor: pointer;
`;
