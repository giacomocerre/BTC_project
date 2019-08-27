import React from "react"
import { motion } from "framer-motion"

function Point(props){
    var text = "";
    if(props.id === "p_5"){
        text="B"
    }else if(props.id === "p_6"){
        text="A"
    }else{
        text=""
    }
    if(props.step >= 1){
        return(
        <motion.div
        id={props.id}
        class="net_node"
        style={{
            width:"30px", 
            height:"30px", 
            marginTop:props.top, 
            marginLeft:props.left, 
            background:props.color, 
            display:props.show_hide,
            justifyContent:"center",
            alignItems:"center"
            }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
            duration: 4,
            when: "beforeChildren",
        }}
        >
            <h3 class="sm_name" style={{display:props.s_show, color:"#fff"}}>{text}</h3>
        </motion.div>
        )
    }else{
        return(false)
    }
}

export default Point