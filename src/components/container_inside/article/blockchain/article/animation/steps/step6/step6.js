import React from "react"
import { motion } from "framer-motion"
import Validation from "../animation_component/validation"

function Step6(props){
    if(props.step >= 6){
        return(
            <motion.div
            id="validation"
            initial={{ scale: props.from_scale }}
            animate={{ scale: props.to_scale }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20
            }}
        >
            <Validation start={props.start}/>
        </motion.div>
        )
        }else{
            return(false)
        }
}

export default Step6
