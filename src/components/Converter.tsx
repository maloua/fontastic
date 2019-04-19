import React from "react";
import { Style } from "./../interfaces";

export class Converter extends React.Component<{ [key: string]: Style }, {}> {
  formatProperty(property: string) {
    return property.replace(/([a-zA-Z])(?=[A-Z])/g, "$1-").toLowerCase();
  }

  renderProperty(property: string, value: string | number, key: number) {
    return (
      <span key={key}>
        &nbsp;&nbsp;
        {this.formatProperty(property)}: {value}
      </span>
    );
  }

  renderTag(tag: string) {
    const style: Style = this.props[tag];
    const properties: string[] = Object.keys(style);

    return (
      <React.Fragment>
        <span>{tag + " {"}</span>
        {properties.map((p, i) => this.renderProperty(p, style[p], i))}
        <span>{" }"}</span>
      </React.Fragment>
    );
  }

  render() {
    const tags: string[] = ["h1", "p"];

    return tags.map((tag, i) => (
      <div key={i} className={"tag " + tag}>
        {this.renderTag(tag)}
      </div>
    ));
  }
}
