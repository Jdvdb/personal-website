import { DefaultTheme, createGlobalStyle } from "styled-components"
import "@fontsource/lato"

const darkTheme: DefaultTheme = {
    background: '#0A0903',
    secondary: '#2E2E2E',
    highlight: '#077187',
    text: '#FFEAAE',
    link: '#F6F6F6',
};

const lightTheme: DefaultTheme = {
    background: '#E9E6FF',
    secondary: '#F6F6F6',
    highlight: '#0BB7DA',
    text: '#03313A',
    link: '#141414',
};

const GlobalStyle = createGlobalStyle`
html {
    scroll-behavior: smooth;
}
body {
    background: ${props => props.theme.background};
    overflow-x: hidden;
    overflow-y: overlay;
    margin: 0;
    font-family: "Lato";
    line-height: 1.3;
    @media (max-width: 768px) {
        font-size: 10px;
        line-height: 1.5;
      }
}

&::-webkit-scrollbar {
    width: 20px;
    background: rgba(0, 0, 0, 0);
}

&::-webkit-scrollbar-thumb {
    background: ${props => props.theme.text};
    border-radius: 20px;
    border: 6px solid rgba(0, 0, 0, 0);
    background-clip: padding-box;
}`

export default GlobalStyle;

export {darkTheme, lightTheme}

