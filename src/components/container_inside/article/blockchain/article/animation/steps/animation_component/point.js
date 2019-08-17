import React from "react"
import { motion } from "framer-motion"

function Point(props){
    if(props.step >= 1){
        return(
        <motion.div
        id={props.id}
        class="net_node"
        style={{width:"30px", height:"30px", top:props.top, left:props.left, background:props.color, position:"absolute",}}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
            duration: 4,
            when: "beforeChildren",
        }}
        >
        </motion.div>
        )
    }else{
        return(false)
    }
}

export default Point