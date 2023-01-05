import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

a {
font-weight: 500;
color: #3b7197;
text-decoration: inherit;
}

#app{
  height: 100%;
}
html,
body {
  min-height: 100vh;
  position: relative;
  box-sizing: border-box;
  margin: 0 !important;
  padding: 0;
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  min-height: 100vh;
  min-width: 100vw;
}

h1 {
  margin: 0;
  padding: 0;
  line-height: 1.1;
}

button {
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

nav a.active{
  color: #9f1f00;
  pointer-events: none;
  cursor: default;
}

@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
  a:hover {
    color: #747bff;
  }
  button {
    background-color: #f9f9f9;
  }
}`;

export default GlobalStyle;
