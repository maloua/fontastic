import React from 'react';
import { Style } from './../interfaces'

interface Props extends Style {
  handleChange: ((value: Style) => void)
}

export class Controls extends React.Component<Props, {}> {
  handleChange(attr: string, value: any) {
    this.props.handleChange({ ...this.props, [attr]: value } as Pick<Style, keyof Style>)
  }

  render() {
    const { fontSize, color } = this.props
    return (
      <div>
        <label>Size</label>
        <input
          type="number"
          value={fontSize}
          onChange={(e) => this.handleChange('fontSize', Number(e.target.value))}
        />

        <label>Color</label>
        <input
          value={color}
          onChange={(e) => this.handleChange('color', e.target.value)}
        />
      </div>
    );
  }
}
