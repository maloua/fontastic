import React from "react";
import { Helmet } from "react-helmet";

export class GoogleFonts extends React.Component<{ usedFonts: string[] }, {}> {
  addWeights(font: string) {
    const weights = "100,200,300,400,500,600,700,800,900";

    return `${font}:${weights}`;
  }

  formatFontsUrl(fonts: string[]) {
    return [...new Set(fonts)].join("|").replace(/\s/g, "+");
  }

  render() {
    const { usedFonts } = this.props;
    const weightedFonts = usedFonts.map(font => this.addWeights(font));
    const formattedFonts = this.formatFontsUrl(weightedFonts);

    return (
      <Helmet>
        <link
          href={`https://fonts.googleapis.com/css?family=${formattedFonts}`}
          rel="stylesheet"
        />
      </Helmet>
    );
  }
}
