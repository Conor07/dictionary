import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Logo = () => {
  return (
    <div className="logo-container">
      <div id="logo">
        <span className="logo-text">word curiosity </span>

        <FontAwesomeIcon icon="book-open" />
      </div>
    </div>
  );
};

export default Logo;
