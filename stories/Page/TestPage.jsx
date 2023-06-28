import React from "react";
import { Input } from "../Input/Input";

export const TestPage = () => {
  const handleText = (e) => {
    console.log("Handletest", e.target.name, e.target.value);
  };

  return (
    <>
      <h1>Test Page</h1>
      <Input name="email" onChange={handleText} strictMode dataType="email" />
    </>
  );
};
