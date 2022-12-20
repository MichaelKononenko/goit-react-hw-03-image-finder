import '@csstools/normalize.css';
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: inherit;
}
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  color: #212121;
  background-color: #fff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
ul{
  padding: 0;
  margin: 0;
}
h1,
h2,
h3,
p {
  margin: 0;
}

html {
  box-sizing: border-box;
  width: 100vw;
  overflow-x: hidden;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}
`;
