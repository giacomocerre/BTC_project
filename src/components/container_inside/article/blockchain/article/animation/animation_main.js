import React from "react"
import Step1 from "./steps/step1"
import Step2 from "./steps/step2"

function Animation(props) {
    console.log(props.ledge.zoom)
        return (
            <div>
                <Step1 scale={props.ledge.zoom} display={props.ledge.display}/> 
                <Step2 scale={props.map.zoom} x={props.map.x} y={props.map.y} rotate={props.map.rotate}/> 
            </div>
        )
}    
export default Animation