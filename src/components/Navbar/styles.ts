import styled from 'styled-components'

export const ContainerNavbar = styled.div`
 display: flex;
 justify-content: space-between;

 align-items: center;

 img {
  font-size: 2.5rem;
 }
`

export const ContainerLocationCart = styled.div`
display: flex;
align-items: center;


`

export const Map = styled.span`
display: flex;
align-items: center;
margin-right: 0.8rem;

width: 8.938rem;
height: 2.375rem;
border-radius: 6px;
justify-content: center;

background: ${(props) => props.theme['purple-light']};

font-size: 0.75rem;

`

export const Cart = styled.button`
width: 2.375rem;
height: 2.375rem;
border-radius: 6px;
border: none;
cursor: pointer;

background: ${(props) => props.theme['yellow-ligth']};

display: flex;
justify-content: center;
align-items: center;
`