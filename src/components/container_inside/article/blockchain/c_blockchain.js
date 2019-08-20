import React from "react"
import Animation from "./article/blockchain_explain"

function Blockchain (props){
    return(
        <section id="explain">
            <Animation responsive={props.responsive}/>
        </section>
    );
}

export default Blockchain