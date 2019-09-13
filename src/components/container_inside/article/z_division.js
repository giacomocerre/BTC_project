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
        console.log(id);
    }

    render(){
        if(this.props.type === "no"){
            return(
                <div id={this.props.id} class="division">
                    <h5 class="num_block">Block {this.props.n_block}</h5>
                    <hr class="line_open line_left"/>
                    <hr class="line_open line_right"/>
                    <h2 class="block_title">{this.props.text}</h2>
                </div>
            );
        }else{
            return(
                <div id={this.props.id} class="division pro_contro_content">
                    <div id="pro" class="pro_contro" onClick={this.ChooseOP}>
                        <h2 class="block_title">{this.props.text_1}</h2>
                    </div>
                    <div id="contro" class="pro_contro" onClick={this.ChooseOP}>
                        <h2 class="block_title">{this.props.text_2}</h2>
                    </div>
                </div>
            )
        }
    }

}

export default Division