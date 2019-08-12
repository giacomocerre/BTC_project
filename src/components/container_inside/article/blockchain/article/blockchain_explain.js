import React from "react"
import Animation from "./animation/animation_main"

var step = 0;
//ANIMATION
class Explain extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            ledge   :{zoom:1, display:"block"},
            map     :{zoom:0, x:0, y:0, rotate:0},
        };
    }

    StepForward = () => {
        console.log(this.state.map);
        step = step + 1;
        //STEP 1
        if(step === 0 ){
            step = 1;
        }
        if(step === 1){
            // LEDGE ZOOM
            console.log(this.state.ledge.zoom);
            // eslint-disable-next-line 
            this.setState({ ...this.state.ledge.zoom = this.state.ledge.zoom - 1, ...this.state.ledge.display = "none",});
            //MAP APPEAR
            // eslint-disable-next-line 
            this.setState({ ...this.state.map.zoom = this.state.map.zoom + 1});
        }
        if(step === 2){
            //MAP ZOOM
            // eslint-disable-next-line 
            this.setState({ 
                ...this.state.map.zoom = this.state.map.zoom + 5,
                ...this.state.map.y = this.state.map.y + 500
            });
        }
        if(step === 3){
            
        }
        if(step === 4){
            
        }
        if(step === 5){
            
        }
        if(step === 6){
            
        }        
    }
    StepBack = () => {
        console.log(this.state.map);
        step = step - 1;
        
        if(step < 0 ){
            step = -1
        }
        //STEP 0
        if(step === 0){
            // LEDGE ZOOM
            console.log(this.state.ledge.zoom);
            // eslint-disable-next-line 
            this.setState({ ...this.state.ledge.zoom = this.state.ledge.zoom + 1, ...this.state.ledge.display = "block",});
            //MAP APPEAR
            // eslint-disable-next-line 
            this.setState({ ...this.state.map.zoom = this.state.map.zoom - 1});
        }
        if(step === 1){
             //MAP ZOOM
            // eslint-disable-next-line 
            this.setState({ 
                ...this.state.map.zoom = this.state.map.zoom - 5,
                ...this.state.map.y = this.state.map.y - 500
            });
        }
        if(step === 2){
            
        }
        if(step === 3){
            
        }
        if(step === 4){
            
        }
        if(step === 5){
            
        }   
    }

    render() {
        return (
            <div id="content_animation">
            <div id="step back" class="command" onClick={this.StepBack}><img class="arrow" src="img/arrow_b.svg" alt="back"/></div>
            <div id="animation">
                <Animation 
                    ledge={this.state.ledge}
                    map={this.state.map}/>
            </div>
            <div id="step forward" class="command" onClick={this.StepForward}><img class="arrow" src="img/arrow_f.svg" alt="forward"/></div>
        </div>
        )
    }
}    
export default Explain