import React from "react";
import ReactDOM from "react-dom";
import { mount } from "enzyme";

import { squeeze } from "../setupTests.js";
import { Converter } from "./../components";

const h1 = { fontSize: 26, color: "blue" };
const p = { fontSize: 12, color: "red" };

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Converter h1={h1} p={p} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("shows formatted css", () => {
  const converter = mount(<Converter h1={h1} p={p} />);

  const expected = `
    h1 {
      font-size: 26
      color: blue
    }`;

  const actual = converter.find(".tag.h1").text();

  expect(squeeze(actual)).toMatch(squeeze(expected));
});
