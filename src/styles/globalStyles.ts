import { DefaultTheme, createGlobalStyle } from "styled-components"

const darkTheme: DefaultTheme = {
    background: '#0A0903',
    secondary: '#2E2E2E',
    highlight: '#077187',
    text: '#FFEAAE',
};

const lightTheme: DefaultTheme = {
    background: '#E9E6FF',
    secondary: '#F6F6F6',
    highlight: '#ABA9BF',
    text: '#077187',
};

const GlobalStyle = createGlobalStyle`
body {
    background: ${props => props.theme.background};
    overflow-x: hidden;
    overflow-y: overlay;
    margin: 0;
    font-family: "Lato";
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

