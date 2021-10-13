import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div id="footer">
      <div className="footer-1">
        This app uses the API/data from the Dictionary API <span> </span>
        <FontAwesomeIcon icon="code" /> <span> </span>:
        <br />
        <a href="https://dictionaryapi.dev">https://dictionaryapi.dev</a>
      </div>

      <div className="footer-2">
        The Dictionary API GitHub <span> </span>
        <FontAwesomeIcon icon={["fab", "github"]} /> <span> </span>:
        <br />
        <a href="https://github.com/meetDeveloper/freeDictionaryAPI">
          https://github.com/meetDeveloper/freeDictionaryAPI
        </a>
      </div>
    </div>
  );
};

export default Footer;
