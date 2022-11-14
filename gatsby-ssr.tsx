const React = require("react");

exports.onRenderBody = ({
  setPreBodyComponents,
  setHtmlAttributes,
  setHeadComponents,
}) => {
  setPreBodyComponents([
    <script
      key="theme-script"
      dangerouslySetInnerHTML={{
        __html: `function getBrowserColour() {
            const localStorageColour = window.localStorage.getItem("colour-mode");

            if (typeof localStorageColour === "string") {
              return localStorageColour;
            }
            const mediaQueryColour = window.matchMedia("(prefers-color-scheme: dark)");
            if (typeof mediaQueryColour.matches === "boolean") {
              return mediaQueryColour.matches ? "dark" : "light";
            }
            return "light";
          }

          const colourMode = getBrowserColour();

          const root = document.documentElement;

          root.style.setProperty("--colour-mode", colourMode);
          
          root.style.setProperty("--colour-background", colourMode === 'light' ? '#E9E6FF' : '#0A0903');`,
      }}
    />,
    <style key="theme-style">
      {`body {
      background: var(--colour-background);
      height: 100vh;
      }`}
    </style>,
  ]);
  setHtmlAttributes({ lang: "en" });
  setHeadComponents([
    <meta
      key="meta-description"
      name="description"
      content="Learn about a computing science student that's always looking to learn and ready to make a difference!"
    />,
  ]);
};
