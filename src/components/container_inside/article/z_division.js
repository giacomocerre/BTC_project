import React from "react"

class Division extends React.Component {
    constructor() {
        super();
        this.state = {
            choose : 0
        };
    }
    
    ChooseOP(event){
        const id = event.target.id;
        if(id === "pro"){
            document.getElementById("pro").style.width = "100%";
            document.getElementById("contro").style.display = "none"
            document.getElementById("pro_task").style.display = "block"
            document.getElementById("contro_task").style.display = "none"
            document.getElementById("concl").style.display = "block"
            
        }else{
            document.getElementById("contro").style.width = "100%";
            document.getElementById("pro").style.display = "none"
            document.getElementById("contro_task").style.display = "block"
            document.getElementById("concl").style.display = "block"
        }
    }

    render(){
        if(this.props.type === "no"){
            return(
                <div id={this.props.id} className="division">
                    <h5 className="num_block">Block {this.props.n_block}</h5>
                    <hr className="line_open line_left"/>
                    <hr className="line_open line_right"/>
                    <h2 className="block_title">{this.props.text}</h2>
                </div>
            );
        }else{
            return(
                <div id={this.props.id} className="division pro_contro_content">
                    <div id="pro" className="pro_contro" onClick={this.ChooseOP}>
                        <h2 className="block_title">{this.props.text_1}</h2>
                    </div>
                    <div id="contro" className="pro_contro" onClick={this.ChooseOP}>
                        <h2 className="block_title">{this.props.text_2}</h2>
                    </div>
                </div>
            )
        }
    }

}

export default Division