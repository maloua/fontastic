import React from 'react';
import { Controls } from './Controls'

interface State {
  fontSize: number
}

export class Paragraph extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      fontSize: 16
    }
  }

  render() {
    const styles = {
      fontSize: this.state.fontSize
    }

    return (
      <div className="paragraph">
        <Controls
          {...this.state}
          handleChange={updatedValue => this.setState(updatedValue)}
        />

        <p style={styles}>
          Pommy ipsum shepherd's pie full English breakast chips have a butcher's at this therewith air one's dirty linen, unhand me sir Kate and Will loo bugger driving a mini a cuppa. Alright geezer ever so bow ties are cool have a gander yorkshire pudding give you a bell slappers, picalilly Sonic Screwdriver at the boozer baffled see a man about a dog flabbergasted, chin up bowler hat porky-pies River Song got a lot of brass. Ey up bloody mary The Doctor black cab lass pork dripping yorkshire mixture cotton on, in the jacksy bag egg's old boy a cuppa shortbread spam fritters squirrel.
        </p>
      </div>
    );
  }
}
