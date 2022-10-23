import React from "react";
import { ThemeProvider } from "styled-components";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Experience from "../components/experience/Experience";
import GlobalStyle from "../styles/globalStyles";
import { darkTheme, lightTheme } from "../styles/globalStyles";

const IndexPage = () => {
  const [colourTheme, setColourTheme] = React.useState("");

  React.useEffect(() => {
    const root = window.document.documentElement;

    const initialColour = root.style.getPropertyValue("--colour-mode");

    setColourTheme(initialColour);
  }, []);

  return (
    <ThemeProvider theme={colourTheme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <section>
        <Navbar />
        <Main>
          <Hero />
          <About />
          <Experience />
          <input
            type="checkbox"
            checked={colourTheme === "light"}
            onChange={(e) => {
              setColourTheme(e.target.checked ? "light" : "dark");
              const newTheme = e.target.checked ? "light" : "dark";
              const root = window.document.documentElement;
              localStorage.setItem("colour-mode", newTheme);
              root.style.setProperty("--colour-mode", newTheme);
            }}
          />
        </Main>
      </section>
    </ThemeProvider>
  );
};

export default IndexPage;
