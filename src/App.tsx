import React, { useState } from "react";
import { Controls, Converter, H1, Paragraph } from "./components";
import { Style } from "./interfaces";
import "./App.css";

export default () => {
  const [h1, setH1] = useState<Style>({ fontSize: 26, color: "blue" });
  const [paragraph, setParagraph] = useState<Style>({
    fontSize: 16,
    color: "green"
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
