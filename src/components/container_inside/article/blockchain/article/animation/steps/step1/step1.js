import React from "react"
import { motion } from "framer-motion"
import Ledge from "../animation_component/ledge"

function Step1(props){
        return(
            <motion.div
                id="motion_ledge"
                style={{display:props.display}}
                animate={{
                    scale: props.scale,
                    }}
                transition={{
                duration: 1,
                }}
            >
                <Ledge id="registry"/>
            </motion.div>
        )
}

export default Step1