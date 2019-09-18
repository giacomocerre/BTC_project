import React from "react"
import Intro from "./article/intro/a_intro"
import Evolution from "./article/evolution/b_evolution"
import Blockchain from "./article/blockchain/c_blockchain"
import ProContro from "./article/pro_contro/pro_contro"
import Division from "./article/z_division"
import Conclusion from "./article/conclusion/conclusion"

// import Fork from "fork"

function Content(props){
    return(
        <div id="content">
            <Intro />
            <Division type="no" id="ev_div" text="Evoluzione" n_block="2"/>
            <Evolution />
            <Division type="no" id="bc_div" text="Blockchain" n_block="3"/>
            <Blockchain/>
            <Division type="choose" id="pc_div" text_1="Oro" text_2="Pirite" n_block="4"/>
            <ProContro/>
            <div id="concl">
                <Division type="no" id="final" text="Conclusioni" n_block="5"/>
                <Conclusion/>
            </div>
        </div>
    );
}

export default Content