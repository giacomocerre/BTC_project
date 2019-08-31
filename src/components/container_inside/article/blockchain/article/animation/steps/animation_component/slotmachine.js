import React from 'react';
import Slot from 'react-slot-machine';

const list = ['0','1','2','3','4','5','6','7','8','9','A','B',' C','D','E','F','G','H','I','J','K','L','M','N','O' ,'P','Q','R','S','T','U','V','W','X','Y','Z'];

class SlotMachine extends React.Component {
  constructor() {
    super();
    this.state = {
      target: 1,
      turn: false,
    };
  }
  render() {
    console.log(this.state.turn)
    return (
      <div>
        <label class="switch">
             <input 
                type="checkbox" 
                onChange={({ target }) => this.setState({ turn: target.checked })}
                checked = {this.state.turn}/>
            <span class="slider round"></span>
        </label>
        {/* <label>
          Turning
            <input
                type="checkbox"
                onChange={({ target }) => this.setState({ turn: target.checked })}
                checked={this.state.turn} />
        </label> */}
        <Slot
            className="slot"
            duration={1000}
            target={this.state.turn ? 22 : 0}
            times={10}
        >
          {list.map( value => (
            <div className="slot-item">
                <div>{value}</div>
            </div>
          ))}
        </Slot>
        <Slot
            className="slot"
            duration={1500}
            target={this.state.turn ? 12 : 0}
            times={10}
        >
          {list.map( value => (
            <div className="slot-item">
                <div>{value}</div>
            </div>
          ))}
        </Slot>
        <Slot
            className="slot"
            duration={2000}
            target={this.state.turn ? 4 : 0}
            times={10}
        >
          {list.map( value => (
            <div className="slot-item">
                <div>{value}</div>
            </div>
          ))}
        </Slot>
        <Slot
            className="slot"
            duration={3000}
            target={this.state.turn ? 11 : 0}
            times={10}
        >
          {list.map( value => (
            <div className="slot-item">
                <div>{value}</div>
            </div>
          ))}
        </Slot>
        <Slot
            className="slot"
            duration={4000}
            target={this.state.turn ? 33 : 0}
            times={10}
        >
          {list.map( value => (
            <div className="slot-item">
                <div>{value}</div>
            </div>
          ))}
        </Slot>
        <Slot
            className="slot"
            duration={5000}
            target={this.state.turn ? 8 : 0}
            times={10}
        >
          {list.map( value => (
            <div className="slot-item">
                <div>{value}</div>
            </div>
          ))}
        </Slot>
        <Slot
            className="slot"
            duration={6000}
            target={this.state.turn ? 34 : 0}
            times={10}
        >
          {list.map( value => (
            <div className="slot-item">
                <div>{value}</div>
            </div>
          ))}
        </Slot>
      </div>
    );
  }
}

export default SlotMachine