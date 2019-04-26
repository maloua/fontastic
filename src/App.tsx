import React, { useState } from "react";
import { Controls, Converter, H1, Paragraph } from "./components";
import { Style } from "./interfaces";
import "./App.css";

const baseStyle = {
  color: "#111",
  fontStyle: "normal",
  fontWeight: "normal",
  textTransform: "none",
  textDecoration: "none",
  textAlign: "left",
  lineHeight: 1.5,
  letterSpacing: 0,
  wordSpacing: 0,
  whiteSpace: "normal"
};

export default () => {
  const [h1, setH1] = useState<Style>({
    ...baseStyle,
    fontSize: 26
  });
  const [paragraph, setParagraph] = useState<Style>({
    ...baseStyle,
    fontSize: 16
  });

  return (
    <div>
      <Controls style={h1} handleChange={setH1} />
      <H1 style={h1} />

      <Controls style={paragraph} handleChange={setParagraph} />
      <Paragraph style={paragraph} />

      <Converter h1={h1} p={paragraph} />
    </div>
  );
};
