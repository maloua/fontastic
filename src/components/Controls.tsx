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
    const {
      fontSize,
      color,
      fontStyle,
      fontWeight,
      textTransform,
      textDecoration,
      textAlign,
      lineHeight,
      letterSpacing,
      wordSpacing,
      whiteSpace
    } = this.props.style;

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

        <div>
          <label>fontStyle</label>
          <select
            value={fontStyle}
            onChange={e => this.handleChange("fontStyle", e.target.value)}
          >
            <option value="normal">Normal</option>
            <option value="italic">Italic</option>
            <option value="oblique">Oblique</option>
          </select>
        </div>

        <div>
          <label>fontWeight</label>
          <select
            value={fontWeight}
            onChange={e => this.handleChange("fontWeight", e.target.value)}
          >
            <option value="100">100 (thin)</option>
            <option value="200">200 (extra light)</option>
            <option value="300">300 (light)</option>
            <option value="400">400 (normal)</option>
            <option value="500">500 (medium)</option>
            <option value="600">600 (semi bold)</option>
            <option value="700">700 (bold)</option>
            <option value="800">800 (extra bold)</option>
            <option value="900">900 (black)</option>
          </select>
        </div>
        <div>
          <label>textTransform</label>
          <select
            value={textTransform}
            onChange={e => this.handleChange("textTransform", e.target.value)}
          >
            <option value="none">none</option>
            <option value="uppercase">uppercase</option>
            <option value="lowercase">lowercase</option>
            <option value="capitalize">capitalize</option>
            <option value="full-width">full-width</option>
          </select>
        </div>

        <div>
          <label>textDecoration</label>
          <select
            value={textDecoration}
            onChange={e => this.handleChange("textDecoration", e.target.value)}
          >
            <option value="none">none</option>
            <option value="underline">underline</option>
            <option value="overline">overline</option>
            <option value="line-through">line-through</option>
          </select>
        </div>

        <div>
          <label>textAlign</label>
          <select
            value={textAlign}
            onChange={e => this.handleChange("textAlign", e.target.value)}
          >
            <option value="left">left</option>
            <option value="right">right</option>
            <option value="center">center</option>
            <option value="justify">justify</option>
          </select>
        </div>

        <div>
          <label>lineHeight</label>
          <input
            className="lineHeight"
            type="number"
            value={lineHeight}
            onChange={e =>
              this.handleChange("lineHeight", Number(e.target.value))
            }
          />
        </div>

        <div>
          <label>letterSpacing</label>
          <input
            className="letterSpacing"
            type="number"
            value={letterSpacing}
            onChange={e =>
              this.handleChange("letterSpacing", Number(e.target.value))
            }
          />
        </div>

        <div>
          <label>wordSpacing</label>
          <input
            className="wordSpacing"
            type="number"
            value={wordSpacing}
            onChange={e =>
              this.handleChange("wordSpacing", Number(e.target.value))
            }
          />
        </div>

        <div>
          <label>whiteSpace</label>
          <select
            value={whiteSpace}
            onChange={e => this.handleChange("whiteSpace", e.target.value)}
          >
            <option value="normal">normal</option>
            <option value="nowrap">nowrap</option>
            <option value="pre">pre</option>
            <option value="pre-wrap">pre-wrap</option>
            <option value="pre-line">pre-line</option>
            <option value="break-spaces">break-spaces</option>
          </select>
        </div>
      </div>
    );
  }
}
