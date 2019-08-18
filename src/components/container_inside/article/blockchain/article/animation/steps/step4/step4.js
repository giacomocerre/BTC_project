import React from "react"
import { motion } from "framer-motion"

function Step4(props){
    if (props.step === 4 ){
        return(
            <motion.div
                    id="sender_node"
                    initial={{ scale: props.from_scale }}
                    animate={{ rotate: 180, scale: props.to_scale }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20
                    }}
                >

                </motion.div>
        );
    }else{
        return(false);
    }
}

export default Step4