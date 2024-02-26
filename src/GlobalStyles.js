import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root{
  --primary-box:1px solid black
}
body {
  margin: 0;
  font-family: "Kurale", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.title{
  color:blueviolet !important;
  font-size:1.5rem
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`;

export default GlobalStyles;
