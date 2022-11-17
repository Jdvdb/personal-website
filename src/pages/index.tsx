import React from "react";
import { ThemeProvider } from "styled-components";
import Main from "../components/Main";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Experience from "../components/experience/Experience";
import Projects from "../components/projects/Projects";
import Footer from "../components/contact/Footer";
import GlobalStyle from "../styles/globalStyles";
import Logo from "../images/Logo.svg";
import { darkTheme, lightTheme } from "../styles/globalStyles";
import type { HeadProps } from "gatsby";

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
          <Hero handler={setColourTheme} />
          <About />
          <Experience />
          <Projects />
          <Footer />
        </Main>
      </section>
    </ThemeProvider>
  );
};

export default IndexPage;

const SEO = () => {
  return (
    <>
      <title>Jordan Van Den Bruel | Developer</title>
      <link key="icon" rel="icon" href={Logo} />
    </>
  );
};

export function Head(props: HeadProps) {
  return <SEO />;
}
