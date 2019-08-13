import React from "react"
import Step1 from "./steps/step1"
import Step2 from "./steps/step2"

function Animation(props) {
    console.log(props.step)
        return (
            <div>
                <Step1 step={props.step} scale={props.ledge.zoom} display={props.ledge.display}/> 
                <Step2 step={props.step} scale={props.map.zoom} x={props.map.x} y={props.map.y} rotate={props.map.rotate}/> 
            </div>
        )
}    
export default Animation