import React from "react"
import Animation from "./animation/animation_main"

var step = 0;
//ANIMATION
class Explain extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            step    : step,
            ledge   :{zoom:1, display:"flex"},
            map     :{zoom:0, x:0, y:0, rotate:0},
        };
    }

    StepForward = () => {
        step = step + 1;
        //STEP 1
        if(step === 0 ){
            this.setState({step:step})
            step = 1;
        }
        if(step === 1){
            this.setState({step:step})
            // LEDGE ZOOM
            console.log(this.state.ledge.zoom);
            // eslint-disable-next-line 
            this.setState({ ...this.state.ledge.zoom = this.state.ledge.zoom - 1, ...this.state.ledge.display = "none",});
            //MAP APPEAR
            // eslint-disable-next-line 
            this.setState({ ...this.state.map.zoom = this.state.map.zoom + 1});
            
        }
        //APPEAR NETWORK
        if(step === 2){
            this.setState({step:step})
        }
        if(step === 3){
            this.setState({step:step})
            //MAP ZOOM
            // eslint-disable-next-line 
            this.setState({ 
                ...this.state.map.zoom = this.state.map.zoom + 5,
                ...this.state.map.y = this.state.map.y + 600,
                ...this.state.map.x = this.state.map.x + 100
            });
            
        }
        if(step === 4){
            this.setState({step:step})
            
        }
        if(step === 5){
            this.setState({step:step})
            
        }
        if(step === 6){
            this.setState({step:step})
            
        }        
    }
    StepBack = () => {
        step = step - 1;
        
        if(step < 0 ){
            this.setState({step:step})
            step = -1
        }
        //STEP 0
        if(step === 0){
            this.setState({step:step})
            // LEDGE ZOOM
            // eslint-disable-next-line 
            this.setState({ ...this.state.ledge.zoom = this.state.ledge.zoom + 1, ...this.state.ledge.display = "flex",});
            //MAP APPEAR
            // eslint-disable-next-line 
            this.setState({ ...this.state.map.zoom = this.state.map.zoom - 1});
        }
        //DISAPPEAR NETWORK
        if(step === 1){
            this.setState({step:step})
        }
        if(step === 2){
            this.setState({step:step})
             //MAP ZOOM
            // eslint-disable-next-line 
            this.setState({ 
                ...this.state.map.zoom = this.state.map.zoom - 5,
                ...this.state.map.y = this.state.map.y - 600,
                ...this.state.map.x = this.state.map.x - 100
            });
            
        }
        if(step === 3){
            this.setState({step:step})
            
        }
        if(step === 4){
            this.setState({step:step})
            
        }
        if(step === 5){
            this.setState({step:step})
        }   
    }

    render() {
        return (
            <div id="content_animation">
            <div id="step back" class="command" onClick={this.StepBack}><img class="arrow" src="img/arrow_b.svg" alt="back"/></div>
            <div id="animation">
                <Animation 
                    step = {this.state.step}
                    ledge={this.state.ledge}
                    map={this.state.map}/>
            </div>
            <div id="step forward" class="command" onClick={this.StepForward}><img class="arrow" src="img/arrow_f.svg" alt="forward"/></div>
        </div>
        )
    }
}    
export default Explain