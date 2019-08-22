import React from "react"
import Ledge from "./ledge"
import LedgeAdd from "./ledge_add"

function SendInfo(){
    return(
        <div id="send_content">
            <h1>Transiction from <span class="red">Red</span> to <span class="blue">Blue</span></h1>
            <Ledge id="send_ledge"/>
            <LedgeAdd id="send_add"/>
            <hr class="v_line"/>
            <div id="send_icon">
                <img id="mex" class="trans_icon col3" src="../img/mex.svg" alt="mex"/>
                <hr class="h_line col3"/>
                <img id="plane" class="trans_icon col3" src="../img/plane.svg" alt="plane"/>
            </div>
        </div>
    );
}

export default SendInfo