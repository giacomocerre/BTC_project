import React from "react"
import { motion } from "framer-motion"

function Point(props){
    console.log(props.step);
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
            {/* <img id="network_node" src="img/point.svg" alt=" network node"/> */}
        </motion.img>
        )
    }else{
        return(false)
    }
}

export default Point