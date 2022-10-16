const React = require("react");

exports.onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    <script
      dangerouslySetInnerHTML={{
        __html: `function getBrowserColour() {
            const localStorageColour = window.localStorage.getItem("color-mode");

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
          
          root.style.setPropert("--colour-background", colorMode == 'light' ? '#E9E6FF' : '#0A0903');`,
      }}
    />,
  ]);
};
