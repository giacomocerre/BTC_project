import React from "react"
import AnimationStep from "./animation/animation_main"
import Explain from "./animation/explain_step"
    
var step = 0;
//ANIMATION
class Animation extends React.Component {
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
            this.setState(state => ({
                ...state,
                ledge: {
                  ...state.ledge,
                  zoom: state.ledge.zoom - 1,
                  display: 'none'
                }
            }));
            //MAP APPEAR
            this.setState(state => ({
                ...state,
                map: {
                  ...state.map,
                  zoom: state.ledge.zoom + 1,
                }
            }));
        }
        //APPEAR NETWORK
        if(step === 2){
            this.setState({step:step})
        }
        //MAP ZOOM
        if(step === 3){
            this.setState({step:step})
            this.setState(state => ({
                ...state,
                map: {
                  ...state.map,
                  zoom: state.map.zoom + 5,
                  y: this.state.map.y + 900,
                  x: this.state.map.x + 100
                }
            }));
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
        console.log("********INDIETRO********");
        console.log("step -->" + step);
        console.log("zoom LEDGE -->" + this.state.ledge.zoom);
        console.log("zoom MAP -->" + this.state.map.zoom);
       
        
        if(step < 0 ){
            this.setState({step:step})
            step = -1
        }
        //STEP 0
        if(step === 0){
            this.setState({step:step})
            // LEDGE ZOOM
            this.setState(state => ({
                ...state,
                ledge: {
                  ...state.ledge,
                  zoom: state.ledge.zoom + 1,
                  display: 'flex'
                }
              }));
            //MAP APPEAR
            this.setState(state => ({
                ...state,
                map: {
                  ...state.map,
                  zoom: state.map.zoom - 1
                }
              }));
        }
        //DISAPPEAR NETWORK
        if(step === 1){
            this.setState({step:step})
        }
        if(step === 2){
            this.setState({step:step})
             //MAP ZOOM
             this.setState(state => ({
                ...state,
                map: {
                  ...state.map,
                    zoom: this.state.map.zoom - 5,
                    y: this.state.map.y - 900,
                    x: this.state.map.x - 100
                }
              }));
            
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
        <div>
            <div id="content_animation">
                <div id="step back" class="command" onClick={this.StepBack}><img class="arrow" src="img/arrow_b.svg" alt="back"/></div>
                <div id="animation">
                    <AnimationStep 
                        step = {this.state.step}
                        ledge={this.state.ledge}
                        map={this.state.map}/>
                </div>
                <div id="step forward" class="command" onClick={this.StepForward}><img class="arrow" src="img/arrow_f.svg" alt="forward"/></div>
            </div>
            <Explain/>
        </div>
        )
    }
}    
export default Animation