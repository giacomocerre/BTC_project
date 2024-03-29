import React from "react"
import { motion } from "framer-motion"
import Delay from "react-delay"

function Miner(props){
    if(props.step >= 5){
        return(
        <Delay wait={1000}>
            <div id={props.id} className="miner_node" style={{width:"50px", height:"50px", marginTop:props.top, marginLeft:props.left, display:props.show_hide}}>
                <motion.img
                className="point_miner"
                src={props.img}
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