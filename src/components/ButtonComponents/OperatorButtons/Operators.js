import React, { useState } from "react";
import OperatorButton from "../OperatorButtons";
import { operators } from "../../../data";
//import any components needed

//Import your array data to from the provided data file

export const Operators = (props) => {
  // STEP 2 - add the imported data to state
  const [operatorState] = useState(operators)
  return (
    <div>
      {operatorState.map((operators, i =>
        <OperatorButton operators={operators} key={i}/>
      ))}
    </div>
  );
};

export default Operators;