import React from "react"

class Sidebar extends React.Component {
    state = { active: 0 };
    render() {
        const { active } = this.state;
            return(
                <div id="sidebar">  
                    { active === 1 ? 
                                <div id="tree">
                                    <a id="hover_1" href="#intro"><img id="block1" className="block" src="img/block.svg" alt="block"/></a>
                                    <p id="cap1" class="cap" style={{top:5+'%'}}>INTRO</p>
                                </div>
                    : active === 2 ? 
                                <div id="tree">
                                    <a id="hover_1" href="#intro"><img id="block1" className="block" src="img/block.svg" alt="block"/></a>
                                    <p id="cap1" class="cap" style={{top:5+'%}'}}>INTRO</p>
                                    <img className="connector"src="img/connector.svg" alt ="connector" style={{bottom: 5+'px'}}/>
                                    <a id="hover_2" href="#evolution" ><img id="block2" className="block" src="img/block.svg" alt="block" style={{bottom: 10+'px'}}/></a> 
                                    <p id="cap2" class="cap" style={{top:60+'%'}}>EVOLUTION</p>
                                </div>
                    : active === 3 ?    
                                <div id="tree">
                                    <a id="hover_1" href="#intro"><img id="block1" className="block" src="img/block.svg" alt="block"/></a>
                                    <p id="cap1" class="cap" style={{top:5+'%'}}>INTRO</p>
                                    <img className="connector"src="img/connector.svg" alt ="connector" style={{bottom: 5+'px'}}/>
                                    <a id="hover_2" href="#evolution"><img id="block2" className="block" src="img/block.svg" alt="block" style={{bottom: 10+'px'}}/></a> 
                                    <p id="cap2" class="cap" style={{top:35+'%'}}>EVOLUTION</p>
                                    <img className="connector"src="img/connector.svg" alt ="connector" style={{bottom: 15+'px'}}/>
                                    <a id="hover_3" href="#explain"><img id="block2" className="block" src="img/block.svg" alt="block" style={{bottom: 20+'px'}}/></a> 
                                    <p id="cap3" class="cap" style={{top:70+'%'}}>BLOCKCHAIN</p>
                                </div>
                    : active === 4 ?    
                                <div id="tree">
                                    <a id="hover_1" href="#intro"><img id="block1" className="block" src="img/block.svg" alt="block"/></a>
                                    <p id="cap1" class="cap" style={{top:0+'%'}}>INTRO</p>
                                    <img className="connector"src="img/connector.svg" alt ="connector" style={{bottom: 5+'px'}}/>
                                    <a id="hover_2" href="#evolution"><img id="block2" className="block" src="img/block.svg" alt="block" style={{bottom: 10+'px'}}/></a> 
                                    <p id="cap2" class="cap" style={{top:10+'%'}}>EVOLUTION</p>
                                    <img className="connector"src="img/connector.svg" alt ="connector" style={{bottom: 15+'px'}}/>
                                    <a id="hover_3" href="#explain"><img id="block3" className="block" src="img/block.svg" alt="block" style={{bottom: 20+'px'}}/></a> 
                                    <p id="cap3" class="cap" style={{top:22+'%'}}>BLOCKCHAIN</p>

                                    {/* PRO TREE */}

                                    <img className="connector"src="img/connector.svg" alt ="connector" style={{bottom: 40+'px', transform:"rotate(45deg)", right:30+"px" }}/>
                                    <a id="hover_4" href="#explain"><img id="block4" className="block block_pro" src="img/block.svg" alt="block" style={{bottom: 60+'px', right:55+"px"}}/></a> 
                                    <a href="#"><p id="cap4" class="cap" style={{top:30+'%', right:50+"%"}}>Decentralizzata</p></a>

                                    <img className="connector"src="img/connector.svg" alt ="connector" style={{bottom: 70+'px', right:55+"px" }}/>
                                    <a id="hover_5" href="#explain"><img id="block5" className="block block_pro" src="img/block.svg" alt="block" style={{bottom: 80+'px', right:55+"px"}}/></a> 
                                    <a href="#"><p id="cap5" class="cap" style={{top:40+'%', right:60+"%"}}>Oltre</p></a>

                                    <img className="connector"src="img/connector.svg" alt ="connector" style={{bottom: 85+'px', right:55+"px" }}/>
                                    <a id="hover_6" href="#explain"><img id="block6" className="block block_pro" src="img/block.svg" alt="block" style={{bottom: 90+'px', right:55+"px"}}/></a> 
                                    <a href="#"><p id="cap6" class="cap" style={{top:50+'%', right:55+"%"}}>Applicazioni</p></a>

                                    {/* CONTRO TREE */}

                                    <img className="connector"src="img/connector.svg" alt ="connector" style={{bottom: 375+'px', transform:"rotate(-45deg)", left:30+"px" }}/>
                                    <a id="hover_7" href="#explain"><img id="block7" className="block block_contro" src="img/block.svg" alt="block" style={{bottom: 395+'px', left:55+"px"}}/></a> 
                                    <a href="#"><p id="cap7" class="cap" style={{top:30+'%', right:20+"%"}}>Consumi</p></a>

                                    <img className="connector"src="img/connector.svg" alt ="connector" style={{bottom: 405+'px', left:55+"px" }}/>
                                    <a id="hover_8" href="#"><img id="block8" className="block block_contro" src="img/block.svg" alt="block" style={{bottom: 415+'px', left:55+"px"}}/></a> 
                                    <a href="#"><p id="cap8" class="cap" style={{top:40+'%', right:15+"%"}}>Inquinamento</p></a>

                                    <img className="connector"src="img/connector.svg" alt ="connector" style={{bottom: 420+'px', left:55+"px" }}/>
                                    <a id="hover_9" href="#"><img id="block9" className="block block_contro" src="img/block.svg" alt="block" style={{bottom: 425+'px', left:55+"px"}}/></a> 
                                    <a href="#"><p id="cap9" class="cap" style={{top:50+'%', right:15+"%"}}>Smaltimento</p></a>
                                </div>
                    : null}                    
                </div>
        );
    }
    componentDidMount() {
        document.addEventListener('scroll', this.trackScrolling);
    } 
      
    componentWillUnmount() {
        document.removeEventListener('scroll', this.trackScrolling);
    }
      
    trackScrolling = () => {
        const { pageYOffset } = window;
        //const division offest
        const block1 = document.getElementById( "lock" ).offsetTop +100
        const block2 = document.getElementById( "ev_div" ).offsetTop
        const block3 = document.getElementById( "bc_div" ).offsetTop
        const block4 = document.getElementById( "pc_div" ).offsetTop
        if(this.state.active === 0){
            if(pageYOffset >= block1){
                this.setState({ active: 1 });
            }
        }
        if(this.state.active === 1){
            if(pageYOffset >= block2){
                this.setState({ active: 2 });
            }
        }
        if(this.state.active === 2){
            if(pageYOffset >= block3){
                this.setState({ active: 3 });
            }
        }
        if(this.state.active === 3){
            if(pageYOffset >= block4){
                this.setState({ active: 4 });
            }
        }

    };
}

export default Sidebar