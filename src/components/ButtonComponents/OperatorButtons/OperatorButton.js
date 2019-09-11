import React from "react";

export const OperatorButton = (props) => {
  return (
    <>
      {<button /*className="btn-number"*/>
        {props.opertors}
      </button>}
    </>
  );
};

export default OperatorButton;