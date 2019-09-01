import React from 'react';
import { motion } from "framer-motion"

function Tree(props){
    if(props.block === 1){
        return(
            <>
                <motion.img
                    id="tc_2"
                    src="../img/connector_g.svg"
                    alt="connector block"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 1,
                        when: "beforeChildren",
                    }}
                />
                <motion.img
                    id="tb_3"
                    src="../img/block_g.svg"
                    alt="tree block"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 1,
                        when: "beforeChildren",
                    }}
                />
            </>)
    }else{
        return(false)
    }
}

export default Tree