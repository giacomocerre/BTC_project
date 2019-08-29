import React from 'react';
import Slot from 'react-slot-machine';

const list = ['0','1','2','3','4','5','6','7','8','9','a','b',' c','d','e','f','g','h','i','j','k','l','m','n','o' ,'p','q','r','s','t','u','v','w','x','y','z'];

class SlotMachine extends React.Component {
  constructor() {
    super();
    this.state = {
      target: 2,
      turn: false,
    };
  }
  render() {
    return (
      <div>
        <label>
          Turning
          <input
            type="checkbox"
            onChange={({ target }) => this.setState({ turn: target.checked })}
            checked={this.state.turn}
          />
        </label>
        <Slot
          className="slot"
          duration={3000}
          target={this.state.turn ? this.state.target : 0}
          times={10}
        >
          {list.map( value => (
            <div className="slot-item">
              {<div>{value}</div>}
            </div>
          ))}
        </Slot>
      </div>
    );
  }
}

export default SlotMachine