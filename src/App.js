import React from 'react';
import Open from './components/open';
import Container from "./components/container"

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      height: 0,
      width: 0,
      responsive: 0
    };

    window.addEventListener("resize", this.update);
  }

  componentDidMount() {
    this.update();
  }

  update = () => {
    if(window.innerWidth > 1200){
      this.setState({
        responsive: 0
      });
    }
    else if(window.innerWidth <= 1200 && window.innerWidth > 480){
      this.setState({
        responsive: 10
      });
    }
    else if(window.innerWidth <= 480){
      this.setState({
        responsive: 20
      });
    }
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth
    });
  };

  render() {
    return(
      <div id="root">
        <div id="measure">
            <span id="win_height">{this.state.height}</span>
            <span id="win_width">{this.state.width}</span>
            <span id="responsive">{this.state.responsive}</span>
        </div>
        <Open />
        <Container responsive={this.state.responsive}/>
      </div>
    );
     
  }
}

export default App;
