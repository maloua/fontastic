import React, { useState } from 'react';
import { Controls, H1, Paragraph } from './components';
import { Style } from './interfaces'
import './App.css';

interface State {
  paragraph: Style,
  h1: Style
}

export default () => {
  const [h1, setH1] = useState<Style>({fontSize: 26})
  const [paragraph, setParagraph] = useState<Style>({fontSize: 16})

  return (
    <div>
      <Controls {...h1} handleChange={(e: Style) => setH1(e) } />
      <H1 {...h1} />

      <Controls {...paragraph} handleChange={(e: Style) => setParagraph(e) } />
      <Paragraph {...paragraph} />
    </div>
  )
}
