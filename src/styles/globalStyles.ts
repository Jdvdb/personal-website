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

export const GlobalStyle = createGlobalStyle`
body {
    background: ${props => props.theme.background};
    overflow-x: hidden;
    overflow-y: overlay;
    margin: 0;
}

&::-webkit-scrollbar {
    width: 16px;
    background: rgba(0, 0, 0, 0);
}

&::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.text};
    border-radius: 20px;
    border: 6px solid rgba(0, 0, 0, 0);
    background-clip: padding-box;
}`

export {darkTheme, lightTheme}

