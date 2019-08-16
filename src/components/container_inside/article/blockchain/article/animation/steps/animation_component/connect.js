import React from "react"
import { motion } from "framer-motion"

function Point(props){
    if(props.step >= 2){
        return(
            <motion.img
            id="network_connection"
            src="img/connect.svg"
            class="node"
            initial={{ opacity: -1 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: 4,
                when: "beforeChildren",
            }}
        />
        )
    }else{
        return(false)
    }
}

export default Point