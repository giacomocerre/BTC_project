import React from "react"

// let ev_bottom = 0;
// let bc_bottom = 0;

class Sidebar extends React.Component {
    state = { active: 0 };
    render() {
        const { active } = this.state;
            return(
                <div id="sidebar">
                    { active === 1 ? 
                                <div id="tree">
                                    <img id="block1" src="img/block.svg" alt="block"/> 
                                </div>
                    : active === 2 ? 
                                <div id="tree">
                                    <img id="block1" className="block" src="img/block.svg" alt="block"/> 
                                    <img className="connector"src="img/connector.svg" alt ="connector" style={{bottom: 5+'px'}}/>
                                    <img id="block2" className="block" src="img/block.svg" alt="block" style={{bottom: 10+'px'}}/> 
                                </div>
                    : active === 3 ?    
                                <div id="tree">
                                    <img id="block1" className="block" src="img/block.svg" alt="block"/> 
                                    <img className="connector"src="img/connector.svg" alt ="connector" style={{bottom: 5+'px'}}/>
                                    <img id="block2" className="block" src="img/block.svg" alt="block" style={{bottom: 10+'px'}}/> 
                                    <img className="connector"src="img/connector.svg" alt ="connector" style={{bottom: 15+'px'}}/>
                                    <img id="block2" className="block" src="img/block.svg" alt="block" style={{bottom: 20+'px'}}/> 
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
        
        if(pageYOffset >= block1){
            this.setState({ active: 1 });
        }else{
            this.setState({ active: 0 });
        }
        if(pageYOffset >= block2){
            this.setState({ active: 2 });
        }
        if(pageYOffset >= block3){
            this.setState({ active: 3 });
        }

    };
}

export default Sidebar