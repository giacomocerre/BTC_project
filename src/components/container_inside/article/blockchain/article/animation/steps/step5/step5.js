import React from "react"
import Miner from "../animation_component/miner"
import MinerConnection from "../animation_component/miner_connection"
// import { motion } from "framer-motion"

function Step5(props){
    if ( props.step >= 4 ){
        return(
            <div id="flex_miner">
                <div id="m_c">
                    <Miner step={props.step} id="m_1"  top={200} left={260}  color={props.color}/>
                    <Miner step={props.step} id="m_2"  top={400} left={460}  color={props.color}/>

                    <MinerConnection id="m_connect_51"  class="connection"  step={props.step}  from="m_1" to="m_2"/>
                </div>
            </div>
        )
    }else{
        return(false);
    }
}

export default Step5