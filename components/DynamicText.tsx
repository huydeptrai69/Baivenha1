import React, { useState,forwardRef } from "react";

const DynamicText = forwardRef((props, ref ) => {
  const [value, setValue] = useState("Random Text");

  const changeValue = (newValue) => {
    setValue(newValue);
  };

  return <h1>{value}</h1>;
});

export default DynamicText;
