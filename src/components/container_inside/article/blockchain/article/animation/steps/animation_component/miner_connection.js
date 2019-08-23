import React from "react"
import { motion } from "framer-motion"
import { css } from "styled-components"
import Delay from "react-delay"


function MinerConnection(props) {
    if (props.step >= 5) {
        var el_from = document.getElementById(props.from);
        var el_to = document.getElementById(props.to);
        var x1 = el_from.offsetLeft + (el_from.offsetWidth / 2);
        var y1 = el_from.offsetTop + (el_from.offsetHeight / 2);
        var x2 = el_to.offsetLeft + (el_to.offsetWidth / 2);
        var y2 = el_to.offsetTop + (el_to.offsetHeight / 2);
        var sendPlane = css`
            0% {
                top:500px;
            }
            100% {
                top: 0px;
            }
      `;
        var imgStyle = {
            position: "absolute",
            width: "30px",
            height: "30px",
            left: "0",
            transform:"rotate(" + x1 + "deg)",
            marginTop: y1,
            marginLeft: x1,
            webkitAnimation: `${sendPlane} 2s infinite  normal ease-out` ,
            animation: `${sendPlane} 2s infinite  normal ease-out`,
            
          };
        return (
            <Delay wait={1000}>
            <motion.svg
            id={props.id}
            class="miner_in"
            style={{width:"100%", height:"100%", viewBox:"100%"}}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: 4,
                when: "beforeChildren",
            }}
            >
                <line class="miner_in" x1={x1} y1={y1} x2={x2} y2={y2} stroke="#D2644F"/>
                
            </motion.svg> 
            <img class="plane" src="../img/plane.svg" alt="plane" style={imgStyle}/>               
            </Delay>
        )
    } else {
        return (false)
    }
}


export default MinerConnection