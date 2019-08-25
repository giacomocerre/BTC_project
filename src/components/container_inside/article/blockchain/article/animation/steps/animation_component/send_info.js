import React from "react"
import LedgeAdd from "./ledge_add"

function SendInfo(){
    return(
        <div id="send_content">
            <div id="papyrus">
                <h1 id="pap_title">Transiction Red  - Blue</h1>
                <div class="arrow_left"></div>
                <div class="arrow_right"></div>
            </div>
            <div id="send_trx">
               
            </div>
            <LedgeAdd id="send_add"/>
        </div>
    );
}

export default SendInfo