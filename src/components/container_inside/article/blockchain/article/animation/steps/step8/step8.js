import React from "react"
import FinalLedge from "../animation_component/final_ledge"
import FinalNewAdd from "../animation_component/final_add_ledge"
import Blokchain from "../animation_component/blockchain"

function Step8(props){
    if(props.step >= 8){
        return(
            <div id="content_final_step">
                <FinalLedge  id="final_ledge_registry" step={props.step}/>
                <FinalNewAdd id="final_new_add_ledge"  step={props.step}/>
                <Blokchain/>
             </div>
        )
        }else{
            return(false)
        }
}

export default Step8