import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        background: string;
        secondary: string;
        highlight: string;
        text: string; 
        link: string;
    }
}