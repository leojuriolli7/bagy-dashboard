import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`

:root {
    --pink: #FC3C8D; 
    --blue: #2F80ED;
    --yellow: #FEC400;
    --gren: #219653;
    --black: #252733;
    --grey: #9fa2b4;
    --light-grey: #DFE0EB;
    --dark-grey: #677371;

  }

  * { 
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

  html {
    @media (max-width: 1080px){
      font-size: 93.75%; //15px
    }
    @media (max-width: 720px) {
      font-size: 87.5%; //14px
    }
  }

  button {
    cursor: pointer;
  }

  body, input, textarea, button {
  font-family: "Mulish", sans-serif;
	font-weight: 400; 
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600; 
  }

`;
