import React from "react"
import AnimationStep from "./animation/animation_main"
import Explain from "./animation/explain_step"



var step = 0; 
var myopacity = 1;
//ANIMATION
class Animation extends React.Component {
    constructor() {
        super();
        this.state = {
            step        : step,
            ledge       :{zoom:1, display:"flex"},
            map         :{zoom:0, x:0, y:0, rotate:0},
            point       :{base_color:"#333", m_color:"#333", r_color:"#333", show:"none"},
            sender      :{from_scale:0, to_scale:1},
            miner       :{display:"block"}
            
        };
    }
    //*********************************
    //************ AVANTI *************
    //*********************************
    StepForward = () => {
        step = step + 1;
        //**** STEP 0 - AVANTI ****
        if(step <= 0 ){
            this.setState({step:step})
            step = 1;
        }
        //**** STEP 1 - AVANTI ****
        if(step === 1){
            this.setState({step:step})
            // *** LEDGE ZOOM ***
            this.setState(state => ({
                ...state,
                ledge: {
                  ...state.ledge,
                  zoom: state.ledge.zoom - 1,
                  display: 'none'
                }
            }));
            //*** MAP APPEAR ***
            this.setState(state => ({
                ...state,
                map: {
                  ...state.map,
                  zoom: state.ledge.zoom + 1,
                }
            }));
        }
        //**** STEP 2 - AVANTI ****
        if(step === 2){
            //*** APPEAR NETWORK ***
            this.setState({step:step})
        }
        //**** STEP 3 - AVANTI ****
        if(step === 3){
            //*** MAP ZOOM ***
            this.setState({step:step})
            this.setState(state => ({
                ...state,
                map: {
                  ...state.map,
                  zoom: state.map.zoom + 5,
                  y: this.state.map.y + 850,
                  x : this.state.map.x + 500,
                }
            }));
            this.setState(state => ({
                ...state,
                point: {
                  ...state.point,
                  m_color: "#3E606F",
                  r_color: "#2F3840",
                  show:"block"
                }
            }));
        }
        //**** STEP 4 - AVANTI ****
        if(step === 4){
            this.setState({step:step})
            this.setState(state => ({
                ...state,
                sender: {
                  ...state.sender,
                  from_scale: 0,
                  to_scale: 1,
                }
            }));
            
        }
        //**** STEP 5 - AVANTI ****
        if(step === 5){
            this.setState({step:step})
            this.setState(state => ({
                ...state,
                sender: {
                  ...state.sender,
                  from_scale: 1,
                  to_scale: 0,
                }
            }));
            this.setState(state => ({
                ...state,
                map: {
                  ...state.map,
                  zoom: state.map.zoom - 5,
                  y: this.state.map.y - 850,
                  x : this.state.map.x - 500,
                }
            }));
            // miner
             this.setState(state => ({
                ...state,
                miner: {
                  ...state.miner,
                  display: "block"
                }
            }));
        }
        //**** STEP 6 - AVANTI ****
        if(step === 6){
            this.setState({step:step})
            this.setState(state => ({
              ...state,
              sender: {
                ...state.sender,
                from_scale: 0,
                to_scale: 1,
              }
          }));  
            
        }
        //**** STEP 7 - AVANTI ****
        if(step === 7){
          this.setState({step:step})
          this.setState(state => ({
            ...state,
            sender: {
              ...state.sender,
              from_scale: 1,
              to_scale: 0,
            }
          }));
        }
        //**** STEP 8 - AVANTI ****
        if(step === 8){
          this.setState({step:step})
          this.setState(state => ({
            ...state,
            map: {
              ...state.map,
              zoom: state.map.zoom - 1,
            }
          }));
          
      }          
    }
    //***********************************
    // ************ INDIETRO ************
    //***********************************
    StepBack = () => {
        step = step - 1;

        if(step < 0 ){
            this.setState({step:step})
            step = -1
        }
        //**** STEP 0 - INDIETRO ****
        if(step === 0){
            this.setState({step:step})
            //*** LEDGE ZOOM ***
            this.setState(state => ({
                ...state,
                ledge: {
                  ...state.ledge,
                  zoom: state.ledge.zoom + 1,
                  display: 'flex'
                }
              }));
            //*** MAP APPEAR ***
            this.setState(state => ({
                ...state,
                map: {
                  ...state.map,
                  zoom: state.map.zoom - 1
                }
              }));
        }
        //**** STEP 1 - INDIETRO ****
        if(step === 1){
            //*** DISAPPEAR NETWORK ***
            this.setState({step:step})
        }
        //**** STEP 2 - INDIETRO ****
        if(step === 2){
            this.setState({step:step})
             //*** MAP ZOOM ***
             this.setState(state => ({
                ...state,
                map: {
                  ...state.map,
                    zoom: this.state.map.zoom - 5,
                    y: this.state.map.y - 850,
                    x: this.state.map.x - 500
                }
              }));  
              this.setState(state => ({
                ...state,
                point: {
                  ...state.point,
                  m_color: "#333",
                  r_color: "#333",
                  show:"none"
                }
            }));
        }
        //**** STEP 3 - INDIETRO ****
        if(step === 3){
            this.setState({step:step})
            // sender info disappear
            this.setState(state => ({
                ...state,
                sender: {
                  ...state.sender,
                  from_scale: 1,
                  to_scale: 0,
                }
            }));
            
        }
        //**** STEP 4 - INDIETRO ****
        if(step === 4){
            this.setState({step:step})
            // sender info appear
            this.setState(state => ({
                ...state,
                sender: {
                  ...state.sender,
                  from_scale: 0,
                  to_scale: 1,
                }
            }));
            // map zoom
            this.setState(state => ({
                ...state,
                map: {
                  ...state.map,
                  zoom: state.map.zoom + 5,
                  y: this.state.map.y + 850,
                  x : this.state.map.x + 500,
                }
            }));
            // miner
            this.setState(state => ({
                ...state,
                miner: {
                  ...state.miner,
                  display: "none"
                }
            }));
            
        }
        //**** STEP 5 - INDIETRO ****
        if(step === 5){
            this.setState({step:step})
            this.setState(state => ({
              ...state,
              sender: {
                ...state.sender,
                from_scale: 1,
                to_scale: 0,
              }
          }));
        }  
        //**** STEP 6 - INDIETRO ****
        if(step === 6){
          this.setState({step:step})
          this.setState(state => ({
            ...state,
            sender: {
              ...state.sender,
              from_scale: 0,
              to_scale: 1,
            }
          })); 
        }
        //**** STEP 7 - INDIETRO ****
        if(step === 7){
          this.setState({step:step})
          this.setState(state => ({
            ...state,
            map: {
              ...state.map,
              zoom: state.map.zoom + 1,
            }
          }));
          this.setState(state => ({
            ...state,
            ledge: {
              ...state.ledge,
              zoom: state.ledge.zoom + 2,
            }
          }));
        
    }  
    }

    Disappear(){
      
    }

    render() {
        return (
        <div>
            <div id="overlay_start">
              <h2 id="title_overlay">The Blockchain</h2>
              <img id="play" src="../img/play.svg" alt="play button" onClick={Disappear}/>
              <p id="iae">IAE - Interactive Animated Explanation</p>
            </div>
            <div id="content_animation">
                <div id="step back" class="command" onClick={this.StepBack}><img class="arrow" src="img/arrow_b.svg" alt="back"/></div>
                <div id="animation">
                    <AnimationStep 
                        step = {this.state.step}
                        ledge={this.state.ledge}
                        map={this.state.map}
                        point={this.state.point}
                        sender={this.state.sender}
                        miner={this.state.miner}/>
                </div>
                <div id="step forward" class="command" onClick={this.StepForward}><img class="arrow" src="img/arrow_f.svg" alt="forward"/></div>
            </div>
            <Explain step = {this.state.step}/>
        </div>
        )
    }
}   

function Disappear(){
  var play = document.getElementById("overlay_start");
      if (myopacity>0) {
        myopacity -= .075;
       setTimeout(function(){Disappear()},100);
     }else{
       play.style.display = "none";
     }
     play.style.opacity = myopacity;
  
}
export default Animation