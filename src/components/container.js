import React from "react"
import Sidebar from "./container_inside/sidebar"
import Content from "./container_inside/content"

function Container(props){
    console.log(props.responsive)
    return (
        <div id="container">
            <Sidebar/>
            <Content responsive={props.responsive}/>
        </div>
    );
}

export default Container