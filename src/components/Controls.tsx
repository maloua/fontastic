import React from 'react';
import { ChromePicker } from 'react-color';
import { Style } from './../interfaces'

interface State {
  showColorPicker: boolean
}

interface Props extends Style {
  handleChange: ((value: Style) => void)
}

export class Controls extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      showColorPicker: false
    }
  }

  toggleColorPicker() {
    this.setState({ showColorPicker: !this.state.showColorPicker })
  }

  handleChange(attr: string, value: any) {
    this.props.handleChange({ ...this.props, [attr]: value } as Pick<Style, keyof Style>)
  }

  render() {
    const { fontSize, color } = this.props
    return (
      <div>
        <div>
          <label>Size</label>
          <input
          type="number"
          value={fontSize}
          onChange={(e) => this.handleChange('fontSize', Number(e.target.value))}
          />
        </div>

        <div>
          <label>Color</label>
          <button onClick={() => this.toggleColorPicker()}>Toggle colorpicker</button>
          { this.state.showColorPicker &&
            <ChromePicker
            color={color}
            onChange={color => this.handleChange('color', color.hex)}
            />
          }
        </div>
      </div>
    );
  }
}
