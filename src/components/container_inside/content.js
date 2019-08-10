import React from "react"
import Intro from "./article/intro/a_intro"
import Evolution from "./article/evolution/b_evolution"
import Blockchain from "./article/blockchain/c_blockchain"
import Division from "./article/z_division"
// import Fork from "fork"

function Content(){
    return(
        <div id="content">
            <Intro />
            <Division id="ev_div" text="Evolution"/>
            <Evolution />
            <Division id="bc_div" text="Blockchain"/>
            <Blockchain />
        </div>
    );
}

export default Content