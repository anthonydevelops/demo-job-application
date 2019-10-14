import React, { useEffect } from "react";

export default function Home() {
  // On initial load, call embedded script
  useEffect(() => {
    const script = document.createElement("script");

    script.type = "text/javascript";
    script.src =
      "https://c0dco635.caspio.com/dp/e750800040c9797efccb4ca1be2f/emb";
    script.async = true;

    // Load script
    const div = document.body.querySelector("#load_content");
    div.appendChild(script);
  }, []);

  return (
    <div className="content">
      <div id="load_results">
        <div id="load_content"></div>
      </div>
      <div className="cxkg">
        <a href="https://c0dco635.caspio.com/dp/e750800040c9797efccb4ca1be2f">
          Click here
        </a>{" "}
        to load this Caspio{" "}
        <a
          href="http://www.caspio.com"
          target="_blank"
          rel="noopener noreferrer"
          title="Cloud Database"
        >
          Cloud Database
        </a>
      </div>
      <div id="cbe750800040c9797efccb4ca1be2f">
        <a
          href="https://www.caspio.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Cloud Database
        </a>{" "}
        by Caspio
      </div>
    </div>
  );
}
