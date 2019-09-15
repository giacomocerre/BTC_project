
import React from "react"
import SlotMachine from '../animation_component/slotmachine'

function Validation (){
        return(
            <div id="flex_mining">
                <div id="m_v">
                    <div id="slot_papyrus">
                        <h1 className="pap_title">validation process of the miner</h1>
                        <div className="arrow_s_left"></div>
                        <div className="arrow_s_right"></div>
                    </div>
                    <div id="slot_header" className="know">
                        <h2>HEADER</h2>
                        <p>0 0 0 0 0 0 0 0 0 0 0</p>
                    </div>

                    <div id="slot">
                        <SlotMachine/>
                    </div>
                </div>
            </div>
        )
}


export default Validation