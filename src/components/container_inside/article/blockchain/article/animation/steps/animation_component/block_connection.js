import React from "react"
import Delay from "react-delay"

function BlockConnection(props) {
    if (props.step >= 5) {
        return (
            <Delay wait={1000}>
                <img id={props.block} class="valid_block_mined" src="img/block_g.svg" alt="block moving"/>
            </Delay>
        )
    } else {
        return (false)
    }
}


export default BlockConnection