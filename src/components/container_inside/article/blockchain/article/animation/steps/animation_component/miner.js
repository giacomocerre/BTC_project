import React from "react"
import { motion } from "framer-motion"

function Miner(props){
    var show = 0
    var hide = 0
    if(props.step === 5){
        show = 0
        hide = 1
    }else{
        show = 1
        hide = 0
    }
    if(props.step >= 4){
        return(
        <motion.div
        id={props.id}
        class="miner_node"
        style={{width:"50px", height:"50px", marginTop:props.top, marginLeft:props.left, borderColor:props.color}}
        initial={{ opacity: hide }}
        animate={{ opacity: hide }}
        transition={{
            duration: 4,
            when: "beforeChildren",
        }}
        >
            <img class="point_miner" src="../img/miner.svg" alt="miner"/>
        </motion.div>
        )
    }else{
        return(false)
    }
}

export default Miner