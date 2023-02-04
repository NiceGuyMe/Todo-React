import React from "react";
import { TodoInput } from "./TodoInput";
import renderer from "react-test-renderer";

it("rend correctement", () => {
  const tree = renderer.create(<TodoInput />).toJSON();
  expect(tree).toMatchSnapshot();
});
