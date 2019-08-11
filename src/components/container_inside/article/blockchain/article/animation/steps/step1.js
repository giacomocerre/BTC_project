import React from "react"
import { motion } from "framer-motion"
import Ledge from "./animation_component/ledge"

function Step1(props) {
        return (
            <motion.div
                id="motion"
                animate={{
                    x: props.x,
                    y: 0,
                    scale: props.scale,
                    rotate: 0,
                  }}
            >
                <Ledge/>
            </motion.div>
        )
}    
export default Step1