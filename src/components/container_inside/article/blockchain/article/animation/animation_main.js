import React from "react"
import Step1 from "./steps/step1/step1"
import Step2n3 from "./steps/step2n3/step2n3"
import Step4 from "./steps/step4/step4"

function AnimationStep(props) {
    console.log(props)
        return (
            <div>
                <Step1 
                    step={props.step} 
                    scale={props.ledge.zoom} 
                    display={props.ledge.display}
                /> 
                <Step2n3 
                    step={props.step} 
                    scale={props.map.zoom} 
                    x={props.map.x} 
                    y={props.map.y} 
                    rotate={props.map.rotate} 
                    color={props.point.base_color} 
                    m_color={props.point.m_color} 
                    r_color={props.point.r_color}
                    /> 
                <Step4 
                    step={props.step} 
                    from_scale={props.sender.from_scale} 
                    to_scale={props.sender.to_scale}/>
            </div>
        )
}    
export default AnimationStep