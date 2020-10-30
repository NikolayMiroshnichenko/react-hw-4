import React from "react";

const Buttom = ({onBack}) => (
  <div className="container">
    <button type="button" onClick={onBack} className="button-back">
      Back
    </button>
  </div>
);

export default Buttom;
