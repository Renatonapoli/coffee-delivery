import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding:0;
  box-shadow: border-box;
}

:focus {
  outline: 0;
  box-shadow: 1px ${(props) => props.theme['yellow-dark']};
}

body {
  background: ${(props) => props.theme.white};
  color: ${(props) => props.theme['gray-900']};
  -webkit-font-smoothing: antialiased

}

body, input, textarea, button {
 font-family: 'Roboto', sans-serif;
 font-weight: 400;
 font-size: 1rem;
}

`