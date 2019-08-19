import React from "react"
import Ledge from "./ledge"
import LedgeAdd from "./ledge_add"

function SendInfo(){
    return(
        <div id="send_content">
            <h1>Transiction from <span class="red">Red</span> to <span class="blue">Blue</span></h1>
            <Ledge id="send_ledge"/>
            <LedgeAdd id="send_add"/>
            <hr class="line_send"/>
        </div>
    );
}

export default SendInfo