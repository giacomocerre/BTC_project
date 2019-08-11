import React from "react"
import { motion } from "framer-motion"

function Animation_Main(props) {
    console.log(props.step);
        return (
            <motion.div
                id="motion"
                style={{width:"500px",height:"auto",background:"#eee"}}
                animate={{
                    x: 0,
                    y: 0,
                    scale: props.step,
                    rotate: 0,
                  }}
            >
                <h3 id="ledger_main">Ragistro (Ledger)</h3>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Amount (BTC)</th>
                    </tr>
                    <tr>
                        <td>Anna</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>Mario</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td>Alice</td>
                        <td>200</td>
                    </tr>
                    <tr>
                        <td>Luca</td>
                        <td>150</td>
                    </tr>
                </table>
            </motion.div>
        )
}    
export default Animation_Main