import React from "react";
import ReactDOM from "react-dom";
import { shallow, mount } from "enzyme";
import sinon from "sinon";
import { Controls } from "./../components";

const style = { fontSize: 12, color: "red" };
const handleChange = () => null;

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Controls style={style} handleChange={handleChange} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("displaying input fields", () => {
  it("always shows the size input", () => {
    const controls = shallow(
      <Controls style={style} handleChange={handleChange} />
    );
    expect(controls.find(".fontSize").length).toEqual(1);
  });

  it("shows the colorpicker on click", () => {
    const controls = shallow(
      <Controls style={style} handleChange={handleChange} />
    );
    const colorButton = controls.find(".toggle-colorpicker");

    expect(controls.state("showColorPicker")).toEqual(false);
    expect(controls.find(".colorpicker").length).toEqual(0);

    colorButton.simulate("click");

    expect(controls.state("showColorPicker")).toEqual(true);
    expect(controls.find(".colorpicker").length).toEqual(1);
  });
});

describe("uses props as default values", () => {
  it("for size input", () => {
    const controls = mount(
      <Controls style={style} handleChange={handleChange} />
    );

    expect(controls.find(".fontSize").instance().value).toEqual("12");
  });
});

describe("updates the values", () => {
  const spyHandleChange = sinon.spy();
  const controls = shallow(
    <Controls handleChange={spyHandleChange} style={style} />
  );
  const fontSizeInput = controls.find(".fontSize");

  it("returns all values with updated fontSize", () => {
    fontSizeInput.simulate("change", { target: { value: "7" } });

    expect(spyHandleChange.calledOnceWith({ color: "red", fontSize: 7 })).toBe(
      true
    );
  });
});
