import React from "react"
import Animation from "./animation/animation_main"

var dezoomer;
class Explain extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            ledge   :{zoom:1, x:0, y:0, rotate:0},
            map     :{zoom:1, x:0, y:0, rotate:0},
        };
    }
    
    IncrementItem = () => {
        // LEDGE ZOOM
        dezoomer = this.state.ledge
        if(dezoomer.zoom - 1  <= 0){
            dezoomer.zoom = 0
            this.setState({ledge:dezoomer});
        }else{
            this.setState({ ledge: dezoomer - 1 });
        }
    }
    DecreaseItem = () => {
        // LEDGE ZOOM
        dezoomer = this.state.ledge
        if(dezoomer.zoom + 1  <= 0){
            dezoomer.zoom = 0
            this.setState({ledge:dezoomer});
        }else{
            this.setState({ ledge: dezoomer + 1 });
        }
    }

    render() {
        return (
            <div id="content_animation">
            <div id="step back" class="command" onClick={this.DecreaseItem}><img class="arrow" src="img/arrow_b.svg" alt="back"/></div>
            <div id="animation">
                <Animation ledge={this.state.ledge}/>
            </div>
            <div id="step forward" class="command" onClick={this.IncrementItem}><img class="arrow" src="img/arrow_f.svg" alt="forward"/></div>
        </div>
        )
    }
}    
export default Explain