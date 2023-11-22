import React from "react";
import ReactDOM from "react-dom";
import App from "./_app";

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

// import React, { useEffect } from "react";

function Appp() {
  useEffect(() => {
    if (typeof document !== "undefined") {
      // Your code that uses `document` can go here
      // For example:
      const rootElement = document.getElementById("root");
      if (rootElement) {
        const rootElement = document.getElementById("root");
        ReactDOM.render(<App />, rootElement);
        // Do something with the root element
      }
    }
  }, []);

  return (
    // Your component's JSX
    ""
  );
}

export default Appp;
