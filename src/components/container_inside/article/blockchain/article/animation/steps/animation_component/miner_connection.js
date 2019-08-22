import React from "react"
import { motion } from "framer-motion"

function MinerConnection(props) {
    if (props.step >= 5) {
        var el_from = document.getElementById(props.from);
        var el_to = document.getElementById(props.to);
        var x1 = el_from.offsetLeft + (el_from.offsetWidth / 2);
        var y1 = el_from.offsetTop + (el_from.offsetHeight / 2);
        var x2 = el_to.offsetLeft + (el_to.offsetWidth / 2);
        var y2 = el_to.offsetTop + (el_to.offsetHeight / 2);
        return (
            <motion.svg
            id={props.id}
            class="miner_in"
            style={{width:"100%", height:"100%", viewBox:"100%"}}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: 4,
                when: "beforeChildren",
            }}
            >
                <line class="miner_in" x1={x1} y1={y1} x2={x2} y2={y2} stroke="#5184AF"/>           
            </motion.svg>
        )
    } else {
        return (false)
    }
}

export default MinerConnection