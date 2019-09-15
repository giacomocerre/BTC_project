import React from "react"
import LedgeAdd from "./ledge_add"

function SendInfo(){
    return(
        <div id="send_content">
            <div id="papyrus">
                <h1 className="pap_title">Transiction A  - B</h1>
                <div className="arrow_left"></div>
                <div className="arrow_right"></div>
            </div>
            <div id="send_trx">
                <div className="wrapper wrapper_left">
                    <div id="left_container" className="send_container">
                        <h5 className="send_info_title red_title">A</h5>
                    </div>
                    <div className="cut">
                        <img id="plane_send" src="img/plane_w.svg" alt="plane"/>
                    </div>
                </div>
                <div className=" wrapper wrapper_right">
                    <div id="left_container" className="send_container">
                    <h5 className="send_info_title miner_title">Miners</h5>
                    </div>
                </div>
            </div>
            <div id="message">
                <img id="sed_mex" src="img/mex.svg" alt="send mex"/>
                <LedgeAdd id="send_add"/>
            </div>
        </div>
    );
}

export default SendInfo