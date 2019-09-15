import React from "react"
var new_step = -1;
var click = 0;
class Explain extends React.Component {
    //notify controller
    ChangeImage(){
        var imgSrc = "img/read.svg";
        var image =  document.getElementById("notify");
        var mex   =  document.getElementById("content_explain_noti"); 
        var res = image.src.split("http://localhost:3000/");
        console.log(res)
        if(res[1] !== "img/read.svg"){
            console.log(image.src);
            image.src= imgSrc;
            mex.style.display = "block" 
            click = 1
        }else if(click === 1 && res[1] === "img/read.svg"){
            mex.style.display = "none"
            click = 0
        }else if(click === 0 && res[1] === "img/read.svg"){
            mex.style.display = "block"
            click = 1
        }
        image.src= imgSrc;
        new_step = new_step + 1
    }
    render(){
        return(
            <div id="notify_content">
                <img id="notify" src="img/notify.svg" alt="noify" onClick={this.ChangeImage}/>
                <div id="content_explain_noti" style={{display:"none"}}>
                    <div class="arrow_right_noti"></div>
                    <p className="tooltip_explain">{this.props.explain}</p>
                </div>
            </div>
            );
    }
}

export default Explain