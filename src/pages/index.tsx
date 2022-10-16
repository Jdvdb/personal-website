import React from "react";
import { ThemeProvider } from "styled-components";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import { darkTheme, GlobalStyle, lightTheme } from "../styles/globalStyles";

const IndexPage = () => {
  const [colourTheme, setColourTheme] = React.useState("");

  React.useEffect(() => {
    const root = window.document.documentElement;

    const initialColour = root.style.getPropertyValue("--colour-mode");

    setColourTheme(initialColour);
  }, []);

  if (colourTheme === "") {
    return null;
  }
  return (
    <ThemeProvider theme={colourTheme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Navbar />
      <Main>
        <Hero />
        <input
          type="checkbox"
          checked={colourTheme === "light"}
          onChange={(e) => {
            setColourTheme(e.target.checked ? "light" : "dark");
          }}
        />
        <About />
      </Main>
    </ThemeProvider>
  );
};

export default IndexPage;
