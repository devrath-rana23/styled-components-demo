import React from "react";
import styled, { css } from "styled-components";

//object attrs does not allow other types so use function instaead
// const Button = styled.button.attrs({
//   type: "button",
// })`
const Button = styled.button.attrs(({ type = "button" }) => {
  return { type };
})`
  background: violet;
  border: none;
  color: white;
  padding: 0.25rem;
  cursor: pointer;
  ${({ type }) => {
    return (
      type === "submit" &&
      css`
        display: "block";
        width: 100%;
        margin-top: 1rem;
        border-radius: 0.25rem;
      `
    );
  }}
`;

const BasicInput = styled.input.attrs(
  ({ type = "text", placeholder = "Please input value" }) => {
    return {
      type,
      placeholder,
    };
  }
)`
  box-sizing: border-box;
  padding: 0.5rem;
  border: 2px solid #f2f4f8;
  border-radius: 0.25rem;
  width: 100%;
  margin-top: 1rem;
`;

const Form = () => {
  return (
    <Wrapper>
      <h1>Some Random Stuff</h1>
      <Button>Click Me</Button>
      <form>
        <h2>Form</h2>
        <BasicInput/>
        <Button type="submit">Submit Here</Button>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  form {
    width: 300px;
    background: #fff;
    padding: 2rem;
    margin-top: 1rem;
  }
`;

export default Form;
