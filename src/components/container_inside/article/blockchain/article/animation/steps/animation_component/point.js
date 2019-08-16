import React from "react"
import { motion } from "framer-motion"

function Point(props){
    if(props.step >= 1){
        return(
            <motion.img
            id="network_node"
            src="img/point.svg"
            class="node"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: 4,
                when: "beforeChildren",
            }}
        >
        </motion.img>
        )
    }else{
        return(false)
    }
}

export default Point