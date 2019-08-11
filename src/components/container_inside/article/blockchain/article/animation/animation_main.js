import React from "react"
import Step1 from "./steps/step1"
import Step2 from "./steps/step2"

function Animation_Main(props) {
    console.log(props.ledge.zoom)
        return (
            <div>
                <Step1 scale={props.ledge.zoom} x={props.ledge.x} y={props.ledge.y} rotate={props.ledge.rotate}/> 
                <Step2 x={0} y={0} scale={props.step-1} rotate={180}/>
            </div>
        )
}    
export default Animation_Main