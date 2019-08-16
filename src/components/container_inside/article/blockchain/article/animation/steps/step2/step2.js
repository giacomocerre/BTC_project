import React from "react"
import { motion } from "framer-motion"
import Map from "../animation_component/map"
import Point from "../animation_component/point"
import Connect from "../animation_component/connect"

function Step2(props) {

        return (
            <motion.div
                id="motion_map"
                class="motion"
                animate={{
                    x: props.x,
                    y: props.y,
                    scale: props.scale,
                    rotate: props.rotate,
                  }}
                transition={{
                duration: 1,
                }}
            >
                <Map/>
                <Point step={props.step} start={props.scale}/>
                <Connect step={props.step} start={props.scale}/>                
            </motion.div>
        )
}    
export default Step2