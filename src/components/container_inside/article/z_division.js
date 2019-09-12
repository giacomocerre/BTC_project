import React from "react"

function Division (pars){
    if(pars.type === "no"){
        return(
            <div id={pars.id} class="division">
                <h5 class="num_block">Block {pars.n_block}</h5>
                <hr class="line_open line_left"/>
                <hr class="line_open line_right"/>
                <h2 class="block_title">{pars.text}</h2>
            </div>
        );
        }else{
            return(
                <div id={pars.id} class="division pro_contro_content">
                    <div id="pro" class="pro_contro">
                        <h2 class="block_title">{pars.text_1}</h2>
                    </div>
                    <div id="contro" class="pro_contro">
                        <h2 class="block_title">{pars.text_2}</h2>
                    </div>
                </div>
            )
        }
}

export default Division