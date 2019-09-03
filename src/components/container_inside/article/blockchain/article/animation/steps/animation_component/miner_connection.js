import React from "react"
import Delay from "react-delay"


function MinerConnection(props) {
    if (props.step >= 5) {
        return (
            <Delay wait={1000}>
                <img id={props.plane} class="plane" src="img/plane_3e6.svg" alt="plane"/>
            </Delay>
        )
    } else {
        return (false)
    }
}


export default MinerConnection