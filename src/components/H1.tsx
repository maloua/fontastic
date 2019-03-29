import React from 'react';
import { Controls } from './Controls'

interface State {
  fontSize: number
}

export class H1 extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      fontSize: 24
    }
  }

  render() {
    return (
      <div className="h1">
        <Controls
          {...this.state}
          handleChange={updatedValue => this.setState(updatedValue)}
        />

        <h1 style={{...this.state}}>Ey up bloody mary</h1>
      </div>
    );
  }
}
