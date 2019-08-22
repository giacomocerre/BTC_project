import React from "react"
import Sidebar from "./container_inside/sidebar"
import Content from "./container_inside/content"

function Container(props){
    return (
        <div id="container">
            <Sidebar/>
            <Content responsive={props.responsive}/>
        </div>
    );
}

export default Container