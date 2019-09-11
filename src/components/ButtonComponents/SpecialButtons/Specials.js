import React, { useState } from "react";
import SpecialButton from "../SpecialButtons";
import { specials } from "../../../data";
//import any components needed

//Import your array data to from the provided data file

const Specials = (props) => {
  // STEP 2 - add the imported data to state
  const [specialState] = useState(specials)
  return (
    <div>
      {specialState.map((specials, i) =>
        <SpecialButton specials={specials} key={i} />
      )}
    </div>
  );
};

export default Specials;