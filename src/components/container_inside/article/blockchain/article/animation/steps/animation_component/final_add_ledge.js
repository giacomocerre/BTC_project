import React from "react"
import Delay from "react-delay"
import { motion } from "framer-motion";

function FinalNewAdd(props){

    return(
        <Delay wait={5000}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 2,
                    when: "beforeChildren",
                }}
            >
                <div id="final_add_content">
                    <div id="content_final_add">
                        <table id={props.id}>
                            <tr>
                                <th className="col">Sender</th>
                                <th className="col">Receiver</th>
                                <th className="col">Amount</th>
                                <th className="col">Sender Signature</th>
                                <th className="col">Receiver Signature</th>
                            </tr>
                            <tr>
                                <td className="light_col" style={{textAlign:"center"}}>A</td>
                                <td className="light_col" style={{textAlign:"center"}}>B</td>
                                <td className="light_col" style={{textAlign:"center"}}>321</td>
                                <td className="light_col signature" style={{textAlign:"center"}}>A</td>
                                <td className="light_col signature" style={{textAlign:"center"}}>B</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </motion.div>
        </Delay>
    )
}

export default FinalNewAdd