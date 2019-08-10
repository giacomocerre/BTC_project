import React from "react"

function Division (pars){
    return(
        <div id={pars.id} class="division">
            <h5 class="num_block">Block 2</h5>
            <hr class="line_open line_left"/>
            <hr class="line_open line_right"/>
            <h2 class="block_title">{pars.text}</h2>
        </div>
    );
}

export default Division