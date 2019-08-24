import React from "react"
import { motion } from "framer-motion"
import Delay from "react-delay"

function Miner(props){
    if(props.step >= 4){
        return(
        <Delay wait={2000}>
            <div id={props.id} class="miner_node" style={{width:"50px", height:"50px", marginTop:props.top, marginLeft:props.left}}>
                <motion.img
                class="point_miner"
                src="../img/miner.svg"
                alt="miner"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 4,
                }}
                >

                </motion.img>
            </div>
        </Delay>
        )
    }else{
        return(false)
    }
}

export default Miner