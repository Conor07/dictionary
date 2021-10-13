import React from "react";

const CardTitle = ({ text }) => {
  return (
    <div className="card-title-container">
      <span className="card-title-text">"{text}"</span>
    </div>
  );
};

export default CardTitle;
