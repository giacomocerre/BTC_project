import React from "react"
import Animation from "./animation/animation_main"

class Explain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks:1
        };
    }
    IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
    }
    DecreaseItem = () => {
    this.setState({ clicks: this.state.clicks - 1 });
    }
    render() {
        return (
            <div id="content_animation">
            <div id="step back" class="command" onClick={this.DecreaseItem}><img class="arrow" src="img/arrow_b.svg" alt="back"/></div>
            <div id="animation">
                <Animation step={this.state.clicks}/>
            </div>
            <div id="step forward" class="command" onClick={this.IncrementItem}><img class="arrow" src="img/arrow_f.svg" alt="forward"/></div>
        </div>
        )
    }
}    
export default Explain