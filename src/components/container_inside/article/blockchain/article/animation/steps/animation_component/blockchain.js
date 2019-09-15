import React from "react"
import Delay from "react-delay"
import { motion } from "framer-motion";

function Blockchain(){
    return(
        <div id="final_blokchain">
            <motion.img
                id="bcf_1" 
                className="bccf bcf_block"
                src="img/block.svg"
                alt="blockchain block"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                    duration: 2,
                    when: "beforeChildren",
                }}
                >
                </motion.img>
                <Delay wait={1000}>
                    <motion.img
                    id="ccf_1"
                    className="bccf ccf_block"
                    src="img/connector.svg"
                    alt="blockchain connector"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                        duration: 2,
                        when: "beforeChildren",
                    }}
                    >
                    </motion.img>
                </Delay>
                <Delay wait={1400}>
                    <motion.img
                    id="bcf_2" 
                    className="bccf bcf_block"
                    src="img/block.svg"
                    alt="blockchain block"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                        duration: 2,
                        when: "beforeChildren",
                    }}
                    >
                    </motion.img>
                </Delay>
                <Delay wait={1800}>
                    <motion.img
                    id="ccf_2"
                    className="bccf ccf_block"
                    src="img/connector.svg"
                    alt="blockchain connector"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                        duration: 2,
                        when: "beforeChildren",
                    }}
                    >
                    </motion.img>
                </Delay>
                <Delay wait={2200}>
                    <motion.img
                    id="bcf_3" 
                    className="bccf bcf_block"
                    src="img/block.svg"
                    alt="blockchain block"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                        duration: 2,
                        when: "beforeChildren",
                    }}
                    >
                    </motion.img>
                </Delay>
                <Delay wait={2600}>
                    <motion.img
                    id="ccf_3"
                    className="bccf ccf_block"
                    src="img/connector.svg"
                    alt="blockchain connector"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                        duration: 2,
                        when: "beforeChildren",
                    }}
                    >
                    </motion.img>
                </Delay>
                <Delay wait={3000}>
                    <motion.img
                    id="bcf_4" 
                    className="bccf bcf_block"
                    src="img/block.svg"
                    alt="blockchain block"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                        duration: 2,
                        when: "beforeChildren",
                    }}
                    >
                    </motion.img>
                </Delay>
                <Delay wait={3400}>
                    <motion.img
                    id="ccf_4"
                    className="bccf ccf_block"
                    src="img/connector_g.svg"
                    alt="blockchain connector"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                        duration: 2,
                        when: "beforeChildren",
                    }}
                    >
                    </motion.img>
                </Delay>
                <Delay wait={3800}>
                    <motion.img
                    id="bcf_5" 
                    className="bccf bcf_block"
                    src="img/block_g.svg"
                    alt="blockchain block"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                        duration: 2,
                        when: "beforeChildren",
                    }}
                    >
                    </motion.img>
                </Delay>
                <Delay wait={5000}>
                <motion.hr
                    id="hr_tell" 
                    className="tell"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 2,
                        when: "beforeChildren",
                    }}
                    >
                </motion.hr> 
                <motion.img
                    id="new" 
                    src="img/new.svg"
                    alt="new icon"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                        duration: 2,
                        when: "beforeChildren",
                    }}
                    >
                </motion.img>
                <motion.img
                    id="plus_ledge" 
                    src="img/plus.svg"
                    alt="plus icon"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                        duration: 2,
                        when: "beforeChildren",
                    }}
                    >
                </motion.img>
                

                </Delay>  
        </div>
    )
}

export default Blockchain