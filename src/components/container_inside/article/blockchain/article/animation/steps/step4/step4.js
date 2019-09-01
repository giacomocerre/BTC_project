import React from "react"
import { motion } from "framer-motion"
import SendInfo from "../animation_component/send_info"

function Step4(props){
    if ( props.step === 4 || props.step === 5){
        return(
            <motion.div
                    id="sender_node"
                    initial={{ scale: props.from_scale }}
                    animate={{ scale: props.to_scale }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20
                    }}
                >
                    <SendInfo/>
                </motion.div>
        );
    }else{
        return(false);
    }
}

export default Step4