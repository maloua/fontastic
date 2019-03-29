import React from 'react';
import { Style } from '../interfaces'

export class Paragraph extends React.Component<Style, {}> {
  render() {
    return (
      <div className="paragraph">
        <p style={{...this.props}}>
          Pommy ipsum shepherd's pie full English breakast chips have a butcher's at this therewith air one's dirty linen, unhand me sir Kate and Will loo bugger driving a mini a cuppa. Alright geezer ever so bow ties are cool have a gander yorkshire pudding give you a bell slappers, picalilly Sonic Screwdriver at the boozer baffled see a man about a dog flabbergasted, chin up bowler hat porky-pies River Song got a lot of brass. Ey up bloody mary The Doctor black cab lass pork dripping yorkshire mixture cotton on, in the jacksy bag egg's old boy a cuppa shortbread spam fritters squirrel.
        </p>
      </div>
    );
  }
}
