import React from 'react';

interface Style {
  fontSize: number
}

interface Props {
  fontSize: number,
  handleChange: ((value: Style) => void)
}

export class Controls extends React.Component<Props, {}> {
  handleChange(attr: string, event: any) {
    this.props.handleChange({ [attr]: parseInt(event.target.value) } as Pick<Style, keyof Style>)
  }

  render() {
    return (
      <div>
        <label>Size</label>
        <input
          type="number"
          value={this.props.fontSize}
          onChange={(e) => this.handleChange('fontSize', e)}
        />
      </div>
    );
  }
}
