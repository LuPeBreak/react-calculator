import React from "react";

import { InputContainer } from "./styles";

function Input({ value }) {
  return (
    <InputContainer className="App">
      <input value={value} disabled />
    </InputContainer>
  );
}

export default Input;
