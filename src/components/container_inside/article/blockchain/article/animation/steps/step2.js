import React from "react"
import { motion } from "framer-motion"
import Map from "./animation_component/map"

function Step2(props) {
        return (
            <motion.div
                id="motion_map"
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
            </motion.div>
        )
}    
export default Step2