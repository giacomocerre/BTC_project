import React from 'react'

class Open extends React.Component {
    state = { active: 0 };
    componentDidMount() {
      window.addEventListener("scroll", this.handleScroll);
    }
  
    componentWillUnmount() {
      window.removeEventListener("scroll", this.handleScroll);
    }
  
    handleScroll = event => {
      const { pageYOffset } = window;
      const { active } = this.state;
  
      if (pageYOffset > 0 && active === 0) {
        this.setState({ active: 1 });
      } else if (pageYOffset === 0 && active === 1) {
        this.setState({ active: 0 });
      }
    };
  
    render() {
      const { active } = this.state;
      var url = ""
      if (active === 0){
        url = "img/lock_close.png"
      }else{
          url = "img/lock_open.png"
      }
      return (
        <section id="open" className="full_height">
            <div id="open_content">
                
                <h1 id="main_title">Blockchain: <br/>Il prezzo del consenso</h1>
                <p className="subtitle">Dolor sit amet der mit losel numn sit amet der fun cus mein.</p>
                <img id="logo" src="img/logo.png" alt="logo" />
            </div>
            <div id="start_block">
                <img id="lock" src={url} alt="lock" />
                <p>Blocco 1</p>
            </div>
        </section>
      );
    }
  }

export default Open