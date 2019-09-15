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
            <Division type="no" id="ev_div" text="Evoluzione" n_block="Two"/>
            <Evolution />
            <Division type="no" id="bc_div" text="Blockchain" n_block="Three"/>
            <Blockchain/>
            <Division type="choose" id="pc_div" text_1="Oro" text_2="Pirite" n_block="Four"/>
            <ProContro/>
            <Division type="no" id="final" text="Conclusioni" n_block="Five"/>
            <Conclusion/>
        </div>
    );
}

export default Content