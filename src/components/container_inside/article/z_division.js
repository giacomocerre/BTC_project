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