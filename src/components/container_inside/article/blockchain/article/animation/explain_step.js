import React from "react"
var new_step = -1;

class Explain extends React.Component {
    ChangeImage(){
        var imgSrc = "img/read.svg";
        var image =  document.getElementById("notify");
        var mex   = document.getElementById("content_explain"); 
        mex.style.display = "block" 
        if(image.src !== "img/read.svg"){
            image.src= imgSrc;
        }
        image.src= imgSrc;
        new_step = new_step + 1
    }
    render(){
        return(
            <div id="notify_content">
                <img id="notify" src="img/notify.svg" alt="noify" onClick={this.ChangeImage}/>
                <div id="content_explain" style={{display:"none"}}>
                    <p class="tooltip_explain">{this.props.explain}</p>
                </div>
            </div>
            );
    }
}
// function changeImage(new){
//     var imgSrc = "img/read.svg";
//     if(new !== new_step){
//         imgSrc = "img/notify.svg"
//     }
//     new_step = new;
//     var image =  document.getElementById("notify");
//     image.src= imgSrc;
// }

export default Explain