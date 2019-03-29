import React from 'react';
import { H1, Paragraph } from './components';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <H1 />
        <Paragraph />
      </div>
    );
  }
}

export default App;
