import React from 'react';
import Slot from 'react-slot-machine';
import Tree from '../animation_component/tree';

const list = ['?','0','1','2','3','4','5','6','7','8','9','A','B',' C','D','E','F','G','H','I','J','K','L','M','N','O' ,'P','Q','R','S','T','U','V','W','X','Y','Z'];
class SlotMachine extends React.Component {
    constructor() {
        super();
        this.state = {
            target: 1,
            turn: false,
            color: "#999",
            text_crypt: "???????",
            block:0
        };
    }

    colorChange = () => {
        if(this.state.color === "#999"){
            setTimeout(() => {
                this.setState({color:"#50BB40", text_crypt: "LB3AW7X", block:1})
            }, 6000);
        }else{
            this.setState({color: "#999", text_crypt:"???????", block:0})
        }
    }

    render() {
        return (

            <>
            <div id="slot_container">
                <div id="switch_container">
                <label class="switch">
                        <input 
                        id="check_slot"
                        type="checkbox" 
                        onChange={({ target }) => this.setState({ turn: target.checked })}
                        onClick={this.colorChange}
                        checked = {this.state.turn}/>
                    <span class="slider round"></span>
                </label>
                </div>
                {/* rolling div */}
                <Slot
                    className="slot"
                    duration={1000}
                    target={this.state.turn ? 22 : 0}
                    times={10}
                >
                    {list.map( value => (
                    <div className="slot-item">
                        <div style={{color:this.state.color}}>{value}</div>
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
                        <div style={{color:this.state.color}}>{value}</div>
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
                        <div style={{color:this.state.color}}>{value}</div>
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
                        <div style={{color:this.state.color}}>{value}</div>
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
                        <div style={{color:this.state.color}}>{value}</div>
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
                        <div style={{color:this.state.color}}>{value}</div>
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
                        <div style={{color:this.state.color}}>{value}</div>
                    </div>
                    ))}
                </Slot>
                </div>
                <div id="bt_content">
                    <img id="tb_1" src="../img/block.svg" alt="tree block"/>
                    <img id="tc_1" src="../img/connector.svg" alt="connector block"/>
                    <img id="tb_2" src="../img/block.svg" alt="tree block"/>
                    <Tree block={this.state.block}/>
                </div>
                <div id="function_val">
                    <p id="val_p" class="line_v">{this.state.text_crypt}</p>
                    <p class="line_v plus">+</p>
                    <img id="block_validation" class="libe_v" src="../img/block.svg" alt="block validation"/>
                    <p class="line_v plus">=</p>
                    <p id="val_h" class="line_v">HEADER<span class="mini"> (00000000000)</span></p>

                </div>
            </>
);
    }
}

export default SlotMachine