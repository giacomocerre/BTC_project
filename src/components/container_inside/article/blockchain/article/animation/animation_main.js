import React from "react"
import Step1 from "./steps/step1/step1"
import Step2n3 from "./steps/step2n3/step2n3"
import Step4 from "./steps/step4/step4"
import Step5 from "./steps/step5/step5"
import Step6 from "./steps/step6/step6"

function AnimationStep(props) {
        return (
            <div id="motion_content">   
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
                    s_show={props.point.show}
                    /> 
                <Step4 
                    step={props.step} 
                    from_scale={props.sender.from_scale} 
                    to_scale={props.sender.to_scale}/>
                <Step5
                    step={props.step}
                    m_color={props.point.m_color}
                    color={props.point.base_color}
                    display={props.miner.display}/>
                <Step6
                    step={props.step}
                      />
            </div>
        )
}    
export default AnimationStep