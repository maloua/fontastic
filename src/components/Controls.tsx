import React from "react";
import { ChromePicker } from "react-color";
import { Style } from "./../interfaces";

interface State {
  showColorPicker: boolean;
}

interface Props {
  handleChange: ((value: Style) => void);
  style: Style;
}

export class Controls extends React.Component<Props, State> {
  state = {
    showColorPicker: false
  };

  toggleColorPicker() {
    this.setState({ showColorPicker: !this.state.showColorPicker });
  }

  handleChange(attr: string, value: string | number) {
    const { handleChange, style } = this.props;

    handleChange({ ...style, [attr]: value });
  }

  render() {
    const { fontSize, color } = this.props.style;

    return (
      <div>
        <div>
          <label>Size</label>
          <input
            className="fontSize"
            type="number"
            value={fontSize}
            onChange={e =>
              this.handleChange("fontSize", Number(e.target.value))
            }
          />
        </div>

        <div>
          <label>Color</label>
          <button
            className="toggle-colorpicker"
            onClick={() => this.toggleColorPicker()}
          >
            Toggle colorpicker
          </button>
          {this.state.showColorPicker && (
            <div className="colorpicker">
              <ChromePicker
                color={color}
                onChange={color => this.handleChange("color", color.hex)}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}
