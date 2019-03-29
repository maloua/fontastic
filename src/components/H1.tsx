import React from 'react';
import { Style } from '../interfaces'

export class H1 extends React.Component<Style, {}> {
  render() {
    return (
      <div className="h1">
        <h1 style={{...this.props}}>Ey up bloody mary</h1>
      </div>
    );
  }
}
