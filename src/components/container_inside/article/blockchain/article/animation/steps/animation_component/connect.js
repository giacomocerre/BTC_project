import React from "react"

function Connection(props){
    if(props.step >= 2){
        var el_from = document.getElementById(props.from);
        var el_to   = document.getElementById(props.to);
        var x1 = el_from.offsetLeft + (el_from.offsetWidth/2);
        var y1 = el_from.offsetTop + (el_from.offsetHeight/2);
        var x2 = el_to.offsetLeft + (el_to.offsetWidth/2);
        var y2 = el_to.offsetTop + (el_to.offsetHeight/2);
        return(
            
            <svg id={props.id} className="connect" style={{display:props.show_hide}}>
                <line className="path_in" x1={x1} y1={y1} x2={x2} y2={y2} stroke="#A1A69C"/>             
            </svg>
        )
    }else{
        return(false)
    }
}

export default Connection