import { styled } from "styled-components";

export const ContainerConfirmed = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  margin-top: 5rem;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
`;

export const CardInformations = styled.div`
  display: flex;
  margin-top: 2.5rem;
  width: 27.875rem;
  padding: 2.5rem;
  margin-right: 10rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;

  border-radius: 6px 36px;
  border: 1px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(
    to right,
    ${(props) => props.theme.yellow},
    ${(props) => props.theme.purple}
  );
`;

export const Section = styled.section`
  display: flex;

  justify-content: flex-start;
`;

export const Ilustration = styled.img`
  display: flex;
  width: 30.75rem;
  height: 18.313rem;
  flex-shrink: 0;
`;
