import React from "react"
import { motion } from "framer-motion"
import Map from "./animation_component/map"

function Step2(props) {
        return (
            <motion.div
                id="motion"
                animate={{
                    x: props.x,
                    y: props.y,
                    scale: props.scale,
                    rotate: props.rotate,
                  }}
            >
                <Map/>
            </motion.div>
        )
}    
export default Step2