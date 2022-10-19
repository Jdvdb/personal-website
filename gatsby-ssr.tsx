const React = require("react");

exports.onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    <script
      dangerouslySetInnerHTML={{
        __html: `function getBrowserColour() {
            console.log("getBrowserColour launch. Check local storage");
            const localStorageColour = window.localStorage.getItem("colour-mode");
            console.log(localStorageColour);

            if (typeof localStorageColour === "string") {
              return localStorageColour;
            }
            console.log("no local storage. check MQ");
            const mediaQueryColour = window.matchMedia("(prefers-color-scheme: dark)");
            console.log(mediaQueryColour);
            if (typeof mediaQueryColour.matches === "boolean") {
              return mediaQueryColour.matches ? "dark" : "light";
            }
            console.log("nothing found, return light");
            return "light";
          }

          const colourMode = getBrowserColour();

          const root = document.documentElement;

          root.style.setProperty("--colour-mode", colourMode);
          
          root.style.setProperty("--colour-background", colourMode === 'light' ? '#E9E6FF' : '#0A0903');`,
      }}
    />,
    <style>
      {`body {
      background: var(--colour-background);
      height: 100vh;
      }`}
    </style>,
  ]);
};
